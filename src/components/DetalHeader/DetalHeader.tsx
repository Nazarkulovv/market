import React from 'react'
import './DetalHeader.scss'
import imgHeader from '../../assets/headerAutImg1.png'



const DetalHeader: React.FC = () => {
	return (	
		<div>
			<header id='headerRegister'>
				<div className='container'>
					<div className='headerRegister'>
						<img src={imgHeader} alt='' />
						<div className='headerNavs'>
							<h3>ГЛАВНАЯ</h3>
							<h3>О нас</h3>
							<h3>новинки</h3>
							<h3>Блог </h3>
							<h3>информация</h3>
							<h3>Популярные</h3>
							<h3>sale</h3>
							<h3>контакты</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default DetalHeader
