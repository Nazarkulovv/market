import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './Routes/MyRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
		<MyRoutes />
	</BrowserRouter>
)



// const indexes = [4]
// const s = 'codeleet'
// const indices = [4, 5, 6, 7, 0, 1, 2, 3]

// function deCode(str, list, i = 0) {
//  	if (i < list.length) {
// 		indexes[i] = str[list[i]]
// 		deCode(str, list, i + 1)
// 	}
// }

// deCode(s, indices)
// console.log(indexes)
