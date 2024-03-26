import React, { useState, useEffect } from 'react'
import {
	Div,
	Button,
	Panel,
	PanelHeader
} from '@vkontakte/vkui'
import axios from 'axios'

import './style.css'
import leftImg from '../../img/left.png'
import rightImg from '../../img/right.png'
import a_q from '../Q&A.json'
import { SwipeCard } from '../../component'

const Home = (props) => {
	const [card, setCard] = useState(null)
	let infoUser = null
	let indexA = 0
	let randomQ = null
	let answer = {}

	useEffect(() => {
		// console.log('fetchedUser', props.fetchedUser)
		if (props.infoUser === null) {
			let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			arr.sort(() => Math.random() - 0.5)
			randomQ = arr
			const obj = {
				randomQ: randomQ,
				answer: answer
			}
			const params = '?' + 'action=reg' + '&id_vk=' + props.fetchedUser.id + '&info=' + encodeURI(JSON.stringify(obj)) + '&uri=' + encodeURI(props.fetchedUser.photo_100)
			axios.get(props.url + '/API/index.php' + params).then((res) => {
				props.setInfoUser(res.data.data)
				infoUser = res.data.data
				setCard(strat)
			})
		} else {
			infoUser = props.infoUser
			randomQ = props.infoUser.info.randomQ
			answer = props.infoUser.info.answer
			var leng = 0
			for (var s in props.infoUser.info.answer) {
				leng++
			}
			indexA = leng
			setCard(strat)
		}
	}, [])

	const nextQuestion = () => {
		const i = randomQ[indexA]
		const temp =
			<div className='card'>
				<div className='card_top'>
					<span className='card_index'>{indexA + 1}/{randomQ.length}</span>
					<img className='card_img' src={'./img/' + a_q[i].img} alt={a_q[i].img} />
				</div>
				<div className='card_mid padding_5'>
					<span className='card_question'>
						{a_q[i].question}
					</span>
				</div>
				<div className='card_block'>
					<Button
						className='card_button left'
						onClick={() => {
							showAnswer('no')
						}}
					>
						<b>Не верю</b>
					</Button>
					<Button
						className='card_button right'
						onClick={() => {
							showAnswer('yes')
						}}
					>
						<b>Верю</b>
					</Button>
				</div>
			</div>

		setCard(
			<SwipeCard
				actionLeft={() => {
					showAnswer('no')
				}}
				actionRight={() => {
					showAnswer('yes')
				}}
			>
				{temp}
			</SwipeCard>
		)
	}

	const showAnswer = (a) => {
		const i = randomQ[indexA]
		answer[i] = a_q[i].true_answer === a ? true : false
		const b = a_q[i].true_answer === a ? 1 : 0
		///////////////////////////////////////////////
		const obj = {
			randomQ: randomQ,
			answer: answer
		}
		const params = '?' + 'action=checkQuestion' + '&id=' + infoUser.id + '&info=' + encodeURI(JSON.stringify(obj)) + '&answer_q=' + b + '&id_q=' + i
		axios.get(props.url + '/API/index.php' + params).then((res) => {
			console.log('res checkQuestion', res.data)

			const avatars = res.data.ava_uri.map((data, index) => (
				<img
					key={index}
					className='avas'
					src={data.ava_uri}
					alt={`ava_uri_${data.id_user}`}
				/>
			))

			const temp =
				<div className='card'>
					<div className='card_top padding_5'>
						<span
							className='card_title_answer'
						>
							<div className='result_card_block'
								style={{
									color: a_q[i].true_answer === a ? '#2ACA53' : '#FF525E'
								}}
							>
								<span className='result_card_title'>
									{/* {a_q[i].true_answer === a ? 'Верно!' : 'Неверно!'} */}
									{(a_q[i].true_answer === a ? (props.fetchedUser.sex === 1 ? 'Ты права, ' : 'Ты прав, ') : 'Ой нет... ') + a_q[i].true_answer_text}

								</span>
								<div className='indecator_block'>
									<div className='indecator indecator_l'
										style={{
											width: res.data.per + '%',
											borderRadius: res.data.per === 100 ? '10px' : '10px 0 0 10px'
										}}
									><span>{res.data.per >= 15 ? res.data.per + '%' : ''}</span></div>
									<div
										className='indecator indecator_r'
										style={{
											borderRadius: 100 - res.data.per === 100 ? '10px' : '0 10px 10px 0'
										}}
									>
										<span>{100 - res.data.per >= 15 ? 100 - res.data.per + '%' : ''}
										</span>
									</div>
								</div>
							</div>

						</span>
						<div className='avas_block'>
							<span className='avas_title'>также угадали:</span>
							<div className='avas_img_block'>
								{avatars}
							</div>
						</div>
					</div>
					<div className='card_mid padding_5'>
						{/* <span className='card_title_answer'>

						</span> */}
						<span className='card_question'>
							{a_q[i].answer}
						</span>
					</div>
					<Button
						className='card_button'
						onClick={() => {
							indexA = indexA + 1
							if (indexA >= randomQ.length) {
								const temp = infoUser
								temp.info.answer = answer
								temp.info.randomQ = randomQ
								props.setInfoUser(temp)
								props.setActivePanel('final')
								return
							}
							nextQuestion()
						}}
					>
						<b>{indexA + 1 >= a_q.length ? 'Закончить' : 'Дальше'}</b>
					</Button>
				</div>
			setCard(temp)
		})
		///////////////////////////////////////////////

	}

	const strat =
		<div className='card'>
			<span className='card_text'>
				Свайпай вправо, если считаешь,<br />
				что написанное — правда.
			</span>
			<img className='swipe_img' src={rightImg} alt='right img' />
			<span className='card_text'>
				Свайпай влево, если думашь,<br />
				что это ложь.
			</span>
			<img className='swipe_img' src={leftImg} alt='left img' />
			<span className='card_text'>
				Все просто.
					</span>
			<Button
				className='card_button'
				onClick={() => {
					nextQuestion()
				}}
			>
				<b>Понятно</b>
			</Button>
		</div>

	return (
		<Panel
			id={props.id}
			className='background'
			separator={false}
		>
			<PanelHeader>
				<div style={{ color: 'white' }}>День донора</div>
			</PanelHeader>
			<Div>
				{card}
			</Div>
		</Panel>
	)
}

export default Home;
