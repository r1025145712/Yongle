import styled from "styled-components"

export const Contentlist = styled.div`
    margin-bottom:.6rem;
    .special-list{
    margin:0 0.15rem 0.15rem;
}
.special-list .list {
    width: 100%;
    /* height: 1.69rem; */
    background: #fff;
    margin-top: .15rem;
    /* box-shadow: 0 0 0.05rem 0.01rem #eee; */
    border-radius: .1rem;
    overflow: hidden;
    padding-bottom: .15rem;
}
.special-list .list p {
    padding: .15rem;
    background: #fff;
}
.special-list .list p span:first-child {
    width: 1.8rem;
    height: 1.02rem;
    border-radius: .1rem;
    overflow: hidden;
    position: relative;
}
.fl {
    float: left;
}
.special-list .list p span:first-child img {
    width: 100%;
    /* height: 100%; */
}
.special-list .list p span:first-child i {
    width: .25rem;
    height: .25rem;
    display: block;
    position: absolute;
    background-size: 1.5rem;
    background-position: 0 -37.755rem;
    top: 0;
    left: 0;
}
.special-list .list p span:nth-child(2) {
    width: calc(100% - 1.9rem);
    margin-left: .1rem;
}
.special-list .list p span:nth-child(2) b {
    font-size: .16rem;
    display: block;
    height: .42rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-family: "PingFangSC-Regular", "Helvetica", "Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", "sans-serif";
}
.f11 {
    font-size: .12rem;
}

.gray5 {
    color: #b5bbc1;
}
.mt10 {
    margin-top: 0.1rem;
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
/* 文字2 */
.special-list .list .brief {
    color: #7b8187;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.border-t {
    border-top: 1px solid #f3f4f5;
}
.f13 {
    font-size: 0.13rem;
}
.ml15 {
    margin-left: 0.15rem;
}
.mr15 {
    margin-right: 0.15rem;
}
.pt5 {
    padding-top: 0.05rem;
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
