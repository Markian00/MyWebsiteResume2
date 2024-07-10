import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: rgb(193, 161, 86);
    height: calc(4vw + 40px);
    display: flex;
    justify-content: space-between;
    padding:calc((100vw - 1000px) / 2);
    z-index: 12;
`;

export const NavLink = styled(Link)`
    font-size: calc(0.8vw + 10px);
    color: #000101;
    margin-right: calc(1.2vw + 6px);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5vw;
    height: 100%;
    cursor: pointer;
    &.active {
        font-weight: bold;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    //margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    
`;

//CODE BY MARKIAN VORONOVYCH 2024