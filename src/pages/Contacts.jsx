import { styled } from 'styled-components';
import {Osnova, CapLetters} from '../shared/StyelNavLink'
import { YMaps, Map} from '@pbe/react-yandex-maps';
import { LinkSotcSeti } from '../components/Posts/LinkSotcSeti';



const Maps = styled(Map)`
    max-width: 1120px;
    min-height: 320px;
`


export const Contacts = () => {
    return(
        <>
        <Osnova>
            <CapLetters>Контакты</CapLetters>
            <CapLetters>Как добраться</CapLetters>
            <YMaps>
                <Maps defaultState={{ center: [56.839665, 53.243898], zoom: 17 }} />
            </YMaps>
            <CapLetters>Социальные сети</CapLetters>
            <LinkSotcSeti />
        </Osnova>
        </>
    )
}