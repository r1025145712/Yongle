import React, { Component } from 'react';
import { connect } from "react-redux"
import { SubjectContainer } from './styled.js'
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
class Subject extends Component {
    render() {
        let {subject} =this.props;
        return (
            <SubjectContainer>
                <div className="bodybg">
                    <h3 className="head-tit">活动专区<a href="#/home"  className="goback" ></a></h3>
                    <div className="pb50">
                        <div className="activity-area">
                            {subject.map((item,index)=>(
                            <div className="list tc">
                                <div className="photo" ><img
                                    src={'//static.228.cn/'+item.IMG} alt='' /></div>
                                <div className="text f17 fw">{item.REMARK}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="load-more tc mb10"><a href="/category" >查看更多</a></div>
                </div>
            </SubjectContainer>
        );
    }
    componentDidMount(){
        this.props.handleAsyncGet()
    }
}

export default Subject;