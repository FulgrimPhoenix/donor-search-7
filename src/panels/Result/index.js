import React, { useEffect, useState } from 'react'
import {
	Div,
	Button,
	Avatar,
	PanelHeaderButton,
	Panel,
	PanelHeader
} from '@vkontakte/vkui'

import { platform } from '@vkontakte/vkui'
import './style.css'
import { Icon24Back, Icon28ChevronBack } from '@vkontakte/icons';

const osName = platform();

const Result = props => {
	const [lengthT, setLengthT] = useState(0)

	useEffect(() => {
		console.log('fetchedUser', props.fetchedUser)
		console.log('infoUser', props.infoUser)
		if (props.infoUser.hasOwnProperty('answers')) {
			let a = 0
			for (let key in props.infoUser.answers) {
				if (props.infoUser.answers[key]) { a++ }
			}
			setLengthT(a)
		}

	}, [])

	const resultCards = props.infoUser.randomQ.map((data) => {
		console.log('data', data)
		return (
			<div className='card'>

			</div>
		)
	})

	return (
		<Panel
			id={props.id}
		>
			<PanelHeader
				left={
					<PanelHeaderButton onClick={props.goBack}>
						{osName === 'IOS' ? <Icon28ChevronBack style={{ color: 'white' }} /> : <Icon24Back style={{ color: 'white' }} />}
					</PanelHeaderButton>
				}
			>
				<div style={{ color: 'white' }}>Результаты</div>
			</PanelHeader>
			<Div>
				{resultCards}
			</Div>
		</Panel>
	)
}

export default Result;
