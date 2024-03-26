import React, { useEffect, useState } from 'react'
import bridge from '@vkontakte/vk-bridge'
import {
	Div,
	Button,
	Avatar,
	Panel,
	PanelHeader
} from '@vkontakte/vkui'
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import rasterizehtml from 'rasterizehtml'
import axios from 'axios'
import './style.css'
import a_q from '../Q&A.json'
import R0_4 from '../../img/0_4.svg'
import R5_8 from '../../img/5_8.svg'
import R9_10 from '../../img/9_10.svg'
import pgrants from '../../img/pgrants_logo_gp-horizontal_dark.png'
// import Stories from './stories'
// import Post from './post'

const photo_wall_post = [
	'photo-182940946_457239037',
	'photo-182940946_457239038',
	'photo-182940946_457239039',
	'photo-182940946_457239040',
	'photo-182940946_457239041',
	'photo-182940946_457239042',
	'photo-182940946_457239043',
	'photo-182940946_457239044',
	'photo-182940946_457239045',
	'photo-182940946_457239046'
]

const Persik = props => {
	const spinner = <ScreenSpinner size='large' />
	const [lengthT, setLengthT] = useState(0)
	const [randInt, setRandInt] = useState(0)
	const [rank, setRank] = useState('')
	// const [info, setInfo] = useState(null)

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
		const params = '?' + 'action=ismember' + '&id_vk=' + props.fetchedUser.id + '&id_group=194506147'
		// axios.get(props.url + '/API/index.php' + params).then((res) => {
		// 	console.log('response', res.data.response)
		// 	if (res.data.response) {
		// 		document.getElementById('button_join_group').classList.add('disable')
		// 	}
		// })
		// setInfo(props.checkHash(window.location.search.substring(1), '&'))
	}, [])

	const randomInteger = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	}

	// const goStories = (index = null) => {
	// 	props.setPopout(spinner)
	// 	var canvas = document.getElementById('canvas_stories'),
	// 		context = canvas.getContext('2d')
	// 	const data = new FormData()
	// 	if (index !== null) {
	// 		// setRandInt(randomInteger(9))
	// 		var html = document.getElementById('card_stories_random').innerHTML
	// 		data.append('index', '' + randomInteger(9))
	// 	} else {
	// 		data.append('index', '-1')
	// 		var html = document.getElementById('my_result_stories').innerHTML
	// 	}
	// 	rasterizehtml.drawHTML(html).then(function (renderResult) {
	// 		context.clearRect(0, 0, canvas.width, canvas.height)
	// 		context.drawImage(document.getElementById('bg_s'), -10, -10, 416, 820)
	// 		context.drawImage(renderResult.image, -10, -10, 416, 820)
	// 		// try {
	// 		// 	setTimeout(() => {

	// 		// 		const img = canvas.toDataURL('image/png')

	// 		// 		var blobBin = atob(img.split(',')[1]);
	// 		// 		var array = [];
	// 		// 		for (var i = 0; i < blobBin.length; i++) {
	// 		// 			array.push(blobBin.charCodeAt(i));
	// 		// 		}
	// 		// 		var file = new Blob([new Uint8Array(array)], { type: 'image/png' });

	// 		// 		const data = new FormData()
	// 		// 		data.append('user_id', props.fetchedUser.id)
	// 		// 		data.append('photo', file)
	// 		// 		// data.append('photo1', canvas.toDataURL('image/png'))
	// 		// 		axios
	// 		// 			.post(props.url + "/stories.php", data, {
	// 		// 				headers: {
	// 		// 					'Content-Type': 'multipart/form-data'
	// 		// 				}
	// 		// 			})
	// 		// 			.then(function (response) {
	// 		// 				console.log('response', response.data)
	// 		// 				props.setPopout(null)
	// 		// 				//////////////////////////////////////////////////////// 
	// 		// 				bridge.send('VKWebAppShowStoryBox', {
	// 		// 					'background_type': 'image',
	// 		// 					'url': response.data.url
	// 		// 				}).then((res) => {
	// 		// 					console.log('res stories', res)
	// 		// 				}).catch((err) => {
	// 		// 					console.log('err stories', err)
	// 		// 					props.openSnackBar('error stories', 'error')
	// 		// 				}).finally(() => {
	// 		// 					props.setPopout(null)
	// 		// 				})
	// 		// 				////////////////////////////////////////////////////////
	// 		// 			})
	// 		// 			.catch((err) => {
	// 		// 				props.setPopout(null)
	// 		// 				console.error('err upload sever photo', err)
	// 		// 				props.openSnackBar('error upload server photo', 'error')
	// 		// 			})

	// 		setTimeout(() => {
	// 			bridge.send("VKWebAppGetAuthToken", { "app_id": info.vk_app_id, "scope": 'photos,stories' }).then((resultT) => {
	// 				console.log('[resultT', resultT)
	// 				bridge.send("VKWebAppCallAPIMethod", {
	// 					"method": "stories.getPhotoUploadServer",
	// 					"request_id": "stories",
	// 					"params": {
	// 						"v": "5.107",
	// 						"access_token": resultT.access_token,
	// 						"link_url": "https://vk.com/app6853309",
	// 						"add_to_news": 1
	// 					}
	// 				}).then((resultL) => {
	// 					const img = canvas.toDataURL('image/png')
	// 					var blobBin = atob(img.split(',')[1]);
	// 					var array = [];
	// 					for (var i = 0; i < blobBin.length; i++) {
	// 						array.push(blobBin.charCodeAt(i))
	// 					}
	// 					var file = new Blob([new Uint8Array(array)], { type: 'image/png' })
	// 					data.append('user_id', props.fetchedUser.id)
	// 					data.append('photo', file)
	// 					data.append('url', resultL.response.upload_url)
	// 					axios
	// 						.post(props.url + "/wallPost.php", data, {
	// 							headers: {
	// 								'Content-Type': 'multipart/form-data'
	// 							}
	// 						})
	// 						.then(function (response) {
	// 							if (response.data.response.hasOwnProperty('story')) {
	// 								props.openSnackBar('Опубликованно', 'success')
	// 							} else {
	// 								props.openSnackBar('error upload server photo', 'error')
	// 							}
	// 							props.setPopout(null)
	// 						})
	// 						.catch((err) => {
	// 							props.setPopout(null)
	// 							console.error('err upload sever photo', err)
	// 							props.openSnackBar('error upload server photo', 'error')
	// 						})
	// 				})
	// 			})
	// 		}, 2000)


	// 		// 	}, 500)
	// 		// } catch (err) {
	// 		// 	console.error('err unknow', err)
	// 		// 	props.openSnackBar('error unknow', 'error')
	// 		// 	props.setPopout(null)
	// 		// }

	// 	}).catch((err) => {
	// 		console.error('err photo', err)
	// 		props.openSnackBar('error photo', 'error')
	// 	})
	// }

	const goStoriesTest = () => {
		props.setPopout(spinner)
		bridge.send("VKWebAppGetAuthToken", { "app_id": 6853309, "scope": 'photos,stories' }).then((resultT) => {
			bridge.send("VKWebAppCallAPIMethod", {
				"method": "stories.getPhotoUploadServer",
				"request_id": "stories",
				"params": {
					"v": "5.107",
					"access_token": resultT.access_token,
					"link_url": "https://vk.com/app6853309",
					"add_to_news": 1
				}
			}).then((resultL) => {
				const data = new FormData()
				data.append('user_id', props.fetchedUser.id)
				data.append('url', resultL.response.upload_url)
				data.append('index', '' + randomInteger(9))

				axios
					.post(props.url + "/wallPost.php", data, {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(function (response) {
						if (response.data.response.hasOwnProperty('story')) {
							props.openSnackBar('Опубликованно', 'success')
						} else {
							props.openSnackBar('error upload server photo', 'error')
						}
						props.setPopout(null)
					})
					.catch((err) => {
						props.setPopout(null)
						console.error('err upload sever photo', err)
						props.openSnackBar('error upload server photo', 'error')
					})
			})
		}).catch((err) => {
			props.setPopout(null)
			console.error('err get token', err)
			props.openSnackBar('error get token', 'error')
		})
	}

	// const goWallPost = (index = null) => {
	// 	props.setPopout(spinner)

	// 	bridge.send("VKWebAppGetAuthToken", { "app_id": info.vk_app_id, "scope": 'photos,stories' }).then((resultT) => {
	// 		bridge.send("VKWebAppCallAPIMethod", {
	// 			"method": "photos.getWallUploadServer",
	// 			"request_id": "photoUpload",
	// 			"params": {
	// 				"v": "5.107",
	// 				"access_token": resultT.access_token
	// 			}
	// 		}).then((resultL) => {
	// 			var canvas = document.getElementById('canvas_wall_post'),
	// 				context = canvas.getContext('2d')
	// 			if (index !== null) {
	// 				// let randomPhoto = randomInteger(9)
	// 				// setRandInt(randomInteger(9))
	// 				// var html = document.getElementById('card_wall_post_random').innerHTML
	// 				// photo_wall_post[randomInteger(9)]
	// 				//////////////////////////////////////////////////////// 
	// 				bridge.send('VKWebAppShowWallPostBox', {
	// 					'message': '@club21179173(DonorSearch)\nСможешь ли отличить миф от факта?',
	// 					'attachments': photo_wall_post[randomInteger(9)] + ',https://vk.com/app6853309'
	// 				}).then((res) => {
	// 					console.log('res wall post', res)
	// 				}).catch((err) => {
	// 					console.error('err wall post', err)
	// 					props.openSnackBar('error wall post', 'error')
	// 				}).finally(() => {
	// 					props.setPopout(null)
	// 				})
	// 				////////////////////////////////////////////////////////
	// 				return
	// 			} else {
	// 				var html = document.getElementById('my_result_wall_post').innerHTML
	// 			}
	// 			rasterizehtml.drawHTML(html).then(function (renderResult) {
	// 				context.clearRect(0, 0, canvas.width, canvas.height)
	// 				context.drawImage(document.getElementById('bg_w_p'), -10, -10, 710, 520) // !!!!!!!!!!!!!!!!!HZ 220793
	// 				context.drawImage(renderResult.image, -10, -10, 710, 520)
	// 				setTimeout(() => {
	// 					const img = canvas.toDataURL('image/png')

	// 					var blobBin = atob(img.split(',')[1]);
	// 					var array = [];
	// 					for (var i = 0; i < blobBin.length; i++) {
	// 						array.push(blobBin.charCodeAt(i));
	// 					}
	// 					var file = new Blob([new Uint8Array(array)], { type: 'image/png' });


	// 					const data = new FormData()
	// 					data.append('url', resultL.response.upload_url)
	// 					data.append('user_id', resultL.response.user_id)
	// 					data.append('token', resultT.access_token)
	// 					data.append('photo', file)
	// 					data.append('index', '-1')
	// 					axios
	// 						.post(props.url + "/wallPost.php", data, {
	// 							headers: {
	// 								'Content-Type': 'multipart/form-data'
	// 							}
	// 						})
	// 						.then(function (response) {
	// 							bridge.send("VKWebAppCallAPIMethod", {
	// 								"method": "photos.saveWallPhoto",
	// 								"request_id": "savephoto",
	// 								"params": {
	// 									"v": "5.107",
	// 									"access_token": resultT.access_token,
	// 									"user_id": props.fetchedUser.id,
	// 									"photo": response.data.photo,
	// 									"server": response.data.server,
	// 									"hash": response.data.hash
	// 								}
	// 							}).then((resultS) => {
	// 								//////////////////////////////////////////////////////// 
	// 								bridge.send('VKWebAppShowWallPostBox', {
	// 									'message': '@club21179173(DonorSearch)',
	// 									'attachments': 'photo' + resultS.response[0].owner_id + "_" + resultS.response[0].id
	// 								}).then((res) => {
	// 									console.log('res wall post', res)
	// 								}).catch((err) => {
	// 									console.error('err wall post', err)
	// 									props.openSnackBar('error wall post', 'error')
	// 								}).finally(() => {
	// 									props.setPopout(null)
	// 								})
	// 								////////////////////////////////////////////////////////
	// 							}).catch((err) => {
	// 								console.error('err saveWallPhoto', err)
	// 								props.openSnackBar('error saveWallPhoto', 'error')
	// 								props.setPopout(null)
	// 							})
	// 						})
	// 						.catch((err) => {
	// 							props.setPopout(null)
	// 							console.error('err upload sever photo', err)
	// 							props.openSnackBar('error upload server photo', 'error')
	// 						})
	// 				}, 500)
	// 			}).catch((err) => {
	// 				props.setPopout(null)
	// 				console.error('err photo', err)
	// 				props.openSnackBar('error photo', 'error')
	// 			})
	// 		}).catch((err) => {
	// 			console.error('err upload photo', err)
	// 			props.openSnackBar('error upload photo', 'error')
	// 		})
	// 	}).catch((err) => {
	// 		props.setPopout(null)
	// 		console.error('err token', err)
	// 		props.openSnackBar('error token', 'error')
	// 	})
	// }

	const goWallPostTest = () => {
		props.setPopout(spinner)
		bridge.send('VKWebAppShowWallPostBox', {
			'message': `Можешь ли отличить миф от факта?\nМой результат - ${lengthT} из 10. Проверь себя!\n#ДеньДонора2020`,
			'attachments': photo_wall_post[randomInteger(9)] + ',https://vk.com/app6853309'
		}).then((res) => {
			console.log('res wall post', res)
		}).catch((err) => {
			console.error('err wall post', err)
			props.openSnackBar('error wall post', 'error')
		}).finally(() => {
			props.setPopout(null)
		})
	}

	return (
		<Panel
			id={props.id}
			separator={false}
			centered
		>
			<PanelHeader>
				<div style={{ color: 'white' }}>День донора</div>
			</PanelHeader>
			<Div className='centerF'>
				<span className='final_title'>
					Ты {props.fetchedUser.sex === 1 ? 'разгадала' : 'разгадал'} {lengthT} {props.declOfNum(lengthT, ['миф', 'мифа', 'мифов'])} и<br />
					{props.fetchedUser.sex === 1 ? 'заслужила' : 'заслужил'} звание!
				</span>
				<div className='avatar_block'>
					<img
						src={props.fetchedUser.photo_200}
						className='avatar'
					/>
					<img
						className='avatar_sec'
						src={rank}
					/>
				</div>

				<span className='final_title'>
					Отличный результат!
				</span>
				<span className='final_text'>
					Присоединяйся к донорскому<br />движению - "протяну руку городу!"
				</span>
				<Button
					id='button_join_group'
					className='final_button'
					style={{ color: '#E50D22' }}
					onClick={() => {
						bridge.send('VKWebAppJoinGroup', { 'group_id': 194506147 }).then((res) => {
							if (res.result) { document.getElementById('button_join_group').classList.add('disable') }
						})
					}}
				>
					<b>Подписаться на сообщество</b>
				</Button>
				{/* <Button
					className='final_button'
					onClick={() => {
						goStories()
					}}
				>
					<b>Поделиться в сторис результатом</b>
				</Button> */}
				{/* <Button
					className='final_button'
					onClick={() => {
						goStoriesTest()
					}}
				>
					<b>Поделиться в сторис фактом</b>
				</Button> */}
				{/* <Button
					className='final_button'
					onClick={() => {
						goWallPost()
					}}
				>
					<b>Поделиться на стене результатом</b>
				</Button> */}
				{/* <Button
					className='final_button'
					onClick={() => {
						goWallPostTest()
					}}
				>
					<b>Поделиться на стене фактом</b>
				</Button> */}
				{/* <Button
					className='final_button'
					style={{ color: '#E50D22' }}
					onClick={() => {
						bridge.send('VKWebAppShare', { 'link': 'https://vk.com/app6853309' });
					}}
				>
					<b>Бросить вызов другу!</b>
				</Button> */}
				<div className='patrners_block'>
					<img
						className='pgrants'
						src={pgrants}
					/>
				</div>
				{/* <Stories {...props} randInt={randInt} />
				<Post {...props} randInt={randInt} /> */}
			</Div>
		</Panel >
	)
}

export default Persik;
