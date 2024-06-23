import {Osnova, CapLetters} from '../shared/StyelNavLink'
import prod from '../components/img/prodjectschool.jpg'
import prod1 from '../components/img/prodjectmol.jpg'
import prod2 from '../components/img/prodjectfest.jpg'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const prodjects = [{img:prod, name: 'Школьный исследовательский конкурс «Герои народа – герои страны»', url:''}, {img:prod2, name: 'Фестиваль современной этнокультуры "Тангыра"', url:''}, {img:prod1, name: 'Многоначиональный молодёжный образовательный центр', url:''}]

const CapLettersPord = styled(CapLetters)`
    padding-bottom: 30px;
`

const Wrapper =styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    padding-bottom: 30px;
`

const Img = styled.img`
    max-width: 420px;
`
const Text = styled(Link)`
    text-decoration: none;
    color: #535353;
    font-size: 35px;
    &:hover{
        color: #DB6B4D;
    }
`

export const Project = () => {
    return(
        <>
        <Osnova>
            <CapLettersPord>Проекты</CapLettersPord>
            {prodjects.map((e) => {
                return(
                    <Wrapper>
                        <Img src={e.img}/>
                        <Text to={e.url}>{e.name}</Text>
                    </Wrapper>
                )                
            })}
        </Osnova>
        </>
    )
}