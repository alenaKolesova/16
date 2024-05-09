import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Header from './companents/Header';
import Poster from './companents/Poster';
import Description from './companents/Description';
import Actors from './companents/Actors';
import Contents from './companents/Contents';

const root = ReactDOM.createRoot(document.getElementById('root'));

let serials = [
  {
    'name': 'Одни из нас (Last of us)',
    'poster': 'poster.webp',
    'description': 'В конце сентября 2003 года по всей планете произошло массовое заражение людей кордицепсом. Прежде паразитировавший только на насекомых гриб приспособился выживать в человеческом теле, полностью подчиняя себе волю носителя и меняя его облик. В первый же день оказавшийся в эпицентре пандемии строитель Джоэл понёс невосполнимую утрату.',
    'actors': [
      {
        'name': 'Pedro Pascal',
        'role': 'Joel Miller',
      },
      {
        'name': 'Bella Ramsey',
        'role': 'Ellie Williams',
      },
      {
        'name': 'Anna Torv',
        'role': 'Theresa «Tess» Servopoulos',
      },
      {
        'name': 'Gabriel Luna',
        'role': 'Tommy Miller',
      },
      {
        'name': 'Lamar Johnson',
        'role': 'Henry Burrell',
      }
    ]
  },
  {
    'name': 'Fallout',
    'poster': 'posterFallout.webp',
    'description': 'В будущем, спустя сотни лет с момента ядерной катастрофы, которая уничтожила или изуродовала все живое на планете, мирные жители Лос Анджелеса вынуждены прятаться в подземных бункерах, построенных корпорацией "Волт-Тек". В этих защитных сооружениях они проводят долгие десятилетия, укрываясь от радиации, мутантов и преступных группировок.',
    'actors': [
      {
        'name': 'Ella Purnell',
        'role': 'Lucy MacLean',
      },
      {
        'name': 'Aaron Moten',
        'role': 'Maximus',
      },
      {
        'name': 'Walton Goggins',
        'role': 'Cooper Howard',
      },
      {
        'name': 'Moises Arias',
        'role': 'Norm MacLean',
      },
      {
        'name': 'Leslie Uggams',
        'role': 'Betty Pearson',
      }
    ]
  }
]

let serial = serials[0]

root.render(
  <div className='wrapper'>
    <div className='mobile-screen'>

      <Contents contents={serials}/>
      <Header text={serial.name} />

      <div className='cover-description'>
        <Poster poster={serial.poster} />
        <Description description={serial.description} />
      </div>

      <Actors actors={serial.actors} />

    </div>
  </div >
);