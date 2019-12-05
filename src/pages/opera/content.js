import React, { Component } from 'react';
import { Contentlist } from './constyled'
import { connect } from "react-redux"
import {clock} from "./formatdate"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
class Content extends Component {
    render() {
        let { opera } = this.props;
        return (
            <Contentlist>
                <div className="special-list">
                    { 
                    opera.map((item,index)=>(
                    <div className="list" key={item.LINKID}>
                        <a href="/opera/detail-2337971.html">
                            <p className="cl"><span className="fl">
                                <img
                                src={'//static.228.cn/'+item.IMG} alt="" /> <i></i></span>
    <span className="fl"><b>{item.REMARK}</b> <em className="gray5 db mt10 f11">{clock(item.ACTBEGINDATE)}</em></span>
                            </p>
                            <div className="brief border-t ml15 mr15 pt5 f13">{item.TEXT}</div>
                        </a>
                    </div>
                    ))
                    }
                </div>
                <div className="load-more tc mb10"><a href="/category" >查看更多</a></div>
            </Contentlist>
        );
    }
    componentDidMount(){
        this.props.handleAsyncGet()
    }
}

export default Content;