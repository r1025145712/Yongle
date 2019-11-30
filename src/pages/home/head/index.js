import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { Home } from './styled'
class Head extends React.Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: '1.3rem',
        }
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['http://static.228.cn/upload/2019/11/20/1574228699539_s7d5.jpg', 
                'http://static.228.cn/upload/2019/11/08/1573194563381_z9k0.jpg', 
                'http://static.228.cn/upload/2019/09/30/1569822822372_c3o3.jpg',
                'http://static.228.cn/upload/2019/09/24/1569319547203_i3v9.jpg'
            ],
            });
        }, 100);
    }
    render() {
        return (
            <Home>
                <div className="home-head">
                    <a href="/selCity.html" className="city">
                        <span>全国</span> <i></i>
                    </a>
                    <div className="search">
                        <input type="text" placeholder="搜索" /> <i></i>
                    </div>
                </div>
                <section className="wh_content">
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            dots={false}
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            // afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </section>
            </Home>
        )
    }
}

export default Head;