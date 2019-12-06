import React, { Component } from 'react';
import { CityContainer } from "./styled"
import { connect } from "react-redux"
import {withRouter} from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class City extends Component {
    render() {
        let { city } = this.props;
        return (
            <CityContainer>
                <h3 className="head-tit">选择演出城市<a onClick={this.handleBack.bind(this)} className="goback" ></a></h3>
                <div className="position-city ml20 mt30 gray9 f13">定位城市<em id="locationMsg" className="red ml10 f14">北京</em> <em id="appendMsg" className="red ml10 f14"></em></div>
                <h4 className="gray9 f13 city-tit">热门城市</h4>
                <div className="city-hot hots">
                    <span id="hot_all" onClick={this.handleAsyncCity.bind(this,'index','全国')} className="">全国</span>
                    {

                            (city.hotCitys || []).map((item, index) => (
                            <span key={item.CITYJX} id={'hot_' + item.CITYJX} onClick={this.handleAsyncCity.bind(this,item.CITYJX,item.CITYNAME)} className="" >{item.CITYNAME}</span>
                            )
                            )}

                </div>
                <h4 className="gray9 f13 city-tit">更多城市</h4>
                <div className="city-hot hots">        
                        {
                            (city.fcitys||[]).map((item,index)=>(
                                <span key={item.CITYJX} data-id={  item.CITYJX} onClick={this.handleAsyncCity.bind(this,item.CITYJX,item.CITYNAME)} className="" >{item.JXNAME}</span>
                                
                            ))
                        }
                </div>
            </CityContainer>
        );
    }
    componentDidMount() {
        this.props.handleAsyncGet();
    }
    handleAsyncCity(item,name){
        this.props.history.push({ pathname:'/home',state:{item:item,name:name} });
       
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default City;