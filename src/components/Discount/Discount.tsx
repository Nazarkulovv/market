import React from 'react'
import img1 from '../../assets/imgFooter1.png'
import img2 from '../../assets/imgFooter2.png'
import img3 from '../../assets/imgFooter3.png'
import './Discount.scss'

const Discount: React.FC = () => {
	return (
		<div>
			<section id='discount'>
				<div className='container'>
					<div className='discount'>
						<div className='discountImg1'>
							<img className='discountImg1img' src={img1} alt='' />
							<img className='discountImg2img' src={img2} alt='' />
						</div>
						<div className='discountImg2'>
							<img src='' alt='' />
						</div>
						<div className='discountText'>
							<div className='flexDiscount'>
								<h4>За регистрацию получите</h4>
								<img src={img3} alt='' />
							</div>
							<div className='discountImg1'>
								<button>Пройти регистрацию</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Discount
