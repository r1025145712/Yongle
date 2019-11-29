import React from 'react'
import '../index.css'
// import { Carousel } from 'antd';
import './head.css'
class Head extends React.Component {
    render() {
        return (
            <div>
                <div className="home-head">
                    <a href="/selCity.html" className="city">
                        <span>全国</span> <i></i>
                    </a>
                    <div className="search">
                        <input type="text" placeholder="搜索" /> <i></i>
                    </div>
                </div>
                <section className="wh_content">
                    {/* <Carousel autoplay dots="false">
                        <div>
                            <img src="http://static.228.cn/upload/2019/11/20/1574228699539_s7d5.jpg" />
                        </div>
                        <div>
                            <img src="http://static.228.cn/upload/2019/11/08/1573194563381_z9k0.jpg" />
                        </div>
                        <div>
                            <img src="http://static.228.cn/upload/2019/09/30/1569822822372_c3o3.jpg" />
                        </div>
                        <div>
                            <img src="http://static.228.cn/upload/2019/09/24/1569319547203_i3v9.jpg" />
                        </div>
                    </Carousel>, */}
            </section>
            </div>
        )
    }
}

export default Head;