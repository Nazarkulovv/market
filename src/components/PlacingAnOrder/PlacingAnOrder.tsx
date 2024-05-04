import React from 'react'
import "./PlacingAnOrder.scss"

const PlacingAnOrder: React.FC = () => {
	return (
		<div>
			<section id='placingAnOrder'>
				<div className='container'>
					<div className='placingAnOrder'>
						<div className='PlacingAnOrderBlock'>
							<h4>Для оформления заказа заполните поля </h4>
							<h6>Срок доставки в городе - 24 часа</h6>
							<input type='text' placeholder='введите точный адрес' />
							<input type='text' placeholder='Оставьте свой номер телефона' />
							<button>Оформить заказ</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default PlacingAnOrder
