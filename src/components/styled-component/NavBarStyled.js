import styled from "styled-components"

export const NavbarContainer = styled.div`
    width: 100%;
    height: 128px;
    background-color: white;
    position: relative;
    top: 0;
    z-index: 999;
    padding-left: 5px;
    padding-right: 5px;
`
export const NavbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: maroon;
    cursor: pointer;
`
export const TopLeft = styled.div``
export const TopRight = styled.div`
    display: flex;
    align-items: center;
`
export const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`
export const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`