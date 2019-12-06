import styled from 'styled-components'


export const MineContainer = styled.div`
    padding-bottom: 0.8rem;
    background:#fff;
.personal .personal-head{
    width: 100%;
    position: relative;
    height: 3.2rem;
    background: #fff;
    z-index: 1;
}
.personal .personal-head .head-bg {
    position: absolute;
    width: 100%;
    height: 70%;
    background: url(http://m2static.228.cn/images/head-poho-bg.jpg) no-repeat top;
    background-size: 120%;
}
.personal .head-bg {
    top: 0;
    position: absolute;
    height: 1.9rem;
    width: 100%;
    overflow: hidden;
    z-index: 1;
}
.person-headBg-shadow {
    width: 100%;
    height: 100%;
    background-size: 100%;
    position: relative;
    z-index: 2;
}
.personal .head-icon {
    padding-top: .29rem;
    width: calc(100% - .3rem);
    margin-left: .15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
}
.personal .head-icon .gobacks {
    float: left;
    background-position: 0 -34.54rem;
}

/* 公共 */
.personal .head-icon a{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}

.personal .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}


/* 名称 */
.personal .personal-head .con {
    position: relative;
    z-index: 9;
    height: 1.79rem;
}

.mt80 {
    margin-top: 0.8rem;
}
.personal .personal-head .con .top {
    background: url(http://m2static.228.cn/images/person-titBg.png) top no-repeat;
    background-size: 100%;
}
.personal .con .top {
    position: relative;
}
.pt10 {
    padding-top: 0.1rem;
}
.tc {
    text-align: center;
}
.head-portrait img {
    height: .6rem;
    width: .6rem;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 0 auto;
}
.f18 {
    font-size: 0.18rem;
}
.mt10 {
    margin-top: 0.1rem;
}
.personal .con .top .right {
    position: absolute;
    top: .33rem;
    right: 0;
}
.fr {
    float: right;
}
.personal .con .top .right a {
    width: .2rem;
    height: .2rem;
    display: block;
    float: left;
    margin-right: .26rem;
}
.personal .con .top .right .setUpIcon {
    background-position: 0 -.28rem;
}
.personal .con .top .right a {
    width: .2rem;
    height: .2rem;
    display: block;
    float: left;
    margin-right: .26rem;
}
.personal .con .top .right a {
    background: url(http://m2static.228.cn/img/31af021.png) no-repeat;
    background-size: .25rem;
}
.personal .con .bot {
    display: flex;
    height: .4rem;
    margin: .2rem .2rem .1rem;
    font-size: .12rem;
}
.personal .con .bot span {
    flex: 1;
}
.personal .con .bot span a {
    color: #000;
}

/* 功能 */
.personal-content{
    background:#fff;
}

.personal-content .orders-btn {
    display: flex;
    height: .98rem;
    border-top: 1px solid #f3f4f5;
    border-bottom: 1px solid #f3f4f5;
    line-height: .98rem;
  
}
.personal-content .orders-btn a {
    flex: 1;
    text-align: center;
    position: relative;
    padding-top: .24rem;
    font-size: .13rem;
    color: #333;
}
.personal-content .orders-btn .yanchu-order i {
    background-position: 0 -.58rem;
}
.personal-content .orders-btn .sg-cash-coupon i {
    background-position: 0 -523px;
    width: .3rem;
    height: .24rem;
    background-size: .3rem;
    left: calc((100% - .3rem)/2);
    top: .31rem;
}
.personal-content .orders-btn a i {
    width: .23rem;
    height: .24rem;
    display: block;
    position: absolute;
    top: .3rem;
    left: calc((100% - .21rem)/2);
}
.personal-content .btn-list {
    margin-top: .1rem;
}
.personal-content .btn-list p {
    height: .9rem;
}
.personal-content .btn-list p a {
    display: block;
    float: left;
    width: calc(33.33333% - 1px);
    text-align: center;
    line-height: .9rem;
    height: .72rem;
    position: relative;
    padding-top: .2rem;
    font-size: .13rem;
    overflow: hidden;
    color: #7b8187;
}
.personal-content .btn-list p .shipping-address i {
    background-position: 0 -5.39rem;
}
.personal-content .btn-list p .my-collection i {
    background-position: 2px -2.96rem;
}
.personal-content .btn-list p .shortage-registration i {
    background-position: 4px -2.62rem;
}
.personal-content .btn-list p .my-question i {
    background-position: 2px -3.3rem;
}
.personal-content .btn-list p .vouchers i {
    background-position: 0 -1.96rem;
}
.personal-content .btn-list p a i {
    width: .23rem;
    height: .22rem;
    left: calc((100% - .22rem)/2);
    top: .2rem;
    position: absolute;
    display: block;
}
.personal-content .btn-list p a i, .personal-content .orders-btn a i, .personal .con .top .right a {
    background: url(http://m2static.228.cn/img/31af021.png) no-repeat;
    background-size: .25rem;
}
`