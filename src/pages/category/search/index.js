import React from 'react';
import './index.css'

class Search extends React.Component {
    constructor(){
        super()
        this.state={
            list:[
                {
                    name:"全部地点"
                },
                {
                    name:"全部分类"
                },
                {
                    name:"全部时间"
                },
            ]
        }
    }
    render() {
        return (
            <div id="sosuo">
                <div className="classify-type ">
                    {/* fixedActiveNav  */}
                    <ul>
                        {this.state.list.map((item,index)=>(
                            <li  key={index}><i></i>{item.name}</li>
                        ))}
                    </ul>
                    {/* <div class="time-tab">  */}
                    {/* 时间 */}
                    {/* <div class="time-content">
                                    <p class="time-type cl">
                                        <a href="javascript:;" class="active">全部时间</a>
                                        <a href="javascript:;" class="">今天</a>
                                        <a href="javascript:;" class="">明天</a>
                                        <a href="javascript:;" class="">本周内</a>
                                        <a href="javascript:;" class="">本周末</a>
                                        <a href="javascript:;" class="">下周</a>
                                        <a href="javascript:;" class="">本月</a>
                                    </p>
                                </div> */}

                    {/* 分类  */}

                    {/* </div> */}

                    {/* <div class="type-tab"> */}
                    {/* <ol class="cl">
                                    <li class="active">全部分类</li> 
                                    <li yinyuehuia="全部分类" yinyuehuib="演唱会" class="">演唱会</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="话剧舞台剧" class="">话剧舞台剧</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="音乐会" class="">音乐会</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="舞蹈芭蕾" class="">舞蹈芭蕾</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="戏曲综艺" class="">戏曲综艺</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="体育赛事" class="">体育赛事</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="儿童亲子" class="">儿童亲子</li>
                                    <li yinyuehuia="全部分类" yinyuehuib="休闲娱乐" class="">休闲娱乐</li>
                                </ol> */}

                    {/* <ol class="cl">
                                    <li class="active">全国</li>
                                    <li class="">澳门</li>
                                    <li class="">北京</li>
                                    <li class="">包头</li>
                                    <li class="">长春</li>
                                    <li class="">成都</li>
                                    <li class=""> 重庆</li>
                                    <li class="">长沙</li>
                                    <li class="">东莞</li>
                                    <li class="">大连</li>
                                    <li class="">佛山</li>
                                    <li class="">福州</li>
                                    <li class="">贵港</li>
                                    <li class=""> 贵阳</li>
                                    <li class=""> 广州</li>
                                    <li class="">合肥</li>
                                    <li class="">海口</li>
                                    <li class="">哈尔滨</li>
                                    <li class="">惠州</li>
                                    <li class="">杭州</li>
                                    <li class="">江门</li>
                                    <li class="">济南</li>
                                    <li class="">昆明</li>
                                    <li class="">凉山</li>
                                    <li class="">聊城</li>
                                    <li class="">宁波</li>
                                    <li class="">南京</li>
                                    <li class="">南宁</li>
                                    <li class="">青岛</li>
                                    <li class="">泉州</li>
                                    <li class="">日本</li>
                                    <li class="">三亚</li>
                                    <li class="">上海</li>
                                    <li class="">石家庄</li>
                                    <li class="">沈阳</li>
                                    <li class="">深圳</li>
                                    <li class="">苏州</li>
                                    <li class="">泰国</li>
                                    <li class="">天津</li>
                                    <li class="">唐山</li>
                                    <li class="">潍坊</li>
                                    <li class="">武汉</li>
                                    <li class="">无锡</li>
                                    <li class="">西安</li>
                                    <li class="">襄阳</li>
                                    <li class="">厦门</li>
                                    <li class="">盐城</li>
                                    <li class="">烟台</li>
                                    <li class="">珠海</li>
                                    <li class="">遵义</li>
                                    <li class="">郑州</li>
                                </ol> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default Search;