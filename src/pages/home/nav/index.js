import React from 'react'
// import '../index.css'
import {NavContainer} from './styled'
class Hnav extends React.Component {
    render() {
        return (
            <NavContainer>
                <div className="title-nav">
                    <p>
                        <a href="/category/yanchanghui/" ><i></i>演唱会</a>
                        <a href="/category/huajuwutaiju/"  ><i></i>话剧舞台剧</a>
                        <a href="/category/tiyusaishi/" ><i></i>体育赛事</a>
                        <a href="/category/ertongqinzi/" ><i></i>儿童亲子</a></p>
                    <p className="mt25">
                        <a href="/category" ><i></i>全部分类</a>
                         <a href="#/subject"  ><i></i>活动</a>
                         <a href="#/opera"><i></i>永乐说</a> 
                         <a href="#/mine"><i></i>我的</a></p>
                </div>
                <div className="first-pay-first">
                    <a >
                        <img src="http://static.228.cn/upload/2019/11/09/1573281352951_y4i5_m1.jpg" alt="" />
                    </a>
                </div>
            </NavContainer>
        )
    }
}
export default Hnav;