import React, { Component } from 'react';
import {connect} from "react-redux"
import {mapStateToProps,mapDispathToProps} from "./mapStore"

@connect(mapStateToProps,mapDispathToProps)

 class Weekchoice extends Component {
    constructor(props){
        super(props)
        this.state={
            //我们使用state里面的services来保存所有的service
            //刚开始的时候，内容为空 
            services:[],
            //这里的view决定了我们要显示哪些service
            view:"type_a"
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){
        this.props.handleAsyncweek();
        console.log(this.props.handleAsyncweek())
    }
}
export default Weekchoice