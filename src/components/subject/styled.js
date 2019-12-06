import styled from "styled-components"

export const SubjectContainer = styled.div`
    margin-bottom:.6rem;
    .bodybg {
    background: #f5f6f7;
    width: 100%;
    height: 100%;
}
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
.goback{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}

/* 内容 */

/* .pb50 {
    padding-bottom: 0.5rem;
} */
.activity-area {
    margin: .15rem;
}
.activity-area .list {
    margin-bottom: .2rem;
    width: 100%;
    border-radius: .1rem;
    overflow: hidden;
    background: #fff;
}

.tc {
    text-align: center;
}
.activity-area .photo {
    width: 100%;
    height: 1.5rem;
    position: relative;
}
.activity-area .text {
    margin: .2rem;
}
.activity-area .photo img {
    width: 100%;
    height: 100%;
}
.f17 {
    font-size: 0.17rem;
}
.fw {
    font-weight: bold;
}
/* 查看更多 */

.load-more {
    height: .3rem;
    width: 100%;
    background: #fff7f7;
    line-height: .3rem;
    text-align: center;
    a{
 
 text-align: center;
 color: rgb(255, 41, 89);
}
}
.mb10 {
    margin-bottom: 0.1rem;
}
  `