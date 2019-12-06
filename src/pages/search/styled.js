import styled from 'styled-components'

export const SearchContainer = styled.div`

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
    .goback {
    left: .15rem;
    background-size: .8rem;
    background-position: 0px -3.89rem;
}
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
.goback,.title-search i{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}
.title-search {
    height: .34rem;
    margin: .1rem .2rem 0;
    position: relative;
    display: flex;
    .search-icon {
    position: absolute;
    top: .1rem;
    left: .1rem;
    width: .14rem;
    height: .14rem;
    background-size: 1.5rem;
    background-position: 0 -28.76rem;
}
.closes {
    width: .45rem;
    height: .34rem;
    line-height: .34rem;
    text-align: center;
    display: block;
    color: #5f646a;
    font-weight: normal;
}
}
.input-kw-form {
    width: 100%;
}
.title-search input {
    font-size: .13rem;
    padding: 0 .3rem;
    width: 100%;
    height: .34rem;
    border: none;
    background: #f3f4f5;
    border-radius: 1rem;
    -webkit-appearance: none;
}

input {
    caret-color: #ff3a56;
}
.classify-type ul li i{
    background: url(img/icon.png) no-repeat;
}
.classify-type {
    position: relative;
    ul {
    display: flex;
    border-bottom: 1px solid #f9fafa;
    li {
    flex: 1;
    text-align: center;
    line-height: .45rem;
    color: #999ea3;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size:.14rem;
    padding: 0 .2rem 0 0.1rem;
    i {
    position: absolute;
    right: 7%;
    top: .2rem;
    width: 0.15rem;
    height: .15rem;
    display: block;
    background-size: 1.5rem;
    background-position: 0 -29.4rem;
}
}
}
}
.classify-type ul li.active i {
    background-position: 0 -29.945rem;
}
.type-tab {
    position: fixed;
    width: 100%;
    height: calc(100% - .76rem);
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, .5);
    overflow: auto;
    ol {
    padding: .2rem .3rem;
    background: #fff;
    border-radius: 0 0 .2rem .2rem;
    li {
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    float: left;
    width: calc(100% / 3);
}
li.active{
    color: #ff2959;
}
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
}
/* 分类 */
.type-tab {
    position: fixed;
    width: 100%;
    height: calc(100% - .76rem);
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, .5);
    overflow: auto;
}
.type-tab ol {
    padding: .2rem .3rem;
    background: #fff;
    border-radius: 0 0 .2rem .2rem;
}
.type-tab ol li {
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    float: left;
    width: calc(100% / 3);
   
}
.type-tab ol li.active{
    color: #ff2959;
}
/* 时间 */
.time-tab {
    background: rgba(0,0,0,.6);
    position: fixed;
    width: 100%;
    height: calc(100% - .76rem);
    left: 0;
    z-index: 100;
    overflow: auto;
    padding-bottom: .1rem;
}
.time-tab .time-content {
    background: #fff;
    border-radius: 0 0 .2rem .2rem;
}
.time-tab .time-type {
    padding-bottom: .1rem;
}
.time-tab .time-type li.active {
    color: #ff2959;
}
.time-tab .time-type li {
    width: calc(100% / 3);
    line-height: .45rem;
    display: block;
    float: left;
    text-align: center;
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
`