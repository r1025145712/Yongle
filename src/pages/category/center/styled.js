import styled from "styled-components"

export const Center = styled.div`

height: 100%;
.search-noResult{
    width: 100%;
    height: 100%;
    /* height: 2.17rem; */
}

.search-noResult .tit {
    display: none;
    width: 100%;
    height: 100%;
    margin-top: .2rem;
    margin-bottom: .4rem;
    line-height: .3rem;
}

.tc {
    text-align: center;
}

.tit i{
    background: url(img/emptyIcon.png) no-repeat ;
    background-size: 1.5rem;
}

.search-noResult .tit i {
    width: 1.28rem;
    height: 1.07rem;
    display: inline-block;
    margin: .2rem 0;
    background-position: 0 -4.9rem;
    
}

`