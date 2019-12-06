import styled from 'styled-components'


export const LoginContainer = styled.div`

.login-bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background: url(//m2static.228.cn/images/loginBg.jpg) no-repeat 50%;
    width: 100%;
    height: 100%;
}
.product .head {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: .2rem;
}
.product .head-icon {
    padding-top: .29rem;
    width: calc(100% - .3rem);
    margin-left: .15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
}
.product .head-icon .gobacks {
    float: left;
    background-position: 0 -34.54rem;
}

.product .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
/* 公共图 */
.product .head-icon a,.login input.tel,.login input.pwd,.login .form label i,.login .exempt label,.login .other-login-type a{
    background: url(img/icon.png) no-repeat; 
}
.login {
    margin: 0.3rem 0.5rem 0;
    h3 {
    color: #fff;
    font-size: 0.32rem;
    margin-bottom: 0.3rem;
    font-weight: bold;
}
}
.form label {
    display: block;
    position: relative;
    font-size: 0.12rem;
    margin-bottom: 0.2rem;
}
.form label input {
    height: 0.44rem;
    width: 100%;
    border: 0.01rem solid rgba(255, 255, 255, .6);
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0);
    text-align: center;
    color: rgba(255, 255, 255, .9);
    font-size: 0.16rem;
    padding: 0 0.3rem 0 .2rem;
}
.form label input.tel {
    background-size: 0.85rem;
    background-position: 0.2rem -2.345rem;
}
.form label .is-danger {
    text-align: center;
    position: absolute;
    bottom: -.18rem;
    width: 100%;
    font-size: .12rem;
}
.form label input:hover {
    border: 0.01rem solid #ff2959;
}
.form label .is-danger{
    color: #ff2959;
}
.form label input.pwd {
    background-size: 0.85rem;
    background-position: 0.2rem -2.67rem;
}
.form label i.hidePwd-icon {
    background-size: 0.85rem;
    background-position: 0 -1.17rem;
}
.form label i.showPwd-icon {
    background-size: 0.85rem;
    background-position: 0 -1.47rem;
}

.login .exempt {
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0.1rem;
    a{
        font-size:.14rem
    }
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.login .exempt label {
    background-position: 0.03rem -1.25rem;
    background-size: 0.6rem;
    span{
       font-size:.14rem
    }
}
.fl {
    float: left;
}
.login .exempt label.active {
    background-position: 0.03rem -1.48rem;
    background-size: 0.60rem;
}
.login .exempt label .check {
    width: 0.15rem;
    height: 0.15rem;
    margin-top: 0;
    margin-right: 0.05rem;
    vertical-align: middle;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
}

input {
    caret-color: #ff3a56;
}
.login .content .exempt a {
    color: rgba(255, 255, 255, 0.7);
}

.fr {
    float: right;
}
.login-btn {
    height: 0.45rem;
    width: 100%;
    background: rgba(255, 255, 255, .7);
    color: #fff;
    border-radius: 1rem;
    opacity: 0.8;
    font-size: 0.16rem;
    line-height: 0.45rem;
}
.login-btn.active {
    background: linear-gradient(135deg, #ff7e6f 0%, #ff2959 100%);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.35);
}
.white {
    color: white;
}
.mt20 {
    margin-top: 0.2rem;
}
.tc {
    text-align: center;
}
.other-login-type ul {
    display: flex;
    margin: 0.5rem 0.25rem 0;
}
.other-login-type li {
    flex: 1;
    text-align: center;
    display: block;
    height: 0.25rem;
}
.login .other-login-type a.baiduIcon {
    width: 0.23rem;
    height: 0.25rem;
    background-size: 0.7rem;
    background-position: 0rem 0rem;
}

.login .other-login-type a {
    display: inline-block;
}
.login .other-login-type a.xinlangIcon {
    width: 0.23rem;
    height: 0.25rem;
    background-size: 0.7rem;
    background-position: 0rem -0.34rem;
}
.login .other-login-type a.qqIcon {
    width: 0.23rem;
    height: 0.25rem;
    background-size: 0.7rem;
    background-position: 0rem -0.66rem;
}
.foot {
    margin-top: 0.8rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.4rem;
}
.foot .go-register {
    font-size: 0.14rem;
    margin-bottom: 0.4rem;
    display: block;
}

.foot a {
    color: #ff3a56;
    text-decoration: underline;
}
`