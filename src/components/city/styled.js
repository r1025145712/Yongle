import styled from 'styled-components'

export const CityContainer = styled.div`
   display:flex;
   flex-direction:column;
    background:#fff;
.head-tit {
    position: relative;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: .17rem;
    padding: 0 .4rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #323232;
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
/* 公共图 */
.goback{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}
.gray9 {
    color: #999;
}

.f13 {
    font-size: 0.13rem;
}
.ml20 {
    margin-left: 0.2rem;
}
.mt30 {
    margin-top: 0.3rem;
}
.red {
    color: #ff3a56;
}

.f14 {
    font-size: 0.14rem;
}
.ml10 {
    margin-left: 0.1rem;
}
.city-tit {
    margin: .2rem .2rem 0;
}
.city-hot {
    margin: .1rem .2rem;
    overflow: hidden;
    text-align: center;
    span {
    height: .4rem;
    line-height: .4rem;
    width: calc(100% / 4);
    display: block;
    float: left;
    color: #7b8187;
}
}
`