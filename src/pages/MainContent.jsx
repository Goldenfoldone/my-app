import { styled } from "styled-components";
import {Info, Text, CapLetters, Osnova} from "../shared/StyelNavLink"
import { SimpleSlider } from "../components/slider";

const Infor = styled(Info)`
    display: inline-block;    
`;

const PlaceSlider = styled.div`
    display: inline-block;
    background-color: #E2E8ED;
    min-height: 200px;
    width: 100%;
`
const Textr = styled(Text)`
`;




export const MainContent = (props) => {
    const lox = props.news
    const lox2 = props.serv
    return (
        <>
        <Osnova>
             <Infor>
                <Textr>
                История Удмуртии – это богатая история сотрудничества народов, которые её населяют. Со дня своего основания Дом Дружбы народов призван сделать это историческое достояние достоянием современности. Здесь в мире и согласии живут 136 народов. Здесь чтут традиции друг друга, проводят совместные праздники, сохраняют обычаи и поддерживают добрососедские отношения.
                </Textr>                
            </Infor>
        </Osnova> 
        <Osnova>        
            <PlaceSlider>            
                <CapLetters>Новости</CapLetters>
                <SimpleSlider content={lox}/>
            </PlaceSlider> 
        </Osnova>
        <Osnova>         
            <PlaceSlider>
                <CapLetters>Услуги</CapLetters>    
                <SimpleSlider content={lox2}/>            
            </PlaceSlider> 
        </Osnova>   
        </>
    )
}