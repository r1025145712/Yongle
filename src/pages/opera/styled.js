import styled from "styled-components"

export const PageContainer = styled.div`
    position:absolute;
    left:0;
    top:0;
    right: 0;
    bottom:0;
    padding-bottom:.5rem;
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
.goback,.special-list .list p span:first-child i {
    background: url(../img/icon.png) no-repeat;
    background-size: .75rem;
}
.lunbo{
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    border-bottom-right-radius: .1rem;
    border-bottom-left-radius: .1rem;
    .am-wingblank.am-wingblank-lg{
    margin:0;
    height:1.3rem;
}
}
`
