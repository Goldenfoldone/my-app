import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import { useContext, useEffect, useState } from "react"
import './App.css';
import {MainLaout} from './pages/MainLaout';
import {AboutUs} from './pages/AboutUs';
import {Media} from './pages/Media';
import {Services} from './pages/Services';
import {MethodAsisst} from './pages/MethodAsisst';
import {MainContent} from './pages/MainContent';
import { Pahts } from './shared/Paths';
import { Staff } from './pages/Staff';
import { Contacts } from './pages/Contacts';
import { Project } from './pages/Project';
import { ReguDoc } from './pages/ReguDoc';
import { Hrental } from './pages/Hrental';
import { Excursion } from './pages/Excursion';
import { Tutorial } from './pages/Tutorial';
import oblo from "./components/img/oblojkaPostone.jpg"
import oblo2 from "./components/img/oblojkaPosttwo.jpg"
import uoblo1 from "./components/img/udm_news1.jpg"
import uoblo2 from "./components/img/umd_news2.jpg"
import uoblo3 from "./components/img/udm_news3.jpg"
import fun from './components/img/fun.jpeg'
import fair from './components/img/fair.jpg'
import papers from './components/img/paper.jpg'
import clip from './components/img/clips.png'
import corses from './components/img/courses.jpeg'
import web from './components/img/webinars.jpg'
import fotos from './components/img/foto.jpg'
import audios from './components/img/audio.jpg'
import { Login } from './components/adminPanel/Login';
import { AdminMenu } from './components/adminPanel/AdminMenu';
import { NewsPostingsPage } from './components/adminPanel/NewsPostingsPage';
import holl from './components/img/holl-1-etazha-ddn-edited-2048x1365.jpg'
import holl2 from './components/img/holl2.jpg'
import muz1 from './components/img/muz1.jpg'
import torg from './components/img/dsc_0016-1024x685.jpg'
import mnfunc from './components/img/dsc_0361-1280x857.jpg'
import { Context } from './index';


