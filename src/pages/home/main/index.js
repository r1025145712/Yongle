import React from 'react'
import { connect } from "react-redux"
import { MainContainer } from './styled'
import {withRouter} from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            sign: true
        }
     
    }
    render() {
        let { sign } = this.state
        let { vocal,venue } = this.props;
        return (
            <MainContainer>
                <h3 className="con-tit con-tits mb15 pt10"><b onClick={this.handleGet.bind(this)} className={sign === true ? 'active' : ''}>推荐</b>
                    <b onClick={this.handleVenue.bind(this)} className={sign === false ? 'active' : ''} >场馆</b></h3>
                {sign === true ? <ul className="recommend cl">  
                    {
                    vocal.map((item,index)=>(
                    <li key={item.isdate}>
                        <a  onClick={this.handleDetail.bind(this,item)} >
                        <img src={'//static.228.cn/'+item.pbigimg}
                            className="imgs" alt="" />
                        <b className="db mt5 name">【{item.cityname}】{item.name}</b>
                        <span className="gray9 db f11">{item.begindate}</span>
                    <span className="gray5 db f10"><b className="red mr5 f13">¥ {Number(item.minprice)}</b>起</span>
                    </a>
                    </li>
                    ))
                    }
                </ul>
                :<ul className="venue cl">
                      {
                    venue.map((item,index)=>(
                        <li key={item.LINKID}>
                            <a href="/venue-143639.html" >
                                <img alt="" src={'//static.228.cn/'+item.IMG} className="imgs" />
                                <b className="db mt5 name">{item.VNAME}</b>
                                <span className="gray9 venue-address db f11">{item.ADDRESS}</span>
                            </a>
                        </li>
                          ))
                        }
                    </ul>}
                <div className="load-more tc mb10"><a href="/category" >查看更多</a></div>
            </MainContainer>
        )
    }
    componentDidMount() {
        this.props.handleAsyncGet();
    }
    handleGet() {
        this.setState({
            sign: true
        })
    }
    handleVenue() {
        this.setState({
            sign: false
        })
        this.props.handleAsyncGetvenue();
    }
    handleDetail(item){
        this.props.history.push({pathname:"/details/",state:item});
    }
}
export default Main;