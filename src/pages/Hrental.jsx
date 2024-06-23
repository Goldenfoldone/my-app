import { styled } from 'styled-components'
import {Osnova, CapLetters,Styledp,Styleda} from '../shared/StyelNavLink'



const Text = styled(Styledp)`
    margin: 0;
`
const Niztext = styled(Styledp)`
    margin-bottom: 0;
    padding-bottom: 20px;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`
const Img = styled.img`
    max-width: 540px;
`
const Mesto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivStyle = styled.div`
    display: flex;
    max-width: 540px;
    align-items: center;
    border: 2px solid rgb(95, 155, 106);
    justify-content: space-evenly;
`
const Stylesvg = styled.svg`
    color: #DB6B4D;
`
const Style_a = styled.a`
    cursor: pointer;
    &:hover{
        color: #DB6B4D;
        div:first-child{
            border: 2px solid #DB6B4D;
        }
        path {
            fill: rgb(95, 155, 106);
        }
    }
`


export const Hrental = (props) => {

    const servicpost = props.mas
    return(
        <>
        <Osnova>
            <CapLetters>Аренда залов</CapLetters>
            <Niztext>Залы в аренду для мероприятий, конференций, банкетов и концертов с почасовой оплатой. <br />В стоимость аренды входит техническое сопровождение мероприятия.</Niztext>
            <Wrapper>
            {servicpost.map((e) =>{
                return(
                    <div>
                        <Img src={e.img}/>
                        <Style_a >
                            <DivStyle>
                                <Stylesvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><path d="M27 24h-1v-8a1 1 0 001-1v-1h-6v1a1 1 0 001 1v8h-4v-8a1 1 0 001-1v-1h-6v1a1 1 0 001 1v8h-4v-8a1 1 0 001-1v-1H5v1a1 1 0 001 1v8H5a3 3 0 00-3 3v3h28v-3a3 3 0 00-3-3zm1 4H4v-1a1 1 0 011-1h22a1 1 0 011 1zm1.42-19.7l-13-6.1a.93.93 0 00-.84 0l-13 6.1a1 1 0 00-.58.91V11a1 1 0 001 1h26a1 1 0 001-1V9.21a1 1 0 00-.58-.91zM28 10H4v-.16l12-5.63 12 5.63z" fill="currentColor"></path></Stylesvg>
                                <Mesto>
                                    <Text>{e.title}</Text>
                                    <Text>Цена: от {e.price} руб./час</Text>
                                </Mesto>
                            </DivStyle>
                        </Style_a>
                    </div>
                )
            })}
            </Wrapper>
            <Niztext>Дополнительную информацию по аренде Вы можете узнать у администратора по телефону: <Styleda href="tel:+73412631037">+7 (3412) 63-10-37</Styleda></Niztext>
        </Osnova>
        </>
    )
}