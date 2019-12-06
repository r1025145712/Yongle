import React, { Component } from 'react';
import { ListContainer } from './liststyled'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class list extends Component {
    constructor(props){
        super()
    }
    render() {
        let list = this.props
        // console.log(list)
        return (

            <ListContainer>
                <div  style={{ display: list.list.length===0 ? 'block' : 'none' }}   className="search-noResult">
                <div className="tit tc">
                    <i></i> 
                    <b className="gray9 db">没找到相关信息！</b>
                     <span className="gray9 db">您也可以换个关键字试试</span>
                </div>
                </div>
                <div className="goods-list search-noResult">
                    {
                        (list.list || []).map((item) => (
                            <a onClick={this.handleDel.bind(this,item)} className="goods-con" key={item.isdate}>
                                <div className="left">
                                    <img src={'//static.228.cn' + item.pbigimg} alt="简迷离GEMINI+MiniG迷<font className='red'>你</font>机《混合理论》无限巡演 西安站" />
                                    <i style={{ display: item.status === '0' ? 'block' : 'none' }} className="gradual-red tip  tip-grabSeat ">售票中</i>
                                    <i style={{ display: item.status === '4' ? 'block' : 'none' }} className="gradual-gray tip  tip-grabSeat ">售完</i>
                                    <i style={{ display: item.status === '1' ? 'block' : 'none' }} className="ticket-state-blue tip  tip-grabSeat ">预订</i>
                                </div>
                                <div className="right">
                                    {/* <b className="name">{item.name}</b> */}
                                    <b dangerouslySetInnerHTML={{ __html: item.name }}></b>
                                    <span className="gray mt10 12">{item.enddate}</span> <span className="gray f12">{item.vname}</span>
                                    <span className="gray mt10 f12"><b className="red f14 mr5">{Number(item.minprice)} - {item.maxprice}元<em className="gray5 f11 ml5"></em></b>
                                    </span>
                                </div>
                            </a>
                        ))}
                    <div  style={{ display: list.list.length>=10 ? 'block' : 'none' }}  class="load-more"><a onClick={this.handleMore.bind(this)} href="javascript:;">查看更多</a></div>
                </div>

            </ListContainer>
        );
    }
    handleDel(item){
        this.props.history.push({pathname:"/details/",state:item});
    }
    handleMore(){
        this.props.handleAsyncGet1(1);
    }
}
export default list;