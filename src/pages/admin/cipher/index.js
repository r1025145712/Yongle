import React, { Component } from 'react';
import {CipherContainer} from './styled'
import {modifyPasswordApi} from "api/axios"
import { Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import Cookies from "js-cookie"
@withRouter
class Cipher extends Component {
    render() {
        return (
            <CipherContainer>
                <div class="bodybg">
                </div> <h3 class="head-tit">
                <a href="#/admin" className="goback" ></a>
                </h3>
                <div class="change-pwd"><h4>修改密码</h4>
                    <div class="form mt30"><label>
                        <input name="pwdshowpwd" data-vv-as="旧密码" type="password" ref="old_password" placeholder="旧密码" class="pwd" />
                        <span class=" is-danger"  style={{display: "none"}}></span>
                        <i class="hidePwd-icon"></i></label>
                        <label>
                            <input name="newpwdshowpwd" data-vv-as="新密码" type="password" ref="new_password" placeholder="新密码" class="pwd" />
                            <span class=" is-danger" style={{display: "none"}}></span>
                            <i class="hidePwd-icon"></i>
                        </label>
                    </div>
                    <div class="f11 gray5 pl10 mt15">密码由6～18位字母/数字/英文符号（不含空格）组成</div>
                    <div class="btns mt30"><a href="javaScript:;" class="btn gradual-red white f16" onClick={this.handleModify.bind(this)}>修改</a>
                    </div>
                </div>
            </CipherContainer>
        );
    }
    async handleModify(){
        let password=this.refs.old_password.value;
        let confirm=this.refs.new_password.value;
        let username=localStorage.getItem("name")
        if(password!==''&&confirm!==''){
            let data=await modifyPasswordApi(password,confirm,username)
            if(data.data.code===1){
                Toast.success(data.data.info)
                Cookies.remove("token")
                this.props.history.push("/login")
            }else{
                Toast.fail(data.data.info)
            }
        }else{
            Toast.fail("请输入密码")
        }
    }
    
}

export default Cipher;