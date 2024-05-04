import React from 'react'
import ball from '../../assets/ball.svg'
import './Detail.scss'

const Detail: React.FC = () => {
	const size = [23, 13, 23, 12, 12]
	const price = 730
	const totalCount = 3
	const color = 'серый'
	const counter = 1
	return (
		<div>
			<section id='detail'>
				<div className='container'>
					<div className='detail'>
						<div className='detailProductImages'>
							<img
								src='https://img.joomcdn.net/3f0dd4eed92f330e81d503edfba5f930bf81217c_original.jpeg'
								alt=''
							/>
							<img
								src='https://img.joomcdn.net/3f0dd4eed92f330e81d503edfba5f930bf81217c_original.jpeg'
								alt=''
							/>
							<img
								src='https://img.joomcdn.net/3f0dd4eed92f330e81d503edfba5f930bf81217c_original.jpeg'
								alt=''
							/>
							<img
								src='https://img.joomcdn.net/3f0dd4eed92f330e81d503edfba5f930bf81217c_original.jpeg'
								alt=''
							/>
						</div>
						<div className='detaileImgScroll'>
							<img
								src='https://img.joomcdn.net/3f0dd4eed92f330e81d503edfba5f930bf81217c_original.jpeg'
								alt=''
							/>
						</div>
						<div className='detailDescr'>
							<div className='detaileNamePrice'>
								<div className='detailData'>
									<div className='detailNameReiting'>
										<button>A45 контейнер</button>
										<img src={ball} alt='' />
										<h5>4.7 </h5>
										<h6>• 550 оценок</h6>
									</div>
									<div className='detaileSize'>
										<h3>Размеры:</h3>
										<div className='detaileSizeProduct'>
											{size.map(el => (
												<h4>{el}</h4>
											))}
										</div>
									</div>
								</div>
								<div className='detaileBlockPrice'>
									<h3>Цена:_____________ {price}с</h3>
									<h3> Размер: __________ {size[3]}</h3>
									<h3> Кол-во: ___________ {totalCount}шт</h3>
									<h3> Цвет:______________ {color}</h3>
								</div>
							</div>
							<div className='detaileCounter'>
								<button>_</button>
								<h3>{counter}</h3>
								<button>+</button>
							</div>
							<div className='detaileDescriptoinProductInCreate'>
								<div className='detaileDescriptionProduct'>
									<h3 className='productColor'> Цвет: серый</h3>
									<h3>
										Состав _____________________________________хлопок 100%{' '}
									</h3>
									<h3>Размер на модели ______________________122</h3>
									<h3>Рост модели на фото ___________________118</h3>
									<h3>Утеплитель _____________________________ Без начёса</h3>
									<h3>Страна производства ___________________Узбекистан</h3>
									<h3>
										Особенности модели _____________________светится в темноте
									</h3>
									<h3>
										Состав _____________________________________хлопок 100%
									</h3>
									<h3>Размер на модели ______________________122</h3>
									<h3>Рост модели на фото ____________________118</h3>
									<h3>Утеплитель ______________________________ Без начёса</h3>
									<h3>Страна производства ___________________Узбекистан</h3>
									<h3>
										Особенности модели ____________________светится в темноте
									</h3>
								</div>
								<div className='detaileProductCreate'>
									<button className='create1'>Дабавить в корзину</button>
									<button className='create2'>Купить сейчас</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Detail
