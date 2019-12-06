import React from 'react'
import {LoginContainer} from './styled'
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class Login extends React.Component { 
    constructor(props){
        super()
        this.state={
            sign:false,
            flag:false
        }
    }
    render() {
        let {sign,flag}=this.state
        return (
            <LoginContainer>
                <div className="login-bg"></div>
                <div className="product">
                    <div className="head">
                        <div className="head-icon">
                            <a className="gobacks"></a>
                        </div>
                    </div>
                </div>
                <div className="login">
                    <h3>会员登录</h3>
                    <div className="content">
                        <form id="from">
                            <div className="form">
                                <label>
                                    <input name="username" type="text"  ref="username"  onChange={this.handleName.bind(this)} placeholder="手机号 / 邮箱地址" className="tel" aria-required="true" aria-invalid="false" />
                                    <span className="is-danger" style={{display: "none"}}></span>
                                </label>
                                <label>
                                    <input name="password"  ref="password" onChange={this.handlePass.bind(this)}   placeholder="请输入密码" type="password" className="pwd" aria-required="true" aria-invalid="false" />
                                    <i className="hidePwd-icon"></i>
                                    <span className="is-danger"  style={{display: "none"}}>
                                    </span>
                                </label>
                            </div>
                            <div className="cl exempt">
                                <label  className={sign===true?"fl active":"fl"}>
                                    <input name="freeloginbtn" type="checkbox" onClick={this.handleClick.bind(this)} className="check" />
                                    <span>两周内免登录</span>
                                </label>
                                <a href="/passwd/resetPasswd.html?from=%2Fperson%2Findex.html" className="fr">忘记密码</a></div>
                            <div
                             onClick={this.handleCb.bind(this)}
                             className={flag===true?"login-btn  tc white mt20 active":"login-btn  tc white mt20 "}>登录</div>

                            <div className="other-login-type">
                                <ul>
                                    <li><a href="/api/baidu/index.html" className="tc baiduIcon"></a></li>
                                    <li><a href="javascript:;" className="tc xinlangIcon"></a></li>
                                    <li><a href="javascript:;" className="tc qqIcon"></a></li>
                                </ul>
                            </div>
                            {/* <div>
                                <div>
                                    <input type="hidden" name="geetest_challenge" />
                                    <input type="hidden" name="geetest_validate" />
                                    <input type="hidden" name="geetest_seccode" />
                                </div>
                            </div> */}
                        </form>
                    </div>
                    <div className="foot">
                        <a href="#/register" className="go-register">马上注册</a>
                    </div>
                </div>
            </LoginContainer>
        )
    }
    async handleCb(){
        let val = this.refs.username.value
        let val2 = this.refs.password.value
        let data=await this.props.handleCb(val,val2)
        if(data===1){
            setTimeout(()=>{
                this.props.history.push("/home");
            },1000)
        }     
    }
    handleClick(){
        if (this.state.sign === false) {
            this.setState({
                sign: true
            })
        } else {
            this.setState({
                sign: false
            })
        }
    }
    handleName(){
        let val = this.refs.username.value
        let val2 = this.refs.password.value
        if(val.length!==0&&val2.length!==0){
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
    handlePass(){
        let val = this.refs.username.value
        let val2 = this.refs.password.value
        if(val.length!==0&&val2.length!==0){
            this.setState({
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }
    }
}

export default Login;