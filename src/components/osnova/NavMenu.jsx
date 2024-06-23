import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import sign from '../img/sign.png';
import glimg from '../img/cover.png';
import {Osnova} from "../../shared/StyelNavLink";
import { MenuItem } from './MenuItem';
import { Pahts } from './../../shared/Paths';

const menuItems = [{name:'О нас', sabmenu: [{name:'О нас', url:Pahts.aboutus},{name:'Сотрудники', url:Pahts.staff},{name:'Контакты', url:`${Pahts.contacts}`},{name:'Проекты', url:`${Pahts.project}`},{name:'Нормативные документы', url:`${Pahts.reguldoc}`}]},{name:'Медиа',sabmenu:[{name:'Новости',url:`${Pahts.media}`},{name:'Иворъёс',url:`${Pahts.udm_new}`},{name:'Развлечения',url:`${Pahts.fun_new}`},{name:'Выставки',url:`${Pahts.fair_new}`},{name:'Статьи',url:`${Pahts.paper}`},{name:'Видео',sabmenu:[{name:'Вебинары "Удмутрский с нуля"',url:`${Pahts.video_webinar}`},{name:'Видеокурсы удмуртского языка',url:`${Pahts.video_course}`},{name:'Удмуртские клипы',url:`${Pahts.video_clip}`}]},{name:'Фото',url:`${Pahts.foto}`},{name:'Аудио',url:`${Pahts.audio}`}] },{name:'Услуги',sabmenu:[{name:'Аренда-залов',url:`${Pahts.hrental}`},{name:'Экскрусии',url:`${Pahts.excursion}`},{name:'Мастер-классы',url:`${Pahts.tutorial}`}]},{name:'Методпомощь', url:`${Pahts.methodasisst}`},{name:'+7(3412) 63-10-11', url: 'tel:+73412631011'} ,{name:'mail@ddn.udmr.ru', url: ''}];

const Glimg = styled.img`
    width: 100%;
`

const Glmenu = styled.div`
    background-color: #E2E8ED;
    display: flex;
    min-height: 70px;
    align-items: center;    
    flex-wrap: wrap;
`
const Styledimg = styled(Glimg)`
    max-width: 100px;
    max-height: 70px;
    cursor: pointer;
    flex-shrink: 0;
`
const Menus = styled.ul`
    display:flex;
    gap: 10px;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
`  
const depthLevel = 0;

export const NavMenu = () => {
    return (
        <>        
        <Glimg src={glimg}/>    
        <Osnova>   
            <Glmenu>
                <NavLink to='/'><Styledimg src={sign} alt="" /></NavLink>
                <Menus>
                    {menuItems.map((item, index) => {
                        return (                    
                            <MenuItem items={item} key={index} depthLevel={depthLevel}/>
                        )
                    })}
                </Menus>
                
            </Glmenu> 
        </Osnova>     
        </>
    )
}