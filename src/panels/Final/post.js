import React, { useEffect, useState } from 'react'
import './style.css'
import a_q from '../Q&A.json'
import R0_4 from '../../img/0_4.svg'
import R5_8 from '../../img/5_8.svg'
import R9_10 from '../../img/9_10.svg'
import donorLogo from '../../img/Logo.png'
import background from '../../img/qwe1.png'

const Persik = props => {
  const [lengthT, setLengthT] = useState(0)
  const [rank, setRank] = useState('')

  useEffect(() => {
    if (props.infoUser.info.hasOwnProperty('answer')) {
      let a = 0
      for (let key in props.infoUser.info.answer) {
        if (props.infoUser.info.answer[key]) { a++ }
      }
      if (a >= 0 && a <= 4) { setRank(R0_4) }
      if (a >= 5 && a <= 8) { setRank(R5_8) }
      if (a >= 9 && a <= 10) { setRank(R9_10) }
      setLengthT(a)
    }

  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        left: '10000px',
        top: '0px'
      }}
    >
      <canvas
        id='canvas_wall_post'
        width='700'
        height='500'
      >
      </canvas>
      <div
        id='my_result_wall_post'
      >
        <div
          style={{
            width: '700px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <span style={{
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '50px',
            textAlign: 'center',
            color: 'white',
            marginTop: '2%',
            fontFamily: 'sans-serif'
          }}>
            Я {props.fetchedUser.sex === 1 ? 'разгадала' : 'разгадал'} {lengthT} мифов и<br />
					  заслужил звание!
				  </span>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '10%',
              width: '146.04px',
              height: '146.04px',
            }}
          >
            <img
              style={{
                width: '146.04px',
                height: '146.04px',
                borderRadius: '73.02px',
                marginTop: '5%',
                zIndex: 5
              }}
              src={props.fetchedUser.photo_200}
            />
            <img
              style={{
                position: 'absolute',
                width: '110%',
                top: '100px',
                zIndex: 10
              }}
              src={rank}
            />
          </div>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '30px',
              lineHeight: '50px',
              textAlign: 'center',
              color: 'white',
              marginBottom: '5%',
              fontFamily: 'sans-serif'
            }}
          >
            Отличный результат!
						</span>
        </div>
      </div>
      <div
        id='card_wall_post_random'
      >
        <div
          style={{
            width: '700px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <span style={{
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '50px',
            textAlign: 'center',
            color: 'white',
            marginTop: '10%',
            fontFamily: 'sans-serif'
          }}>
            Сможешь ли отличить миф<br />от факта?
				  </span>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '10%',
              width: '146.04px',
              height: '146.04px',
            }}
          >
            <img
              style={{
                width: '200px',
                marginTop: '5%',
                zIndex: 5
              }}
              src={'./img/' + a_q[props.randInt].img}
            />
          </div>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '22px',
              lineHeight: '30px',
              textAlign: 'center',
              color: 'white',
              marginTop: '10%',
              fontFamily: 'sans-serif'
            }}
          >
            {a_q[props.randInt].question}
          </span>
        </div>
      </div>
      <img
        id='bg_w_p'
        style={{
          width: '700px',
          height: '500px'
        }}
        src={background}
      />
    </div>

  )
}

export default Persik;
