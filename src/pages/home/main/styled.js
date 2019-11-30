import styled from "styled-components"

export const MainContainer = styled.div`
.home-head .city i,.home-head .search i ,.title-nav p a i{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}
.mb15 {
    margin-bottom: 0.15rem;
}
.pt10 {
    padding-top: 0.1rem;
}
.con-tit {
    font-size: .22rem;
    color: #000;
    margin-left: .2rem;
    margin-right: .2rem;
}
.con-tits b.active {
    color: #000;
}
.con-tits b {
    color: #b5bbc1;
    margin-right: .1rem;
}
/* 列表 */
.recommend {
   width: 100%;
    padding: 0 .2rem;
    /* min-height: 2rem; */
}
.recommend li {
    width: .9rem;
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.recommend li {
    float: left;
    width: .9rem;
    position: relative;
    overflow: hidden;
    margin-right: .02rem;
    margin-bottom: .12rem;
}
.recommend .imgs {
    height: 1.2rem;
}

.recommend .imgs {
    width: 100%;
    height: 1.4rem;
    border-radius: .1rem;
    display: block;          
}
.recommend li .name {
    font-size: .13rem;
    height: .34rem;
    line-height: .18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.recommend li a{
    color: #333;
}
.mt5 {
    margin-top: 0.05rem;
}
.f11 {
    font-size: .11rem;
}
.gray9 {
    color: #999;
}
.db {
    display: block;
}
.f10 {
    font-size: .1rem;
}
.recommend li a span:last-child {
    margin-top: .02rem;
}

/* 场馆 */
.venue {
    width: calc(100% - .4rem);
    margin: 0 .2rem;
}
.venue li {
    float: left;
    width: 48%;
    margin-right: 2%;
    position: relative;
    overflow: hidden;
    margin-bottom: .12rem;
    height: 1.8rem;
}
.venue .imgs {
    width: 100%;
    height: 1.4rem;
    border-radius: .1rem;
}
.venue li .name {
    font-size: .13rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #333;
}
.venue-address {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
/* 查看更多 */

.load-more {
    height: .3rem;
    width: 100%;
    background: #fff7f7;
    line-height: .3rem;
    text-align: center;
}
.mb10 {
    margin-bottom: 0.1rem;
}
.load-more a{
 
    text-align: center;
    color: rgb(255, 41, 89);
}
`