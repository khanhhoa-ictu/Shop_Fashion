import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import Product from "../components/product/product";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
class ProductContainer extends Component {
  async componentWillMount() {
    this.props.productActions.getCategory();
    this.props.productActions.getPublisher();
    this.props.productActions.getProduct();
    this.props.productActions.getAuthor();
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.props.productActions.getProduct();
    }
    if (
      nextProps.islogin !== this.props.islogin &&
      nextProps.islogin === false
    ) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <section id="container" className="">
        <NavbarContainer />
        <Slider />
        <Product
          product={this.props.product}
          totalpage={this.props.totalpage}
          page={this.props.page}
          category={this.props.category}
          publisher={this.props.publisher}
          author={this.props.author}
          deleteProduct={id => this.props.productActions.deleteProduct(id)}
          backPage={() => this.props.productActions.backPage()}
          nextPage={() => this.props.productActions.nextPage()}
          setPage={page => this.props.productActions.setPage(page)}
          isadd={this.props.isadd}
          isupdate={this.props.isupdate}
          addProduct={(
            category,
            id_category,
            name,
            price,
            release_date,
            describe,
            file,
            sizes,
          ) =>
            this.props.productActions.addProduct(
              category,
              id_category,
              name,
              price,
              release_date,
              describe,
              file,
              sizes,
            )
          }
          updateProduct={(
            id,
            name,
            category,
            id_category,
            price,
            release_date,
            describe,
            file,
            sizes
          ) =>
            this.props.productActions.updateProduct(
              id,
              name,
              category,
              id_category,
              price,
              release_date,
              describe,
              file,
              sizes
            )
          }
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  product: state.productReducers.product.data,
  totalpage: state.productReducers.product.totalpage,
  page: state.productReducers.product.page,
  category: state.productReducers.category.data,
  publisher: state.productReducers.publisher.data,
  author: state.productReducers.author.data,
  isadd: state.productReducers.product.isadd,
  isupdate: state.productReducers.product.isupdate,
  islogin: state.userReducers.user.islogin
});

const mapDispatchToProps = dispatch => {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
