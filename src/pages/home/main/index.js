import React from 'react'
// import '../index.css'
import { recommendApi,venueApi } from 'api/vocal'

import {MainContainer} from './styled'
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            sign: true
        }
        // this.handleGet()
    }
    render() {
        let{sign}=this.state
        return (
            <MainContainer>
                <h3 className="con-tit con-tits mb15 pt10"><b onClick={this.handleGet.bind(this)} className={sign===true?'active':''}>推荐</b> 
                <b onClick={this.handleVenue.bind(this)} className={sign===false?'active':''} >场馆</b></h3>
                {sign === true ? <ul className="recommend cl">
                    <li><a href="/ticket-632985824.html" className="">
                        <img src="http://static.228.cn/upload/2019/11/08/AfterTreatment/1573180880101_o6l9-0.jpg"
                            className="imgs" alt=""/>
                        <b className="db mt5 name">【上海】吴青峰"太空备忘记"巡回演唱会-上海站</b>
                        <span className="gray9 db f11">12.06~ 12.07</span>
                        <span className="gray5 db f10"><b className="red mr5 f13">¥ 380</b>起</span>
                    </a>
                    </li>
                </ul> :
                    <ul className="venue cl">
                        <li>
                            <a href="/venue-143639.html" >
                                <img alt="" src="http://static.228.cn/upload/2014/10/22/AfterTreatment/1413979266764_h4e0-0.jpg" className="imgs" />
                                <b className="db mt5 name">工人体育馆</b>
                                <span className="gray9 venue-address db f11">朝阳区三里屯工体北路</span>
                            </a>
                        </li>
                    </ul>}
                <div className="load-more tc mb10"><a href="/category" >查看更多</a></div>
            </MainContainer>
        )
    }
    async handleGet() {
        this.setState({
            sign:true
        })
        let data = await recommendApi()
        console.log(data.data.pagerMemoryList)
    }
    async handleVenue(){
        this.setState({
            sign:false
        })
        let data = await venueApi()
        console.log(data.data.venuePage.list)
    }
}
export default Main;