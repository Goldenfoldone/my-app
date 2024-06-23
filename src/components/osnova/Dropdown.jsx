import { styled } from "styled-components"
import { MenuItem } from "./MenuItem"
import {StyledNavLink} from "../../shared/StyelNavLink";

const DropDown = styled.ul`
    position: absolute;
    display: none;
    flex-direction: column;
    flex-wrap: wrap;
    left: auto;
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
        0 4px 6px -2px rgba(71, 63, 79, 0.16);
    font-size: 0.875rem;
    z-index: 9999;
    width: 160px;
    padding: 0.5rem 0;
    list-style: none;
    background-color: #fff;
    border-radius: 0.5rem;
    
    &.dropdown-submenu{
        top: 210px;
        left: 160px;
    }
    
    &.show{
        display: flex;
    }
`





export const Dropdown = ({submenus, drop, depthLevel}) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return(
        <>
            <DropDown className={`drop  ${dropdownClass} ${drop ? "show" : ""}`}>
                {submenus.map((submenu,index) => (
                    <MenuItem items={submenu} key={index} depthLevel={depthLevel}/>
                ))}
            </DropDown>
        </>
    )
}