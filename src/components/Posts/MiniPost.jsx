import { styled } from "styled-components"
import {Styledp, Styleda} from "../../shared/StyelNavLink";

const Osnova = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Img = styled.img`
    max-width: 280px;
    
`;

const Zagolovok = styled.h1`
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    margin:0;
    color: #535353;
`;

const Links = styled(Styleda)`
    font-size: 25px;
`
const Decript = styled(Styledp)`
    font-size: 20px;
    font-style: italic;
    color: #535353;
`


export const MiniPost = (props) => {
    const {object} = props;
    const {img, title, descropion} = object;
    return(
        <>
        <Osnova>
            <div>
                <Img src={img}/>
            </div>
            <div>
                <Zagolovok>{title}</Zagolovok>
                <Decript>{descropion}</Decript>
                <Links href='https://www.ya.ru' target="_blank">Подробнее &rarr;</Links>
            </div>
        </Osnova>
        </>
    )
}