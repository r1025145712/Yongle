import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { Home } from './styled'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Head extends React.Component {
    constructor(props) {
        super()
        const { location } = props;
        let item;

        if (location.state) {//判断当前有参数
            item = location.state;
            sessionStorage.setItem('lunbo', JSON.stringify(item));// 存入到sessionStorage中
        } else {
            item = JSON.parse(sessionStorage.getItem('lunbo'));// 当state没有参数时，取sessionStorage中的参数
        }
        this.state = {
            data: [{IMG:"/upload/2019/11/29/1575020411766_q7l9.jpg"}, {IMG:"/upload/2019/10/02/1569998757961_c5d0.jpg"}, {IMG:"/upload/2019/11/07/1573115736897_m0o6.jpg"}],
            imgHeight: '1.3rem',
        }
    }

    componentDidMount() {
        this.props.history.listen(() => {
            sessionStorage.removeItem("lunbo");
        })
        if (sessionStorage.getItem('lunbo')) {
            let item = JSON.parse(sessionStorage.getItem('lunbo'));
            
            this.props.handleAsyncGetCity(item.item);
         
            console.log(item.item)
          
        }
       
    }
    render() {
        let name = (sessionStorage.getItem('lunbo') ? JSON.parse(sessionStorage.getItem('lunbo')).name : "全国")
        let { poster } = this.props;
        if(sessionStorage.getItem('lunbo')){
            setTimeout(() => {
                this.setState({
                    data: poster
                });
            }, 100)
        }
      
        return (
            <Home>
                <div className="home-head">
                    {
                        <a href="#/city" className="city">
                            <span>{name}</span> <i></i>
                        </a>
                    }
                    <div className="search" onClick={this.handleSearch.bind(this)}>
                        <input type="text" placeholder="搜索" /> <i></i>
                    </div>
                </div>
                <section className="wh_content">
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            dots={false}
                        >
                            {this.state.data.map((val,index) => (
                                <a
                                    key={index}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={'//static.228.cn/' + val.IMG}
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
    handleSearch(){
        this.props.history.push("/search")
    }

}

export default Head;