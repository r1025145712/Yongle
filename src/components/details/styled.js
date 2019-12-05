import styled from "styled-components"

export const DetailsContainer = styled.div`
  margin-bottom: 0.6rem;
  height: 100%;
.details{
}
.details .head{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 2.5rem;
    margin-bottom: .2rem;
}
.details .head-bg {
    top: 0;
    position: absolute;
    height: 1.9rem;
    width: 100%;
    overflow: hidden;
    z-index: 1;
}
.details .head-bg .bgImg .bgImgBg {
    position: absolute;
    content: "";
    -webkit-filter: blur(10px);
    filter: blur(10px);
    z-index: 1;
    height: 3.9rem;
    top: -1rem;
    left: 0;
    width: 100%;
}
.details .head-bg .bgImg-black {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}
.details .head-icon {
    padding-top: .29rem;
    width: calc(100% - .3rem);
    margin-left: .15rem;
    overflow: hidden;
    position: relative;
    z-index: 9;
}
.details .head-icon .gobacks {
    float: left;
    background-position: 0 -34.54rem;
}

.details .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
.head-icon a{
    background: url(../img/icon.png) no-repeat;
    background-size: .75rem;
}
.details .head-icon .share {
    float: right;

    background-position: 0 -36.955rem;
}
.details .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
.details .head-icon .love {
    float: right;

    background-position: 0 -35.34rem;
    margin-right: .15rem;
}
.details .head-icon a {
    width: .3rem;
    height: .31rem;
    display: block;
    background-size: 1.5rem;
}
.details .head-con {
    margin: .3rem .2rem 0;
    overflow: hidden;
    z-index: 9;
    position: relative;
}

.details .head-con .left {
    position: relative;
    float: left;
    width: 1.2rem;
    height: 1.6rem;
    box-shadow: 0px 2px 8px 0px rgba(95, 100, 106, 0.1), 0px 2px 8px 0px rgba(58, 64, 69, 0.1);
    border-radius: .1rem;
    overflow: hidden;
}
.details .head-con .left img {
    width: 100%;
    height: 100%;
}
img {
    vertical-align: top;
}
.details .head-con .right {
    float: left;
    margin-left: .15rem;
    width: calc(100% - 1.35rem);
}
.tip {
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .11rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.gradual-gray, .insurance .insurance-tab p span {
    background: linear-gradient(to left, #8da0a9 0%, #d5dde1 100%);
}
.ticket-state-blue {
    background: linear-gradient(to right, #3dd9c1, #00a0c2);
}
.details .head-con .right h3 {
    height: .63rem;
    line-height: .21rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: .15rem;
}
.white {
    color: white;
}
.details .product-icon {
    height: .18rem;
}
.mt8 {
    margin-top: 0.08rem;
}
.f14 {
    font-size: 0.14rem;
}
.mt30 {
    margin-top: 0.3rem;
}
.db {
    display: block;
}
.f16 {
    font-size: 0.16rem;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}

/* 地址 */
.details .content .top {
    margin: 0 .2rem .16rem;
    background: #fff;
    border-radius: .1rem;
    padding: .1rem;
}
.details .addresses {
    display: block;
    font-size: .14rem;
    color: #5f646a;
    position: relative;
    overflow: hidden;
}
.addresses p:nth-child(1) {
    margin-bottom: .05rem;
    background-position: 0 0;
}
.details .addresses p:nth-child(2) i {
    background-position: 0 -.38rem;
}
.details .head-icon .love.active {
    float: right;
    background-position: 0 -36.14rem;
    margin-right: .15rem;
}
.addresses p span {
    width: calc(100% - .42rem);
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.addresses p i {
    float: left;
    display: block;
    margin-top: .03rem;
    width: .12rem;
    height: .12rem;
    margin-right: .1rem;
}
.addresses p {
    overflow: hidden;
}
.addresses .go-address {
    position: absolute;
    height: .12rem;
    width: .12rem;
    display: block;
    top: .14rem;
    right: 0;
    background-position: 0 -.75rem;
}
/* 公共雪碧图 */
.go-address,.addresses i,.answer i,.service b{
    background: url(../img/product_icon.png) no-repeat;
    background-size: .5rem;
}

/* 注意事项 */
.con-tit {
    font-size: .22rem;
    color: #000;
    margin-left: .2rem;
    margin-right: .2rem;
}

.mb15 {
    margin-top: 0.15rem;
    margin-bottom: 0.15rem;
}
.need-attention {
    margin: 0 .2rem;
    line-height: .22rem;
    letter-spacing: .02rem;
    font-size: .14rem;
    color: #7b8187;
    p{
        text-indent:2em;
    }
}
/* 查看更多 */
.show-notices-imgs {
    height: 65px;
    overflow: hidden;
}
.need-attention p {
    margin-bottom: .2rem;
}
.mb20 {
    margin-bottom: 0.2rem;
    text-align: center;
}
.look-more{
    color: #ff2959;
}
/* 问答 */
.answer {
    margin: 0 .2rem .15rem;
    padding: 0 .2rem;
    height: .45rem;
    line-height: .45rem;
    border-radius: .1rem;
    background: #fff;
}
.answer a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: .16rem;
    font-weight: 700;
}
.answer i {
    margin-top: .165rem;
    float: right;
    height: .12rem;
    width: .12rem;
    display: block;
    background-position: 0 -.75rem;
}


/* 底部 */
.real-btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .6rem;
    z-index: 99;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0px 0px 15px 0px rgba(95, 100, 106, 0.2);
}
.btns {
    display: flex;
}
.btns a:first-child {
    margin-left: .08rem;
}

.btns a {
    margin: .08rem .08rem .08rem 0;
}
.service {
    width: .44rem;
    height: .44rem;
    display: block;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
}
.service b {
    width: .44rem;
    height: .44rem;
    display: block;
    background-position: 0 -1.11rem;
}

.btns .btn {
    flex: 1;
    text-align: center;
    height: .44rem;
    line-height: .44rem;
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
.ticket-state-oragin {
    background: linear-gradient(to right, #ffbc3e, #ff6645);
}
.gradual-red {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
`