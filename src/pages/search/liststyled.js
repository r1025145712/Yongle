import styled from 'styled-components'

export const ListContainer = styled.div`
    min-height: 253.2px;
    margin-bottom:.5rem;
    .goods-list {
    padding: .2rem;
    background: #fff;
}
.goods-con {
    display: block;
    margin-bottom: .15rem;
    border-bottom: 1px solid #fafafb;
    padding-bottom: .15rem;
    overflow: hidden;
}
a {
    text-decoration: none;
    color: #333;
}
.goods-con .left {
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.goods-con .left img {
    width: 100%;
    height: 100%;
}
.tip-grabSeat {
    background-position: 0 -24.19rem;
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
.goods-con .right {
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.goods-con .right .name {
    height: .4rem;
    line-height: .2rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.goods-con .right span {
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mt10 {
    margin-top: 0.1rem;
}
.goods-con .right span {
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.f12 {
    font-size: 0.12rem;
}
.red {
    color: #ff3a56;
}
.f14 {
    font-size: 0.14rem;
}

.mr5 {
    margin-right: 0.05rem;
}
.search-noResult .tit {
    margin-top: .2rem;
    margin-bottom: .4rem;
    line-height: .3rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
.tc {
    text-align: center;
}
.search-noResult .tit i {
    background: url(img/emptyIcon.png) no-repeat;
    background-size: 1.5rem;
    width: 1.28rem;
    height: 1.07rem;
    display: inline-block;
    margin: .2rem 0;
    background-position: 0 -4.9rem;
 
}
.gray9 {
    color: #999;
}
.search-noResult .load-more {
    width: 1rem;
    height: .27rem;
    line-height: .27rem;
    text-align: center;
    border-radius: 1rem;
    margin: auto;
    background: #fff;
    box-shadow: 0px 2px 6px 0px rgba(255, 58, 86, 0.2);
}
.real-con .photo-code a, .load-more a, .search-noResult .load-more a, .look-more, .get-verification-code {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    -webkit-background-clip: text;
    color: transparent;
}
`