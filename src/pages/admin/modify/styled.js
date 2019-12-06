import styled from 'styled-components'


export const ModifyContainer = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: #f5f6f7;
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
.modify-name:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.modify-name{
    margin:.2rem;
    .name{
        margin:.1rem;
        font-size:.2rem;
    }
  
    .input{
        height: 0.44rem;
        float:left;
        margin-left:.1rem;
    width: 2rem;
    border: 0.01rem solid rgba(255, 255, 255, .6);
    border-radius: 1rem;
    background: rgba(0, 0, 0, 0);
    text-align: center;
    color: rgba(255, 255, 255, .9);
    font-size: 0.16rem;
    background: #fff;
    overflow:hidden;
    color:#000;
    }
    .photo{
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #ccc;
    margin-bottom:.2rem;
    margin-left:.2rem;
}
.photo img{
    width: 100%;
    height: 100%;
}
.upload-container{
    position: relative;
    display: flex;
}

.upload{
    width:.8rem;
    height:.34rem;
    border:1px solid #ccc;
    border-radius: .1rem;
    line-height:.34rem;
    margin-left:.1rem;
}

.upload p{
    width:.8rem;
    height:.34rem;
    padding: 0;
    text-align: center;
    line-height:.34rem;
}

.bookImg{
    opacity: 0;
    position: absolute;
    top:0;
}
.modifyimg{
    flex: 1;
    text-align: center;
    height: .44rem;
    width:2rem;
    border-radius: 1rem;
    letter-spacing: 2px;
    font-size: .15rem;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-orient: vertical;
    text-align: center;
    background: linear-gradient(to right, #ff7e6f, #ff2959);
    box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
    margin: .2rem .08rem .08rem .1rem;
    color: white;
}
}
`