import React from 'react'
import { MineContainer } from './styled'
class Mine extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: localStorage.getItem("name") || {},
            urlPic: localStorage.getItem("urlPic") || {},
            id: localStorage.getItem("id")|| {},
        }
    }
    render() {
        let { name,urlPic } = this.state
        return (
            <MineContainer>
                <div className="personal">
                    <div className="personal-head">
                        <div className="head-bg">
                            <div className="person-headBg-shadow"></div>
                        </div>
                        <div className="head-icon">
                            <a href="javascript:;" className="gobacks"></a>
                        </div>
                        <div className="con mt80">
                            <div className="top">
                                <div className="head-portrait tc pt10">
                                    <img src={urlPic} alt='' />
                                    <h4 className="f18 mt10">{name}</h4>
                                </div>
                                <div className="right fr"><span><a href="###" className="serviceIcon"><b></b></a></span> <a
                                    href="#/admin" className="setUpIcon"></a></div>
                            </div>
                            <div className="bot tc">
                                <span><a href="/person/myCashCoupon" className="shengou-order">0张<br />现金券</a></span>
                                <span>
                                    <span>未启用</span><br />电子钱包</span>
                                <span> 0<br /> 积分</span>
                            </div>
                        </div>
                    </div>
                    <div className="personal-content nolianmeng">
                        <div className="orders-btn"><a href="/person/order.html" className="yanchu-order"><i></i>我的订单</a> <a
                            href="/person/myCashCoupon" className="sg-cash-coupon"><i></i>现金券</a></div>
                        <div className="btn-list">
                            <p><a href="/person/address.html" className="shipping-address"><i></i>收货地址</a> <a
                                href="/person/collect.html" className="my-collection"><i></i>我的收藏</a> <a
                                    href="/person/shortagerecord.html" className="shortage-registration"><i></i>我的登记</a></p>
                            <p><a href="/person/question.html" className="my-question"><i></i>我的提问</a> <a href="/person/watchProof.html"
                                className="vouchers"><i></i>观演凭证</a></p>
                        </div>
                    </div>
                </div>
            </MineContainer>
        )
    }
}

export default Mine;