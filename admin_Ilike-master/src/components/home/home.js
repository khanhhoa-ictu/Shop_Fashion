import React, { Component } from "react";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      sum: 1000
    };
  }
  tinh(count) {
    return (count / this.state.sum) * 100 + "%";
  }
  render() {
    return (
      <div>
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />Dashboard
                  </li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box blue-bg">
                  <i className="fa fa-cloud-download" />
                  <div className="count">6.674</div>
                  <div className="title">Download</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box brown-bg">
                  <i className="fa fa-shopping-cart" />
                  <div className="count">7.538</div>
                  <div className="title">Purchased</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box dark-bg">
                  <i className="fa fa-thumbs-o-up" />
                  <div className="count">4.362</div>
                  <div className="title">Order</div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-cubes" />
                  <div className="count">1.426</div>
                  <div className="title">Stock</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="panel">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                        S???n Ph???m B??n Ch???y(T??? L??? V???i 1000
                        S???n Ph???m)
                      </strong>
                    </h2>
                    
                  </div>
                  <div className="panel-body">
                    <table className="table table-striped table-advance table-hover">
                      <thead>
                        <tr>
                          <th />
                          <th>T??n S???n Ph???m</th>
                          <th>Gi??</th>
                          <th>S??? L?????ng </th>
                          <th>Hi???u Xu???t</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.top_product.map((element, index) => {
                          return(
                            <tr>
                            <td>
                              <div>
                                <div className='product'>
                                  <div className='img'>
                                        <img
                                      src={element.img}
                                     
                                    />
                                  </div>
                                </div>
                              </div>
                              
                            </td>
                            <td>{element.name}</td>
                            <td>{element.price}</td>
                            <td>{element.count}</td>
                            <td>
                              <div className="progress thin">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  role="progressbar"
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: this.tinh(element.count) }}
                                />
                              </div>
                              <span className="sr-only">73%</span>
                            </td>
                          </tr>
                          ) 
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

        
            <br />
            <br />

          </section>
         
        </section>
      </div>
    );
  }
}
export default Home;
