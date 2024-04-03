import React from 'react'

import './style.css'
import { Panel, PanelHeader } from '@vkontakte/vkui';

const Persik = (props) => (
	<Panel key={props.id} separator={false} id={props.id}>
		<PanelHeader>
		</PanelHeader>
	</Panel>
)

export default Persik;
