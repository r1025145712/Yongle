import React from 'react';
import './index.css'

class Head extends React.Component {
    render() {
        return (
            <h3 className="head-tit ">
                分类
                <a href="" className="goback"></a>
                <a  className="search"></a>
            </h3>
        );
    }
}

export default Head;