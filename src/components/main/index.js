import React, { Component } from 'react';
import { connect } from "react-redux"
import { mapStateToProps, mapDispathToProps } from "./mapStore"
import { Center } from "./styled"
import {withRouter} from "react-router-dom"
@connect(mapStateToProps, mapDispathToProps)

@withRouter
class Weekchoice extends Component {

    componentDidMount() {
        this.props.handleAsyncfanhui();
    }
    render() {

        let { classify } = this.props;
        // console.log(classify)
        let times=classify
        let action
        if (times===undefined) {
            times=[]
        }else{
            times=classify;
            if((times.length)%10===0){
                action=1
            }else{
                action=0
            }
        }
        
       
        // let {load} = this.props
        return (
            <Center>

                <div className="goods-list search-noResult" >

                    <div className="tit tc"  style={{display: (times.length)===0 ? "block" : "none"}}>
                        <i></i>
                        <b className="gray9 db">没找到相关信息</b>
                        <span className="gray9 db">换个分类试试</span>
                    </div>

                    <div className="main">
                        
                        {
                            (classify || []).map((item, index) => (
                                <a onClick={this.Jump.bind(this,item)} data-id={item.productid} className="goods-con" key={index}>
                                    <div className="left">
                                        <img alt="" src={'//static.228.cn/'+item.pbigimg} />
                                        {(() => {
                                            switch(Number(item.status)) {
                                                case 0:
                                                return <i className="gradual-gray tip  tip-grabSeat " style={{background:"linear-gradient(to left, red 0%, red 100%)"}}>售票中</i>;
                                                case 1:
                                                return <i className="gradual-gray tip  tip-grabSeat " style={{background:"linear-gradient(to left, #3dd9c1 0%, #00a0c2 100%)"}}>预定</i>;
                                                case 4:
                                                return <i className="gradual-gray tip  tip-grabSeat " style={{background:"linear-gradient(to left, #8da0a9 0%, #d5dde1 100%)"}}>售完</i>;
                                                default:
                                                return <i className="gradual-gray tip  tip-grabSeat " style={{background:"linear-gradient(to left, black 0%, black 100%)"}}>暂无售票信息</i>;
                                            }
                                            }
                                            )()}
                                    </div>
                  
                                    <div className="right">
                                        <b className="name">{item.name}</b>
                                        <span className="gray mt10 12">{item.begindate+'~'+item.enddate}</span>
                                        <span className="gray f12">{item.vname}</span>
                                        <span className="gray mt10 f12">
                                        <b className="red f14 mr5">{item.minprice} - {item.maxprice}元<em className="gray5 f11 ml5"></em></b>
                                        </span>
                                    </div>
                                </a>
                            ))
                        }
                        <div className="load-more" 
                            style={{display: action!==0 ? "block" : "none"}}
                            
                        ><span className="s" onClick={this.Refresh.bind(this)}>查看更多</span></div>
                        
                    </div>
                </div>

            </Center>
        );
    }
    Refresh(){
        this.props.Load()
    }
    Jump(item){
        this.props.history.push({pathname:"/details/",state:item});
    }

}
export default Weekchoice



