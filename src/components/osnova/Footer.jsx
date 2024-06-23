import styled from 'styled-components'
import {StyledNavLink, Osnova, Styledp} from "../../shared/StyelNavLink";
import { LinkSotcSetisBlack } from '../Posts/LinkSotcSetiBlack';



const data = {
    ['1'] : [{name:'426063 г. Ижевск, ул. Орджоникидзе, 33а', link: '', colimn: 1},{name:'Тел.: (3412) 63-10-11', link: 'tel:+73412631011', colimn: 1},{name:'E-mail: mail@ddn.udmr.ru', link: 'mailto:mail@ddn.udmr.ru', colimn: 1}],
    ['2'] : [{name:'Противодействие коррупции', link: '', colimn: 2},{name:'Прейскурант', link: '', colimn: 2},{name:'Приказы', link: '', colimn: 2},{name:'Отчёты', link: '', colimn: 2},{name:'Положения', link: '', colimn: 2}],
    ['3'] :[{name:'Устав', link: '', colimn: 3},{name:'Планы', link: '', colimn: 3},{name:'Правовая информация', link: '', colimn: 3},{name:'Соглашения', link: '', colimn: 3},{name:'Контакты', link: '', colimn: 3}],
    ['4'] :[{name:'Политика конфиденциальности', link: '', colimn: 4}]
}

const Fon = styled(Osnova)`
    margin-top: 0;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 140px;
    flex-wrap: wrap;
`

const Her = styled.hr`
    margin:0;
`

const Wrapper = styled.div`
    max-height: 373px ;
    margin-top: 1.5%;
    background-color: #E2E8ED;
    padding: 0 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #E2E8ED;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    height: fit-content;
    gap: 10px;
    flex-wrap: wrap;
`
const Colon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 25px;
`

const Text = styled(Styledp)`
    font-size: 20px;
    margin: 0;
`

export const Footer = () => {
    return (
        <> 
        <Wrapper>        
            {Object.keys(data).map((item) => {
                return ( <Colon>
                    {data[item].map((nat) =>{
                    return(
                        <StyledNavLink to={nat.link}>{nat.name}</StyledNavLink>                    
                    )  
                })}
                </Colon>)                         
            })}                  
        </Wrapper>
        <Her/>
        <Fon>
            <Text>© 2023 БУ УР Дом Дружбы народов</Text>
            <Text>Если у вас возникли вопросы, пожалуйста свяжитесь с нами по почте</Text> 
            <LinkSotcSetisBlack />
        </Fon>                  
        
        </>
    )
}