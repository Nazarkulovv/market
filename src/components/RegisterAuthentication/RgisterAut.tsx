import React, { useState } from 'react'
import img1 from '../../assets/google.svg'
import img2 from '../../assets/faceBook.svg'
import './RgisterAut.scss'

const RgisterAut: React.FC = () => {
	const [tellInEmail, setTellInEmail] = useState(false)

	function tellFunction() {
		setTellInEmail(true)
	}
	function emailFunction() {
		setTellInEmail(false)
	}
	return (
		<div>
			<section id='registerAut'>
				<div className='container'>
					<div className='registerAut'>
						<div className='registerBlock'>
							<h4>ВОЙДИТЕ ЧТОБЫ ПОЛУЧИТЬ 20% СКИДКУ НА ВЕСЬ АССОРТИМЕНТ</h4>
							<div className='registerInTellInEmail'>
								<h4
									style={{
										background: tellInEmail ? '' : 'rgb(143, 166, 248)'
									}}
									onClick={emailFunction}
								>
									почта
								</h4>
								<h4
									style={{
										background: tellInEmail ? 'rgb(143, 166, 248)' : ''
									}}
									onClick={tellFunction}
								>
									телефон
								</h4>
							</div>
							{tellInEmail ? (
								<div className='registerInput'>
									<input
										type='text'
										placeholder='+996 _ _ _ _ _ _ _ _ _ _ _ _ _ _'
									/>
									<h4 className='tellCode'>
										Введите номер телефона и мы отправим СМС с кодом
										подтверждения.
									</h4>
								</div>
							) : (
								<div className='registerInput'>
									<input type='text' placeholder='АДРЕС ЭЛ.ПОЧТЫ' />
									<input type='text' placeholder='пароль' />
									<h4>ЗАБЫЛИ ПАРОЛЬ?</h4>
								</div>
							)}
							<button>{tellInEmail ? 'ПОЛучить код' : 'Войти '}</button>
							<h6>или вы можете войти с помощью</h6>
							<div className='registerGoogleInFc'>
								<img src={img1} alt='' />
								<img src={img2} alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RgisterAut
