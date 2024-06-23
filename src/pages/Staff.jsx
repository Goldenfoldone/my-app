import { styled } from 'styled-components';
import {Osnova} from '../shared/StyelNavLink';
import dir from '../components/img/Staff/Шахтина Ю.Г..jpg'
import dir1 from '../components/img/Staff/АБРАМОВИЧ-1-1024x1024.jpg'
import dir2 from '../components/img/Staff/Баранова.jpg'
import dir3 from '../components/img/Staff/Ершенко.jpg'
import dir4 from '../components/img/Staff/Чернова-1024x1024.jpg'
import dir5 from '../components/img/Staff/иванова.jpg'
import dir6 from '../components/img/Staff/Лукина.jpg'
import dir7 from '../components/img/Staff/Серов.jpg'
import dir8 from '../components/img/Staff/Августина-1024x1024.jpg'
import { StaffPost } from '../components/Posts/StaffPost';

const ruk =[{name:'Шахтина Юлия Германовна', post: 'Директор', tel:'+7 (3412) 63-10-10', img:dir},{name:'Ерошенко Вадим Викторович', post: 'Заместитель директора по общим вопросам', tel:'+7 (3412) 63-10-63', img:dir3},{name:'Чернова Алина Владимировна', post: 'Заместитель директора по основной деятельности', tel:'+7 (3412) 63-10-24', img:dir4}]
const special = [{name:'Абрамович Анна Борисовна', post: 'Секретарь руководителя', tel:'+7 (3412) 63-10-11', img:dir1}]
const admin_otdel = [{name:'', post: 'Начальник отдела', tel:'+7 (3412) 63-10-68', img:''},{name:'Кожевникова Юлия Сергеевна', post: 'Специалист по персоналу', tel:'+7 (3412) 63-10-25', img:''},{name:'Баранова Анна Александровна', post: 'Ведущий экономист', tel:'+7 (3412) 63-10-40', img:dir2},{name:'Иванова Вера Ивановна', post: 'Экономист I категории', tel:'+7 (3412) 63-10-76', img:dir5},{name:'Трефилова Юлия Александровна', post: 'Юрисконсульт I категории', tel:'', img:''} ]
const mol_otdel = [{name:'Михайлова Августина Юрьевна', post: 'Заведующий отделом', tel:'+7 (3412) 63-10-88', img: dir8},{name:'Лукина Анна Сергеевна', post: 'Методист', tel:'+7 (3412) 63-10-66', img:dir6},{name:'Серов Роман Дмитриевич', post: 'Методист', tel:'+7 (3412) 63-10-40', img:dir7},{name:'Степанова Марина Олеговна', post: 'Методист', tel:'', img:''},{name:'Гиззатова Маргарита Евгеньевна', post: 'Методист', tel:'+7 (3412) 63-10-00', img:''}]
const mun_otdel = [{name:'', post: '', tel:'', img:{}}]
const mej_nac_otdel = [{name:'', post: '', tel:'', img:{}}]
const org_otdel = [{name:'', post: '', tel:'', img:{}}]
const info_otdel = [{name:'', post: '', tel:'', img:{}}]
const tex_otdel = [{name:'', post: '', tel:'', img:{}}]
const administr_otdel = [{name:'', post: '', tel:'', img:{}}]
const tex_obes_otdel = [{name:'', post: '', tel:'', img:{}}]


const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    padding-top: 40px;
`
const Text = styled.p`
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    &.only{
        justify-content:center;
    }
`


export const Staff = () => {
    return(
        <>
        <Osnova>
            <Title>РУКОВОДСТВО</Title>
            <Wrapper className={ruk.length < 3 ? 'only': ''}>
                {ruk.map((e) => {
                    return (<StaffPost object={e}/>)
                })}
            </Wrapper>
            
            <Title>СПЕЦИАЛИСТЫ</Title>
            <Wrapper className={special.length < 3 ? 'only': ''}>
                {special.map((e) => {
                    return (<StaffPost object={e}/>)
                })}
            </Wrapper>
            <Title>АДМИНИСТРАТИВНО-ПРАВОВОЙ ОТДЕЛ</Title>
            <Wrapper className={admin_otdel.length < 3 ? 'only': ''}>
                {admin_otdel.map((e) => {
                    return (<StaffPost object={e}/>)
                })}
            </Wrapper>
            <Title>ОТДЕЛ МОЛОДЁЖНЫХ ИНИЦИАТИВ И ОБЩЕСТВЕННЫХ ПРОЕКТОВ</Title>
            <Text>Оказывает организационно-методическую помощь в реализации проектов в сфере государственной национальной политики на территории муниципальных образований Удмуртской Республики.</Text>
            <Wrapper className={mol_otdel.length < 3 ? 'only': ''}>
                {mol_otdel.map((e) => {
                    return (<StaffPost object={e}/>)
                })}
            </Wrapper>            
        </Osnova>        
        </>
    )
}