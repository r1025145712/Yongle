import React from 'react';
// import './index.css'
import {Fenlei} from './styled'

class Head extends React.Component {
    render() {
        return (
            <Fenlei className="head-tit ">
                分类
                <a href="" className="goback"></a>
                <a  className="search"></a>
            </Fenlei>
        );
    }
    // handleSearch(){
    //     this.props.history.push("/search")onClick={this.handleSearch.bind(this)}
    // }
}

export default Head;