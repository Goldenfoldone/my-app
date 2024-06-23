import { styled } from "styled-components"
import { Dropdown } from "./Dropdown"
import {StyledNavLink} from "../../shared/StyelNavLink";
import { useState, useRef, useEffect } from "react";

export const MenuItems = styled.li`
    list-style-type: none;

    &:hover{
        color: black
    }

    &:active{

    }
`

const Menubutton = styled.button`
    color: #535353;
    display: flex;
    align-items: center;
    font-size: 25px;
    border: none;
    background-color: transparent;
    padding-left: 10px;
    cursor: pointer;
    width: 100%;
    font-family: 'Futurabookc';
    &.click{
        color: #DB6B4D;
    }
    &:hover{
        color: #DB6B4D;
    }
`
const SubmenuNavLink = styled(StyledNavLink)`
    width: 140px;
    padding-left: 10px;
    padding-bottom: 7px;
    padding-top: 5px;
    padding-right: 4px;

    &:hover{
        color: #DB6B4D;
        border-bottom: 0 solid #000;
        background: rgb(95, 155, 106);
        font-weight: 600;  
        padding-right: 10px;
    }
`


export const MenuItem = ({items, depthLevel}) => {

    const [dropdo, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };
    const onMouseEnter = () => {
        setDropdown(true);
    };
       
    const onMouseLeave = () => {
        setDropdown(false);
    };
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
         if (dropdo && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdo]);
    return (
        <MenuItems ref={ref}onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {items.sabmenu ? (
                <>
                    <Menubutton  className={dropdo ? "click":""} aria-expanded={dropdo ? "true" : "false"} onClick={() => toggleDropdown()}>
                        {items.name}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </Menubutton>
                    <Dropdown submenus={items.sabmenu} drop={dropdo} depthLevel={depthLevel}/>
                </>
            ) : 
            (
            depthLevel === 0 ? <StyledNavLink to={items.url}>{items.name}</StyledNavLink> : <SubmenuNavLink to={items.url}>{items.name}</SubmenuNavLink>                
            )}
        </MenuItems>
    )    
}

