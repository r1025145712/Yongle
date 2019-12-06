import styled from "styled-components"

export const Home = styled.div`
/* 公共雪碧图 */
.home-head .city i,.home-head .search i ,.title-nav p a i{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}
.am-wingblank.am-wingblank-lg{
    margin:0;
    height:1.3rem;
}
.home-head {
    padding: .04rem .15rem .04rem .1rem;
    display: flex;   
    .city {
    width: .65rem;
    height: .4rem;
    line-height: .4rem;
    position: relative;
    text-align: center;
    font-size: .14rem;
    padding-right: .15rem;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
        i {
        position: absolute;
        right: 0.1rem;
        top: .175rem;
        display: block;
        width: .07rem;
        height: .05rem;
        background-position: 0 -1144px;
        }
    }
    .search {
    flex: 1;
    text-align: center;
    height: .34rem;
    line-height: .34rem;
    border-radius: 1rem;
    margin-top: .03rem;
    background-color: #fff;
    overflow: hidden;
    position: relative;
        input {
        position: relative;
        height: .34rem;
        line-height: .34rem;
        font-size: .13rem;
        width: calc(100% - .75rem);
        padding: 0 .2rem 0 .55rem;
        border: none;
        text-align: center;
        z-index: 2;
        background: none;
        }
        i {
        width: .14rem;
        height: .14rem;
        display: block;
        position: absolute;
        top: .1rem;
        background-size: 1.5rem;
        background-position: 0 -28.76rem;
        z-index: 1;
        left: calc(100%/2 - 15px);
        }
    }
}
.gradual,
.home-head,
.download-app .download-btn,
.first-pay-first .tit,
.check-field ul li.active {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
.wh_content{
    width: 3.2rem;
    height: 1.3rem;
}
`