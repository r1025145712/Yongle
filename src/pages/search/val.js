import React from 'react'
import { PageContainer } from 'common/styled'
import { SearchContainer } from "./styled"
import { connect } from "react-redux"
import List from "./list"
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            flag: false,
            date:[{
                clock:"today",
                name:"今天",
            },
            {
                clock:"tomorrow",
                name:"明天",
            },
            {
                clock:"thisWeek",
                name:"本周内",
            },
            {
                clock:"thisWeekEnd",
                name:"本周末",
            },
            {
                clock:"nextWeek",
                name:"下周",
            },
            {
                clock:"thisMonth",
                name:"本月",
            }]
        }
    }
    componentWillMount(){
        this.props.handleAsyncGet1(this.props.match.params.con);
    }
    shouldComponentUpdate(newProps,newState) {
        // if(newState.message == this.state.message){
        //     return false
        // }
        return true
    }
    render() { 
        let { content, val,city,day,type,inputVal} = this.props;
        let { flag,date } = this.state
        console.log(1)
        if(content.length===0){
            return false
        }else{
            return (
                <PageContainer>
                    <SearchContainer>
                        <h3 className="head-tit">搜索<a className="goback" ></a></h3>
                        <div className="title-search">
                            <form action="" className="input-kw-form">
                                <input type="search" ref="inputVal"  onKeyDown={this.handleSou.bind(this)} placeholder={inputVal} className="searchtxt" />
                            </form> <i className="search-icon"></i> <a href="/" className="closes nuxt-link-active">取消</a>
                        </div>
                        {/* 分类 */}
                        <div className="classify-type" >
                            <ul>
                                <li className={flag === "guo" ? "active" : ""} onClick={this.handleTo.bind(this)}><i></i>{(content.searMap.cityjx||'全国')}</li>
                                <li className={flag === "lei" ? "active" : ""} onClick={this.handleTo1.bind(this)} ><i></i>{(content.searMap.typeajx||'全部分类')}</li>
                                <li className={flag === "sj" ? "active" : ""} onClick={this.handleTo2.bind(this)}><i></i>{(content.searMap.datestr||'全部时间')}</li>
                            </ul>
                        </div>
                        <div style={{ display: flag === "guo" ? 'block' : 'none' }} className="type-tab"><ol className="cl">
                            <li className={content.searMap.cityjx==="全国"?'active':''} onClick={this.handleCity.bind(this, '',type,day)}>
                                全国
                            </li>
                            {(content.fcitys || []).map((item) => (
                                <li key={item.FCONFIGID} className={content.searMap.csjx===item.CITYJX?"active":""} onClick={this.handleCity.bind(this, item.CITYJX,type,day)}>
                                    {item.JXNAME}
                                </li>
                            ))}
                        </ol>
                        </div>
                        <div style={{ display: flag === "lei" ? 'block' : 'none' }} className="type-tab">
                            <ol className="cl">
                                <li className={content.searMap.typeajx==="全部分类"?'active':''} onClick={this.handleType.bind(this, '',city,day)}>全部分类</li>
                                {(content.typeas || []).map((item) => (
                                    <li key={item.PRODUCTTYPEAID}  onClick={this.handleType.bind(this, item.TYPEAJX,city,day)} className={content.searMap.typeajx===item.NAME?"active":""}>{item.NAME}</li>
                                ))}
                            </ol>
                        </div>
                        <div style={{ display: flag === "sj" ? 'block' : 'none' }} className="time-tab">
                            <div className="time-content">
                                <p className="time-type cl">
                                    <li  className={content.searMap.datestr==="全部时间"?'active':''}  onClick={this.handleday.bind(this,'', city,type)}>全部时间</li>
                                    {date.map((item)=>(
                                    <li  key={item.clock}  className={content.searMap.datestr===item.name?"active":""} onClick={this.handleday.bind(this,item.clock, city,type)}>{item.name}</li>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <List list={val} />
                    </SearchContainer >
                </PageContainer>
            )
        }
     
    }
    componentDidMount(){
        this.props.history.listen(() => {
            sessionStorage.removeItem("val");
            sessionStorage.removeItem("content");
        })  
    }
    handleSou(e) {
        if (e.keyCode === 13) {
            let val = this.refs.inputVal.value
            let url = this.props.match.params.con.split('-')
            url.pop()
            url.push(val)
            url.join("-")
            var route =  url.join("-")
            console.log(route)
            this.props.history.push(route)
            this.props.handleAsyncGet1(route);
            this.setState({
                flag: false
            })
        }
    }
    handleCity(city,type,day) {
        this.props.handleCity(city);
        let url = this.props.match.params.con.split('-').pop()
        let val=[]
        val.push(city,type,day,url)
        var route = val.filter(function (s) {
            return s && s.trim(); 
        });
        route=route.join("-")
        this.props.history.push(route)
        this.props.handleAsyncGet1(route);
        this.setState({
            flag: false
        })
    }
    handleType(type,city,day) {
        this.props.handleType(type);
        let url = this.props.match.params.con.split('-').pop()
        let val=[]
        val.push(city,type,day,url)
        var route = val.filter(function (s) {
            return s && s.trim(); 
        });
        route=route.join("-")
        console.log(route)
        this.props.history.push(route)
        this.props.handleAsyncGet1(route);
        this.setState({
            flag: false
        })
    }
    handleday(day,city,type){
        this.props.handleDay(day);
        let url = this.props.match.params.con.split('-').pop()
        let val=[]
        val.push(city,type,day,url)
        var route = val.filter(function (s) {
            return s && s.trim(); 
        });
        route=route.join("-")
        console.log(route)
        this.props.history.push(route)
        this.props.handleAsyncGet1(route);
        this.setState({
            flag: false
        })
    }
    handleTo() {
        if (this.state.flag !== "guo") {
            this.setState({
                flag: "guo"
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
    handleTo1() {
        if (this.state.flag !== "lei") {
            this.setState({
                flag: "lei"
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
    handleTo2() {
        if (this.state.flag !== "sj") {
            this.setState({
                flag: "sj"
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
}

export default Search;