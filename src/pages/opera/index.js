import React, { Component } from 'react';
import { PageContainer } from './styled'
import Content from './content.js'
import { Carousel, WingBlank } from 'antd-mobile';
class Opera extends Component {
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
                data: ['http://static.228.cn/upload/2018/06/06/1528256783339_w9e6.jpg',
                    'http://static.228.cn/upload/2018/04/25/1524637153542_o1z2.png',
                    'http://static.228.cn/upload/2018/12/05/1543981140805_d3x7.png',
                ],
            });
        }, 100);
    }
    render() {
        return (
            <PageContainer>
                <div className="bodybg">
                    <h3 className="head-tit">永乐说戏
                    <a className="goback" href="#/home" ></a></h3>
                    <div className="pb50">
                        <div className="lunbo">
                            <WingBlank>
                                <Carousel
                                    autoplay={true}
                                    infinite
                                    dots={false}
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
                        </div>
                    </div>
                    <Content />
                </div>
            </PageContainer>
        )
    }
}

export default Opera;