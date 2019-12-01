import React from 'react';
// import './index.css'
import {Fenlei} from './styled'

class Head extends React.Component {
    render() {
        return (
            <Fenlei className="head-tit ">
                分类
                <a href="" className="goback"></a>
                <a href="" className="search"></a>
            </Fenlei>
        );
    }
}

export default Head;