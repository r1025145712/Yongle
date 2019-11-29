import React, { Component } from 'react'
import { TabBarRoute } from "../../router"
import {withRouter} from "react-router-dom";

import {TabBarContainer} from './styled'
class TabBar extends Component {
    render() {
        let {path} = this.props;
        return (
            <TabBarContainer>{
                 TabBarRoute.map((item,index) => (
                <a href={'#'+item.path}  key={item.path} className={path===item.path?'active':''}>
                    <svg className="icon" aria-hidden="true">
                    <use xlinkHref={item.icon}></use>
                 </svg>{item.text}</a>
                      ))
                    }
            </TabBarContainer>
        )
    }
}

export default withRouter(TabBar);
