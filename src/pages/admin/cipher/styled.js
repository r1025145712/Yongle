import styled from 'styled-components'


export const CipherContainer = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: #f5f6f7;
    .head-tit {
    position: relative;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100% ;
    font-size: .17rem;
    padding: 0 .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.head-tit .goback {
    left: .15rem;
    background-size: .8rem;
    background-position: 0px -3.89rem;
}
.head-tit .goback, .head-tit .share, .head-tit .search {
    width: .18rem;
    height: .18rem;
    position: absolute;
    display: block;
    top: .11rem;
    color: #323232;
}
.goback{
    background: url(img/icon.png) no-repeat;
}
.change-pwd {
    padding: .2rem .4rem 0;
}
.change-pwd h4 {
    font-size: .27rem;
    letter-spacing: 3px;
    font-weight: 700;
    color: #000;
}
.mt30 {
    margin-top: 0.3rem;
}
.form label {
    display: block;
    position: relative;
    font-size: 0.12rem;
    margin-bottom: 0.2rem;
}
.form label input.pwd {
    background-size: 0.85rem;
    background-position: 0.2rem -2.67rem;
}
.change-pwd .form input {
    background: #fff;
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
    color:#ccc;
}
input {
    caret-color: #ff3a56;
}
.change-pwd .form label:last-child {
    margin-bottom: .1rem;
}
.form label input.pwd {
    background-size: 0.85rem;
    background-position: 0.2rem -2.67rem;
}
.change-pwd .form input {
    background: #fff;
}
.form label .is-danger {
    text-align: center;
    position: absolute;
    bottom: -.18rem;
    width: 100%;
    font-size: .12rem;
}
.change-pwd .form label .hidePwd-icon {
    background-position: 0 -2641.5px;
    background-size: .5rem;
}
.form label i.hidePwd-icon {
    background-size: 0.85rem;
    background-position: 0 -1.17rem;
}
.change-pwd .form label i{
    background: url(img/product-icon.png) no-repeat;
    background-size: .5rem;
}
.form label i {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    background: #FF2959;
    top: 0.075rem;
    right: 0;
}
.f11 {
    font-size: .11rem;
}
.gray5 {
    color: #b5bbc1;
}

.mt15 {
    margin-top: 0.15rem;
}
.pl10 {
    padding-left: 0.1rem;
}
.btns {
    display: flex;
}
.mt30 {
    margin-top: 0.3rem;
}
.btns a:first-child {
    margin-left: .08rem;
}
.btns .btn {
    flex: 1;
    text-align: center;
    height: .44rem;
    /* line-height: .44rem; */
    border-radius: 1rem;
    letter-spacing: 2px;
    font-size: .15rem;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    text-align: center;
}

.btns a {
    margin: .08rem .08rem .08rem 0;
}
.white {
    color: white;
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.f16 {
    font-size: 0.16rem;
}
.btn {
    border-top: 0 none;
}
`