const rus_news= [{img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'},{img:oblo2, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}, {img:oblo, title: 'Перечень региональных льгот и мер социальной поддержки, предоставляемых на территории удмуртской республики военнослужащим и членам их семей', descropion: 'Инвалиды боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах», освобождаются от уплаты налога по одному транспортному средству, мощность двигателя которого не превышает 150 лошадиных сил (110,33 кВт) включительно. Ветераны боевых действий, которым оказываются меры социальной поддержки в соответствии с Федеральным законом«О ветеранах»'}];

const udm_nems =[{img:uoblo1,title:'Мӧнняллан ӵужонболэн шудӥзы',descropion:'Та нуналъёсы Мӧнняллан, кык ар талэсь азьвыл сямен ик, туж шулдыр но жингрес вал. Татын ӵужонболэн шудӥзы.'},{img:uoblo2,title:'«Удмрут Кенешлэн» ёзчиосыз Светлана Смирноваен пумиськылӥзы',descropion:'Россиысь калыкъёслэн ассамблеязылэн Кенешезлэн тӧроез Светлана Константиновна Смирнова Удмуртие вуылӥз. Со лулчеберетъя йӧскалык огазеяськонъёслэн кивалтӥсьёсынызы но азьветлӥсьёсынызы пумиськылӥз.'},{img:uoblo3,title:'Ашальчи Оки нимо йӧскалык премилэсь лауреатъёссэ юнматӥзы',descropion:'Исполкоммылэн кенешаз Ашальчи Оки нимо йӧскалык премилэсь лауреатъёссэ юнматӥзы. 2024-тӥ ар понна сӥё-дано нимез басьтозы – эмчи, Ижкарысь эм академиысь ӧнерчи, эм тодосъя кандидат'}]

const fun_news = [{img:fun, title:'Национальные удмуртские игры',descropion:'Национальные игры удмуртов всегда несут теплые ассоциации с домом, блинами, детством. Мы подготовили для Вас свежую рубрику про национальные игры'}]

const fair_news =[{img:fair, title:'По родному краю с любовью',descropion:'Активисты национально-культурных объединений Удмуртской Республики посетили Дом Культуры «Октябрь» города Можги.'}]

const paper = [{img:papers, title:'Игнат Потин про искусство',descropion:'Игнат Потин – художник, преподаватель на кафедре декоративно-прикладного искусства УдГУ. Его картина'}]

const video_clips = [{img:clip, title:'Shoner Paul (Павел Александров) — концерт в этнокомплексе «Бобровая Долина»',descropion:'Выступление удмуртского исполнителя Павла Александрова 12.02.2021'}]

const video_courses = [{img:corses, title:'UDMURT FOR BEGINNERS: Lesson#6',descropion:' You’ll also learn when the Constitution (yes, we have it!) of Udmurtia was adopted.'}]

const video_webinars = [{img:web, title:'Вебинар «Удмуртский с нуля». Выпуск №1',descropion:'«Удмуртский с нуля» — видеоверсия'}]

const foto = [{img:fotos, title:'Всероссийский форум финно-угорских народов, Ижевск, 3-4 июня 2021',descropion:'Гостями столицы Удмуртии стали делегации из 30 регионов России, на территории которых проживают представители финно-угорских и самодийских народов. В течении 2 дней'}]

const audio = [{img:audios, title:'Быдӟым Вормонлы 75 ар тырмонлы сӥзьыса, Балезино ёросысь Юнда гуртын выль синпелет кылдӥз',descropion:'Со интыяськемын шай вылын. Секыт война аръёсы уго тросаз гуртъёсысь эмъяськонниосы вайылӥзы сӧсырмем яке висись солдатъёсты. Йӧнамъёсыз выльысь'}]

const servicpost = [{img:muz1,title:'Музыкальный салон (105 м2)', price:'2000'},{img:holl,title:'Холл первого этажа (356 м2)', price:'1000'},{img:holl2,title:'Холл второго этажа (169 м2)', price:'700'},{img:torg,title:'Зал торжественных мероприятий (509 м2)', price:'7800'},{img:mnfunc,title:'Многофункциональный зал (256 м2)', price:'4100'}];

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLaout> <Outlet /> </MainLaout>}>
        <Route index element={<MainContent news={rus_news} serv={servicpost} />} />
        <Route path={Pahts.aboutus} element={<AboutUs />}/>
        <Route path={Pahts.media} element={<Media name='Новости' mas={rus_news}/>}/>
        <Route path={Pahts.udm_new} element={<Media name='Иворъёс' mas={udm_nems}/>}/>
        <Route path={Pahts.fun_new} element={<Media name='Развлечения' mas={fun_news}/>}/>
        <Route path={Pahts.fair_new} element={<Media name='Выставки' mas={fair_news}/>}/>
        <Route path={Pahts.paper} element={<Media name='Статьи' mas={paper}/>}/>
        <Route path={Pahts.video_clip} element={<Media name='Удмуртские клипы' mas={video_clips}/>}/>
        <Route path={Pahts.video_course} element={<Media name='Видеокурсы удмуртского языка' mas={video_courses}/>}/>
        <Route path={Pahts.video_webinar} element={<Media name='Вебинары "Удмуртский с нуля"' mas={video_webinars}/>}/>
        <Route path={Pahts.foto} element={<Media name='Фото' mas={foto}/>}/>
        <Route path={Pahts.audio} element={<Media name='Аудио' mas={audio}/>}/>
        <Route path={Pahts.services} element={<Services />}/>
        <Route path={Pahts.methodasisst} element={<MethodAsisst />}/> 
        <Route path={Pahts.staff} element={<Staff/>}/> 
        <Route path={Pahts.contacts} element={<Contacts/>}/> 
        <Route path={Pahts.project} element={<Project/>}/> 
        <Route path={Pahts.reguldoc} element={<ReguDoc/>}/> 
        <Route path={Pahts.hrental} element={<Hrental mas={servicpost}/>}/> 
        <Route path={Pahts.excursion} element={<Excursion/>}/> 
        <Route path={Pahts.tutorial} element={<Tutorial/>}/>         
      </Route>
      <Route path={Pahts.admin} element={<AdminMenu> <Outlet /> </AdminMenu>}/>
      <Route path="/login" element={<Login/>}>        
        <Route path={Pahts.postingspost} element= { <NewsPostingsPage/> }/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
