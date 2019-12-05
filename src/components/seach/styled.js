import styled from "styled-components"

export const Seacrhed = styled.div`
.classify-type {
    width: 100%;
    height: 100%;
    position: relative;
}

.classify-type ul {
    font-size:.14rem;
    width: 100%;
    height: 100%;
    display: flex;
    border-bottom: 1px solid #f9fafa;
}

.classify-type ul li {
    width: 100%;
    height: 100%;
    flex: 1;
    text-align: center;
    line-height: .45rem;
    color: #999ea3;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 .2rem 0 0.1rem;
}

.classify-type ul li i {
    position: absolute;
    right: 7%;
    top: .2rem;
    width: 0.15rem;
    height: .15rem;
    display: block;
    background-size: 1.5rem;
    background-position: 0 -29.4rem;
}

/* 点击之后的样式 */
.classify-type ul li.active i {
    background-position: 0 -29.945rem;
}

.fixedActiveNav {
    position: fixed;
    top: .4rem;
    height: .46rem;
    width: 100%;
    z-index: 100;
    background: #fff;
}


/* sosuo  chauxn */

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
    /* display:block; */
}

.city{
    display:${props=>props.cityShow?'block':'none'};
}
.class{
    display:${props=>props.classShow?'block':'none'};    
}
.time{
    display:${props=>props.timeShow?'block':'none'};    
}



.time-tab .time-content {
    height: 1.45rem;
    background: #fff;
    border-radius: 0 0 .2rem .2rem;
}

.time-tab .time-type {
    height: 100%;
    padding-bottom: .1rem;
}

.cl {
    zoom: 1;
}

.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}

.time-tab .time-type li {
    width: calc(100% / 3);
    line-height: .45rem;
    display: block;
    float: left;
    text-align: center;
}

.time-tab .time-type li.active {
    color: #ff2959;
}

/* 分类 */


ol {
    
    width: 100%;
    /* display: flex; */
    padding: .2rem .3rem;
    background: #fff;
    border-radius: 0 0 .2rem .2rem;
    clear: both;
}
ol li {
    height: .45rem;
    line-height: .45rem;
    text-align: center;
    float: left;
    width: calc(100% / 3);
}

ol li.active{
    color: red;
}

`