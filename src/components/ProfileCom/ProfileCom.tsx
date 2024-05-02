import React, { useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'

import './ProfileCom.scss'

const ProfileCom: React.FC = () => {
	const [profilePhoto, setProfilePhoto] = useState<string>(
		'https://cdn-icons-png.flaticon.com/512/149/149071.png'
	)
	const [name, setName] = useState<string>('')

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				if (e.target) {
					setProfilePhoto(e.target.result as string)
				}
			}
			reader.readAsDataURL(file)
		}
	}

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handleChoosePhoto = () => {
		const fileInput = document.getElementById('fileInput')
		if (fileInput) {
			;(fileInput as HTMLInputElement).click()
		}
	}

	return (
		<div>
			<section id='profileCom'>
				<div className='container'>
					<div className='profileCom'>
						<h4>ЗАПОЛНИТЕ ПУСТЫЕ ПОЛЯ ЧТОБЫ СОЗДАТЬ СВОЙ ПРОФИЛЬ</h4>
						<div className='profileComBlock'>
							<div className='profileComBlockImg'>
								<img src={profilePhoto} alt='Profile' />
								<input
									id='fileInput'
									type='file'
									onChange={handleFileChange}
									style={{ display: 'none' }}
								/>
								<button onClick={handleChoosePhoto}>
									<span>
										<BiImageAdd />
									</span>
								</button>
							</div>
							<input
								type='text'
								value={name}
								onChange={handleNameChange}
								placeholder='ВВЕДИТЕ СВОЕ ИМЯ'
							/>
							<input type='text' placeholder='ВВЕДИТЕ СВОЮ ФАМИЛИЮ' />
							<button>Сохранить</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProfileCom
