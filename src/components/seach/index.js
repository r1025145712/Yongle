import React, { Component } from 'react';

import { Seacrhed } from "./styled"

import { connect } from "react-redux"
import { mapStateToProps, mapDispathToProps } from "./mapStore"

@connect(mapStateToProps, mapDispathToProps)



class Search extends Component {
    constructor() {
        super()
        this.state = {
            fanhui:"",
            cityjx: "全国",
            cityval:"",
            datestr: "全部时间",
            dataval:"",
            typeajx: "全部分类",
            typeval:"",
            cityShow: false,
            classShow:false,
            timeShow:false,
            time:[
                {name:"全部时间",
                shijian:""},
                {name:"今天",
                shijian:"today"},
                {name:"明天",
                shijian:"tomorrow"},
                {name:"本周内",
                shijian:"thisWeek"},
                {name:"本周末",
                shijian:"thisWeekEnd"},
                {name:"下周",
                shijian:"nextWeek"},
                {name:"本月",
                shijian:"thisMonth"},
            ],
        }
    }
    render() {
        let { fanhui,cityShow,classShow,timeShow,cityjx,datestr,typeajx,time,cityval,dataval,typeval } = this.state;
        let { city } = this.props;
        let {leibie} =this.props

        return (
            <Seacrhed id="sosuo" cityShow={cityShow} classShow={classShow} timeShow={timeShow}> 
                <div className="classify-type " >
                    <ul value={fanhui}>
                        <li onClick={this.handlecity.bind(this)} value={cityval}><i></i>{cityjx}</li>
                        <li onClick={this.handleclass.bind(this)} value={typeval}><i></i>{typeajx}</li>
                        <li onClick={this.handletime.bind(this)} value={dataval}><i></i>{datestr}</li>
                    </ul>
                    <div className="time-tab time">
                        <div className="time-content">
                            <p className="time-type cl">
                                {
                                    time.map((item,index)=>(
                                    <li className=""
                                    vaule={item.shijian}
                                    onClick={this.time.bind(this,item)}
                                    key={index}>{item.name}</li>
                                    ))
                                }
                            </p>
                        </div>
                    </div>
                    <div className="time-tab city">
                        <ol className="cl">
                            <li className="active" value="" onClick={this.quanguo.bind(this)}>全国</li>
                            {
                                (city.data || []).map((item, index) => (
                                <li className=""
                                vaule={item.CITYJX}
                                onClick={this.city.bind(this,item)}
                                key={index}>{item.JXNAME} </li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className="time-tab class">
                        <ol className="cl">
                            <li className="active" value="" onClick={this.quanbu.bind(this)}>全部分类</li>
                            {
                                (leibie.data || []).map((item, index) => (
                                <li className=""
                                vaule={item.TYPEAJX} 
                                onClick={this.class.bind(this,item)}
                                key={index}>{item.NAME}</li>
                                ))
                            }
                        </ol>
                    </div>
            
                </div>
            </Seacrhed>
        );
    }
    componentDidMount() {
        this.props.handleAsyncweek();
    }
    handletime() {
        this.setState({
            timeShow: !this.state.timeShow,
            cityShow:false,
            classShow:false
        })
    }
    handlecity(){
        this.setState({
            cityShow: !this.state.cityShow,
            timeShow:false,
            classShow:false
        })
    }
    handleclass(){
        this.setState({
            classShow: !this.state.classShow,
            cityShow:false,
            timeShow:false
        })
    }
    quanguo(){
        this.setState({
            cityShow: false,
            cityjx:"全国",
            cityval:""
        })
    }
    quanbu(){
        this.setState({
            classShow: false,
            typeajx:"全部分类",
            typeval:""
        })
    }
    time(item){
        this.setState({
            timeShow: false,
            datestr:item.name,
            dataval:item.shijian
        })
    }  
    city(item){
        this.setState({
            cityShow: false,
            cityjx:item.JXNAME,
            cityval:item.CITYJX
        })
    }
    class(item){
        this.setState({
            classShow: false,
            typeajx:item.NAME,
            typeval:item.TYPEAJX
        }) 
    }
    componentDidUpdate(){
        let a=this.state.cityval;
        let b=this.state.typeval;
        let c=this.state.dataval;
        // console.log(a,b,c)
        
        if(a===""&&b===""&&c===""){
            this.fanhui="default"
        }else if(a===""&&b!==""&&c===""){
            this.fanhui="search-"+b
        }else if(a===""&&b===""&&c!==""){
            this.fanhui="search-"+c
        }else if(a===""&&b!==""&&c!==""){
            this.fanhui="search-"+b+"-"+c
        }else if(a!==""&&b!==""&&c===""){
            this.fanhui="search-"+a+"-"+b
        }else if(a!==""&&b===""&&c!==""){
            this.fanhui="search-"+a+"-"+c
        }else if(a!==""&&b!==""&&c!==""){
            this.fanhui="search-"+a+"-"+b+"-"+c
        }else{
            this.fanhui="search-"+a
        }
       this.props.add(this.fanhui)
    }
    

    
    

}


export default Search;