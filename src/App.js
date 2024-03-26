import React, { useState, useEffect } from 'react'
import bridge from '@vkontakte/vk-bridge'
import View from '@vkontakte/vkui/dist/components/View/View'
import ConfigProvider from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider'
import '@vkontakte/vkui/dist/vkui.css'
import axios from 'axios'
import ModalPage from '@vkontakte/vkui/dist/components/ModalPage/ModalPage'
import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot'
import Icon28CancelCircleOutline from '@vkontakte/icons/dist/28/cancel_circle_outline'
import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import Snackbar from '@vkontakte/vkui/dist/components/Snackbar/Snackbar'
import './app.css'

import {
	Home,
	Loader,
	Start_1,
	Final,
	Result
} from './panels'
import { constants } from './utils/constants'

const App = (props) => {
	const url = 'https://dendonora2020.donorsearch.org/backendD'

	const [snackbar, setSnackbar] = useState(null)
	const [activePanel, setActivePanel] = useState('loading')
	const [history, setHistory] = useState(['final'])
	const [fetchedUser, setUser] = useState(constants.myUserInfo) // hardcode
	const [infoUser, setInfoUser] = useState({"first":true,"data":null}) // hardcode
	const [popout, setPopout] = useState(null)
	const [activeModal, setActiveModal] = useState(null)

	const openSnackBar = (text, type) => {
		if (snackbar) return
		let icon, color
		if (type === 'error') { icon = <Icon28CancelCircleOutline fill='#fff' width={20} height={20} />; color = '#E50D22' }
		if (type === 'success') { icon = <Icon28SmileOutline fill='#fff' width={20} height={20} />; color = '#2ACA53' }
		setSnackbar(
			<Snackbar
				duration={1500}
				layout='vertical'
				onClose={() => setSnackbar(null)}
				before={<Avatar style={{ background: color }} size={24} className='blueBackground'>{icon}</Avatar>}
			>
				{text}
			</Snackbar>
		)
	}

	useEffect(() => {
		bridge.send('VKWebAppSetViewSettings', { 'status_bar_style': 'light', 'action_bar_color': '#E50D22' });
	})

	useEffect(() => {
		// bridge.subscribe(({ detail: { type, data } }) => {
		// 	if (type === 'VKWebAppUpdateConfig') {
		// 		const schemeAttribute = document.createAttribute('scheme')
		// 		schemeAttribute.value = data.scheme ? data.scheme : 'client_light'
		// 		document.body.attributes.setNamedItem(schemeAttribute)
		// 	}
		// })
		window.addEventListener('popstate', (event) => {
			const his = history;
			his.pop();
			const active = his[his.length - 1];
			if (active === 'main') {
				bridge.send('VKWebAppDisableSwipeBack')
			}
			setHistory(his)
			setActivePanel(active)
		}, false);

		( () => {
			// const user = await bridge.send('VKWebAppGetUserInfo')
			setUser(constants.myUserInfo) // hardcode
			console.log(fetchedUser);
			const params = '?' + 'action=login' + '&id_vk=' + fetchedUser.id // hardcode
			// axios.get(url + '/API/index.php' + params).then((res) => {
				setInfoUser({"first":true,"data":null}) // hardcode
				if (infoUser.first) { // hardcode
					setActivePanel('start_1')
				} else {
					var leng = 0
					for (/*var s in res.data.data.info.answer*/let i = 0; i < 10; i++) {
						leng++
					}
					if (leng < 10) {
						setActivePanel('start_1')
					} else {
						setActivePanel('final')
					}
				}
			// })
		})()
	}, [])

	const checkHash = (hash, del) => {
		let temp = hash.split(del)
		let obj = {}

		for (let i = 0; i < temp.length; i++) {
			const t = temp[i].split('=')
			obj[t[0]] = t[1]
		}

		return obj
	}

	const goBack = () => {
		window.history.back();
	}

	const goForward = (activePanelLocal, replace = false) => {
		const historyLocal = [...history];
		historyLocal.push(activePanelLocal);
		if (activePanel === 'home') {
			bridge.send('VKWebAppEnableSwipeBack')
		}
		if (replace) {
			setHistory(history.pop())
			window.history.replaceState({}, '', '#h=' + activePanelLocal)
		} else {
			window.history.pushState({}, '', '#h=' + activePanelLocal)
		}
		setHistory(history.push(activePanelLocal))
		setActivePanel(activePanelLocal)
	}

	const declOfNum = (number, titles) => {
		var cases = [2, 0, 1, 1, 1, 2];
		return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
	}


	const propsPanels = {
		declOfNum,
		openSnackBar,
		fetchedUser,
		goForward,
		goBack,
		setActiveModal,
		setActivePanel,
		checkHash,
		infoUser,
		setInfoUser,
		url,
		setPopout
	}

	const modal = (
		<ModalRoot
			activeModal={activeModal}
			onClose={() => { setActiveModal(null) }}
		>
			<ModalPage
				id='reg_form'
				onClose={() => { setActiveModal(null) }}
			>

			</ModalPage>
		</ModalRoot>
	)

	return (
		<ConfigProvider>
			<View
				activePanel={activePanel}
				history={history}
				onSwipeBack={goBack}
				popout={popout}
				modal={modal}
				className='background'
			>
				<Loader id='loading' />
				<Start_1 id='start_1'
					{...propsPanels}
				/>
				<Home id='home'
					{...propsPanels}
				/>
				<Final id='final'
					{...propsPanels}
				/>
				<Result id='result'
					{...propsPanels}
				/>
			</View>
			{snackbar}
		</ConfigProvider>

	);
}

export default App;

