import styled from 'styled-components'


export const AdminContainer = styled.div`
    padding-bottom: 0.6rem;
    .head-tit {
    position: relative;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100% ;
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
.goback{
    background: url(img/icon.png) no-repeat;
}
.real-prove {
    overflow: hidden;
}

.mt20 {
    margin-top: 0.2rem;
}
.pl30 {
    padding-left: 0.3rem;
}
.pr30 {
    padding-right: 0.3rem;
}
.real-con label {
    display: block;
    height: .61rem;
    line-height: .61rem;
    border-bottom: 1px solid #f3f4f5;
    font-size: .15rem;
}
.cl:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.real-con b {
    width: .83rem;
    font-weight: normal;
    color: #7b8187;
}

.fl {
    float: left;

}
.real-con label p {
    position: relative;
}

.real-con p {
    position: relative;
    text-align: left;
    width: calc(100% - .83rem - .05rem);
}
.real-con p.tr {
    text-align: right;
}

.real-con label p {
    position: relative;
}
.real-con p {
    position: relative;
    text-align: center;
    width: calc(100% - .83rem - .05rem);
}
.tr {
    text-align: right;
}
.id-type p a {
    width: calc(100% - 0.3rem);
    height: .6rem;
    padding-right: .3rem;
    display: block;
    position: relative;
    color: #333;
}
.id-type p .uncertified {
    color: #ff3a56;
    background-position: 0 -1.5rem;
}
.fr {
    float: right;
}
.id-type p a i{
    background: url(img/product-icon.png) no-repeat;
    background-size: .5rem;
}
.id-type p a i {
    display: block;
    position: absolute;
    width: .12rem;
    height: .12rem;
    right: .05rem;
    top: calc((.61rem - .12rem)/2);
    background-position: 0 -.755rem;
}

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

.btns .btn {
    flex: 1;
    text-align: center;
    height: .44rem;
    /* line-height: .44rem; */
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
.gradual, .home-head, .download-app .download-btn, .first-pay-first .tit, .check-field ul li.active {
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
}
`