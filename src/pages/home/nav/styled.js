import styled from "styled-components"

export const NavContainer = styled.div`
.title-nav {
    margin: .25rem .2rem;
}
.title-nav p {
    display: flex;
    a {
    flex: 1;
    text-align: center;
    color: rgb(123, 129, 135);
    font-size: .12rem;
    i {
    display: block;
    height: .36rem;
    width: .36rem;
    margin: auto;
}
}
}
.title-nav p a i{
    background: url(img/icon.png) no-repeat;
    background-size: .75rem;
}
.title-nav p:nth-child(1) a:nth-child(1) i {
    background-position: 0 -6.9325rem;
}
.title-nav p:nth-child(1) a:nth-child(2) i {
    background-position: 0 -7.3773rem;
}
.title-nav p:nth-child(1) a:nth-child(3) i {
    background-position: 0 -7.83rem;
}
.title-nav p:nth-child(1) a:nth-child(4) i {
    background-position: 0 -8.265rem;
}
.mt25 {
    margin-top: 0.25rem;
}
.title-nav p:nth-child(2) a:nth-child(1) i {
    background-position: 0 -8.7125rem;
}
.title-nav p:nth-child(2) a:nth-child(2) i {
    background-position: 0 -9.155rem;
}
.title-nav p:nth-child(2) a:nth-child(3) i {
    background-position: 0 -9.6rem;
}
.title-nav p:nth-child(2) a:nth-child(4) i {
    background-position: 0 -10.0475rem;
}
.first-pay-first {
    position: relative;
    border-radius: .1rem;
    margin: .2rem;
    overflow: hidden;
    img {
    width: 100%;
}
}
`