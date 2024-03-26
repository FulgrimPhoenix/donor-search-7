import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'

import './style.css'

const Persik = props => (
	<Panel separator={false} id={props.id}>
		<PanelHeader>
		</PanelHeader>
	</Panel>
)

export default Persik;
