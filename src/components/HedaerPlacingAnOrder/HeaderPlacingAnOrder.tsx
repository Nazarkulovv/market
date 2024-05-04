import React from 'react'
import './HeaderPlacingAnOrder.scss'
const HeaderPlacingAnOrder: React.FC = () => {
	return (
		<div>
			<header id='HeaderPlacingAnOrder'>
				<div className='container'>
					<div className='HeaderPlacingAnOrder'>
						<div className='HeaderPlacingAnOrderNavs'>
							<h5>ГЛАВНАЯ</h5>
							<h5>О нас / контакты</h5>
							<h5>новинки</h5>
							<h5>Популярные</h5>
							<h5>sale</h5>
						</div>
						<button>КАТЕГОРИИ</button>
					</div>
				</div>
			</header>
		</div>
	)
}

export default HeaderPlacingAnOrder
