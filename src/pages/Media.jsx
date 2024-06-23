import { styled } from "styled-components";
import { CapLetters, Osnova } from "../shared/StyelNavLink";
import { ContentNews } from "../components/Posts/ContentNews";


 
 
const SubOsnova = styled(Osnova)`
    padding-bottom: 40px;
`;
 
 
 
 export const Media = (props) => {
    return (
        <>
        <SubOsnova>
            <CapLetters>{props.name}</CapLetters>        
            <ContentNews massiv={props.mas}/>
        </SubOsnova>
        </>
    )        
};

