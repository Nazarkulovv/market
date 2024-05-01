import React from 'react'
import HeaderAuthentication from '../components/HeaderAuthentication/HeaderAuthentication'
import RgisterAut from '../components/RegisterAuthentication/RgisterAut'

const MainPages: React.FC = () => {
	return (
		<div>
			<HeaderAuthentication />
			<RgisterAut />
		</div>
	)
}

export default MainPages
