import React from 'react'
import './Basket.scss'

const Basket: React.FC = () => {
	let count = 1
	let countProduct = 1
	return (
		<div>
			<section id='basket'>
				<div className='container'>
					<div className='basket'>
						<div className='basketProductInPrice'>
							<div className='basketProducts'>
								<div className='basketProductCountProduct'>
									<h3>Корзина</h3>
									<h6>{countProduct} товара</h6>
								</div>
								<div className='basketProduct'>
									<div className='basketProductImgName'>
										<img
											src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/250px-Blue_Tshirt.jpg'
											alt=''
										/>
										<div className='BasketProductNamePrice'>
											<h3>Футболка красная</h3>
											<h6>1шт</h6>
										</div>
									</div>
									<div className='basketCounter'>
										<button>-</button>
										<h3>{count}</h3>
										<button>+</button>
									</div>
									<div className='basketPrice'>
										<h3>799 с</h3>
										<h6>799 с</h6>
									</div>
								</div>
								<div className='basketProduct'>
									<div className='basketProductImgName'>
										<img
											src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/250px-Blue_Tshirt.jpg'
											alt=''
										/>
										<div className='BasketProductNamePrice'>
											<h3>Футболка красная</h3>
											<h6>1шт</h6>
										</div>
									</div>
									<div className='basketCounter'>
										<button>-</button>
										<h3>{count}</h3>
										<button>+</button>
									</div>
									<div className='basketPrice'>
										<h3>799 с</h3>
										<h6>799 с</h6>
									</div>
								</div>
							</div>
							<div className='basketCreate'>
								<h3>Выбрать адрес доставки </h3>
								<div className='basketProductNameInPrice1'>
									<h6>футболка красная , 2шт </h6>
									<h6>1600с</h6>
								</div>
								<div className='basketProductNameInPrice2'>
									<h3>Итого</h3>
									<h3>1600с</h3>
								</div>
								<button>Перейти в чат</button>
								<button>Заказать</button>
							</div>
						</div>
						<div className='basketCreateAdresInTell'>
							<div className='basketAdresInTell'>
								<h3>Способы доставки</h3>
								<h4>Выбрать адрес доставки</h4>
							</div>
							<div className='basketCreateSum'>
								<h3>Способы оплаты</h3>
								<h6>
									Выберите адрес доставки после этого мы покажем все доступые
									способы оплаты
								</h6>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Basket
