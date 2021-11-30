import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../actions/product.action";
import NavbarContainer from "./navbar.container";
import Slider from "./slider.container";
import * as userActions from "../actions/user.action";
import Billdelivery from "../components/bill/billdelivery";
class BilldeliveryContainer extends Component {
  constructor() {
    super();
  }
  async componentWillMount() {
    this.props.productActions.getBill("true");
    let res = await this.props.userActions.auth();
    if (res === false) this.props.history.push("/login");
  }
  componentWillReceiveProps(nextProps) {
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
        <Billdelivery
          updateIssend={(name,id) =>
          this.props.productActions.updateIssend(name,id)
        }
        page={this.props.page}
        totalpage={this.props.totalpage}
        bill={this.props.bill}
        isupdate={this.props.isupdate}
        backPage={() => this.props.productActions.billBackPage()}
        nextPage={() => this.props.productActions.billNextPage()}
        setPage={page => this.props.productActions.billSetPage(page)}
        getBill={(status => this.props.productActions.getBill(status))}
        />
      </section>
    );
  }
}
const mapStateToProps = state => ({
  islogin: state.userReducers.user.islogin,
  totalpage: state.productReducers.bill.totalpage,
  page: state.productReducers.bill.page,
  bill: state.productReducers.bill.data
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
)(BilldeliveryContainer);
