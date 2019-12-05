import React, { Component } from 'react';
import {AdminContainer} from './adminstyled'
class Admin extends Component {
    constructor(props) {
        super()
        this.state = {
            name: localStorage.getItem("name") || {},
        }
    }
    render() {
        let { name } = this.state
        return (
            <AdminContainer>
                <h3 className="head-tit">帐号信息<a href="#/mine" className="goback" ></a></h3>
                <div class="real-prove pl30 pr30 mt20">
                    <div class="real-con">
                        <label class="cl">
                            <b class="fl">昵称</b> <p class="fl">{name}</p>
                        </label>
                        <label class="cl id-type"><b class="fl gray9">实名认证</b>
                            <p class="fl tr">
                                <a href="/person/profile.html" class="nuxt-link-exact-active nuxt-link-active">
                                    <em class="fr uncertified">未认证</em>
                                    <i></i>
                                </a>
                            </p>
                        </label>
                        <label class="cl id-type">
                            <b class="fl gray9">修改资料</b>
                            <p class="fl tr"><a href="#/modify" class=""><i></i></a></p>
                        </label>
                        <label class="cl id-type">
                            <b class="fl gray9">收货地址</b>
                            <p class="fl tr"><a href="/person/address.html" class=""><i></i></a></p>
                        </label>
                        <label class="cl id-type">
                            <b class="fl gray9">常用购票人</b>
                            <p class="fl tr"><a href="/person/spectator.html" class=""><i></i></a>
                            </p>
                        </label>
                        <label class="cl id-type">
                            <b class="fl gray9">修改密码</b>
                            <p class="fl tr">
                                <a href="#/cipher" class=""><i></i></a>
                            </p>
                        </label>
                        <div class="real-btn">
                            <div class="btns"><a href="javascript:;" class="btn gradual white">安全退出</a></div>
                        </div>
                    </div>
                </div>
            </AdminContainer>
        );
    }
}

export default Admin;