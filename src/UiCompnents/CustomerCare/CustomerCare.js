import React from 'react'
import { Box, ArrowRepeat, CreditCard, Headset   } from "react-bootstrap-icons";

function CustomerCare() {
  return (
    <div>
        <div className="customer-care">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="customer-care-wrap">
                            <div>
                                <Box className="c-care-icon"/>
                            </div>
                            <div>
                                <h6 className="c-care-heading">Pickup at any Store</h6>
                                <span className="c-care-context">Free shipping on orders over $65</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="customer-care-wrap">
                            <div>
                                <ArrowRepeat className="c-care-icon"/>
                            </div>
                            <div>
                                <h6 className="c-care-heading">Free returns</h6>
                                <span className="c-care-context">30-days free return policy</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="customer-care-wrap">
                            <div>
                            <CreditCard className="c-care-icon"/>
                            </div>
                            <div>
                                <h6 className="c-care-heading">Secured payments</h6>
                                <span className="c-care-context">We accept all major credit cards</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="customer-care-wrap">
                            <div>
                                <Headset className="c-care-icon"/>
                            </div>
                            <div>
                                <h6 className="c-care-heading">Customer service</h6>
                                <span className="c-care-context">Top notch customer service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerCare