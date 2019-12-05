import React, { Component } from 'react';
import { DetailsContainer } from "./styled"
import { Toast} from 'antd-mobile';
import { withRouter } from "react-router-dom";
@withRouter



class Details extends Component {
    
    constructor(props) {
        super()
        const { location } = props;

        let item;

        if (location.state) {//判断当前有参数
            item = location.state;
            sessionStorage.setItem('data',JSON.stringify(item));// 存入到sessionStorage中
        } else {
            item = JSON.parse(sessionStorage.getItem('data')) ;// 当state没有参数时，取sessionStorage中的参数
        }
        console.log(item)
        this.state = {
            data: item,
            sign:false
        }
    }
    render() {
        let { data ,sign} = this.state
        console.log(data)
        return (
            <DetailsContainer>

                <div className="details">
                    {
                        <div>
                            <div className="head">
                                <div className="head-bg">
                                    <div className="bgImg">
                                        <img className="bgImgBg"
                                            src={'//static.228.cn/' + data.pbigimg} alt="" />
                                    </div>
                                    <div className="bgImg-black"></div>
                                </div>
                                <div className="head-icon">
                                    <a onClick={this.handleBack.bind(this)} className="gobacks"></a>
                                    <a href="javascript:;" className="share"></a>
                                    <a  onClick={this.handleCollect.bind(this,data)} className={sign===true? 'love active':"love"  }></a>
                                </div>
                                <div className="head-con">
                                    <div className="left">
                                        <img src={'//static.228.cn/' + data.pbigimg} />
                                        <i style={{ display: data.status === '0' ? 'block' : 'none' }} className="gradual-red tip  tip-grabSeat ">售票中</i>
                                        <i style={{ display: data.status === '4' ? 'block' : 'none' }} className="gradual-gray tip  tip-grabSeat ">售完</i>
                                        <i style={{ display: data.status === '1' ? 'block' : 'none' }} className="ticket-state-blue tip  tip-grabSeat ">预订</i>
                                    </div>
                                    <div className="right">
                                        <h3 className="white" dangerouslySetInnerHTML={{ __html: data.name }}></h3>
                                        <div className="cl product-icon mt8"></div>
                                        <b className="price f14 mt30 db">
                                            <em className="f16"><em className="f14">¥ </em>{Number(data.minprice)} - <em className="f14">¥ </em>{data.maxprice}</em>
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="top">
                                    <a href="/venue-481411.html" className="addresses">
                                        <p><i></i><span>{data.begindate}-{data.enddate}</span></p>
                                        <p><i></i><span>{data.vname}</span></p> <em className="go-address"></em>
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                    <h3 className="con-tit mb15"><b>注意事项</b></h3>
                    <div className="need-attention">
                        a)演出详情仅供参考，具体信息以现场为准；<br />b)儿童需持票入场；<br />c)演出票品具有唯一性、时效性等特殊属性，其中年票，年卡、季度票、无实际票纸的电子票不支持退换，购票时请务必仔细核对并审慎下单，具体退换票规则详见“退换及缺货说明”。<br />d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。<br />e)票品具有唯一性，遗失不补，入场时必须携带本场演出实体门票（电子票订单除外），如未带门票、门票损坏及持任何购买凭证将无法入场，请妥善保管演出门票。
            </div>
                    <h3 className="con-tit mb15 mt15"><b>演出详情</b></h3>
                    <div id="attentionShow" className="need-attention show-details show-notices-imgs" >
                        <p >最低演出时长：约130分钟，以现场为准</p>
                        <p >最低演出曲目数:24</p>
                        <p ><strong>温馨提示</strong></p>
                        <p ><strong>俱乐部包厢680元价位分布在3层和4层，座位将按照付款先后顺序依次分配。</strong></p>
                        <p >简介</p>
                        <p >一直以来，他都是一个人独活。</p>
                        <p >尽管眼前来往穿行的云朵，轻易让人们将狭小的片场，误认成没有边界的天空。</p>
                        <p >巴别塔里不只一个房间，分分秒秒都在生成宇宙。</p>
                        <p >扫描过后仍在变色的手写字，连续不断的快门，</p>
                        <p >从徘回头顶的乌云棉絮里抽长出来的人间经文，</p>
                        <p >跟着吐露而来的后遗症，干呕、热汗、嘶吼，</p>
                        <p >伤风雷雨般，降落成每一首歌，从无到有。</p>
                        <p >另一种独活。</p>
                        <p >是从无声到被听见的，从被听见到被曲解的，</p>
                        <p >从被曲解以后，一切丰美、善意与想象逐渐倾圮，</p>
                        <p >唯有拥挤的幻梦从废墟里诞生。</p>
                        <p >如果有一场演唱会。</p>
                        <p >准备被忘记，防备被忘记。</p>
                        <p >无人可预示的星站记事，</p>
                        <p >修改着过去，修改着未来。</p>
                        <p >我们只在当下的存在里相遇，</p>
                        <p >只因彼此的牵引，暂居在太空的太空里。</p>
                        <p >航天员的手脏脏黑黑的，</p>
                        <p >习惯冰冷的他，却多么想紧抱着你。</p>
                        <p >一见一忘，再忘再见。</p>
                        <p >水镜的倒影里，一只蜂鸟忽明忽灭，</p>
                        <p >他会如何开始歌唱呢？</p>
                        <p >演唱会独家代理-环球音乐</p>
                        <p >监制-哈里坤的狂欢</p>
                    </div>
                    <div className="tc mt15 mb20"><a id="attentionBtn" className="look-more">查看更多</a></div>
                    <div className="answer"><a href="javascript:;" className="">
                        FAQ
                    <i></i></a>
                    </div>
                    <div className="answer"><a href="javascript:;" className="">
                        在线问答
                    <i></i></a>
                    </div>
                </div>
                <div className="real-btn">
                    <div className="btns">
                        <span><a href="###" className="service"><b></b></a></span>
                        <a href="javascript:;"  style={{ display: data.status === '1' ? 'block' : 'none' }}  className="btn ticket-state-oragin white">预订登记</a>
                        <a href="javascript:;" style={{ display: data.status === '0' ? 'block' : 'none' }}  class="btn gradual-red white">立即购买</a>
                        <a href="javascript:;"  style={{ display: data.status === '4' ? 'block' : 'none' }} class="btn gradual-red white">缺货登记</a>
                    </div>
                </div>
            </DetailsContainer>
        );
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleCollect(data){
        
        if(this.state.sign===false){
            this.setState((state)=>{
                return {
                    sign:true
                }
            })
            Toast.success("收藏成功", 1)
            if(localStorage.getItem("collect")=="null"){
                localStorage.setItem("collect",JSON.stringify({data:data})
                )
            }else{
                let sc=localStorage.getItem("collect")
                console.log(sc)
            }
           
        }else{
            this.setState((state)=>{
                return {
                    sign:false
                }
            })
            Toast.success("取消收藏", 1)
      
            
        }
      
    }
    componentDidMount() {
        // console.log(this.props)
    }
}

export default Details;