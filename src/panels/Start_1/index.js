import React from 'react'
import './style.css'
import {
  Div,
  Button,
  PanelHeader,
  Panel
} from '@vkontakte/vkui'
import donorLogo from '../../img/DonorSearch.png'
import puls from '../../img/puls.png'

const Home = (props) => {
  return (
    <Panel
      separator={false}
      id={props.id}
      className='background'
    >
      <PanelHeader></PanelHeader>
      <Div className='center'>
        <div className='start_top'>
          <img className='donorLogo' src={donorLogo} alt='donor Logo' />
          <img className='puslLogo' src={puls} alt='donor Logo' />
          {/* <span className='start_title'>
            Привет, {props.fetchedUser.first_name}
          </span> */}
          <span
            className='start_text'
            style={{ marginBottom: 0 }}
          >
            15 августа пройдёт первый фестиваль донорского движения "Пульсация" в Казани.
            {/* 14 июня — Всемирный день<br />
            донора крови. */}
          </span>
        </div>
        <span className='start_text'>
          Вокруг донорства существует множество мифов - давай узнаем, сможешь ли ты их разоблачить?"
        </span>
        {/* <span className='start_text'>
          Давай узнаем, сможешь ли ты их разоблачить?
        </span> */}
        
        <div className='start_bottom'>
          <Button
            className='start_button'
            onClick={() => {
              props.setActivePanel('home')
            }}
          >
            <b>Начать</b>
          </Button>
        </div>
      </Div>
    </Panel>
  )
}

export default Home;
