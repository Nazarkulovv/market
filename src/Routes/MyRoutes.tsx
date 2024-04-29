import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPages from '../Pages/MainPages'

const MyRoutes: React.FC = () => {
	const RoutesPublick = [
		{
			path: '/',
			element: <MainPages />,
			key: 1
		}
	]
	return (
		<Routes>
			{RoutesPublick.map(element => (
				<Route
					path={element.path}
					element={element.element}
					key={element.key}
				/>
			))}
		</Routes>
	)
}

export default MyRoutes
