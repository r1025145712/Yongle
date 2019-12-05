import styled from "styled-components"

export const TabBarContainer = styled.div`
 
    display: flex;
    height: .5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0px 0px 8px 0px rgba(95, 100, 106, 0.15);
    .active{
    color: #ff2959;
}
 a {
    padding-top: .07rem;
    flex: 1;
    font-size: .1rem;
    text-align: center;
    color: #333;
    svg {
    margin: auto;
    width: .25rem;
    height: .25rem;
    font-size: .12rem;
    display: block;
}
}
`