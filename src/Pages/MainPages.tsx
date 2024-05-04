import React from 'react'
import HeaderPlacingAnOrder from '../components/HedaerPlacingAnOrder/HeaderPlacingAnOrder'
import PlacingAnOrder from '../components/PlacingAnOrder/PlacingAnOrder'

const MainPages: React.FC = () => {
	return (
		<div>
			<HeaderPlacingAnOrder />
			<PlacingAnOrder />
		</div>
	)
}

export default MainPages
