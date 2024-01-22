//там где получаем сразу результата -> декларативный стиль:
// import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { createElement } from 'react'

//там где есь логика -> там императивный стиль:
export const App = () => {
	const year = new Date().getFullYear()

	return createElement(
		'div',
		{ className: 'App' },

		createElement(
			'header',
			{ className: 'App-header' },

			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),

			createElement('p', null,
				' Edit  ',
				createElement('code', null, 'src/App.js'),
			'  and save to reload.', ),

			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('div', null, year),
		),
	)
}

// const [now, setNow] = useState(new Date())

// useEffect(() => {
// const interval = setInterval(() => setNow(new Date()), 1000)
//
// return () => {
// clearInterval(interval)
// console.log('cleaning ...')
// }
// }, [])

// //все, что функция возвращает -> декларативный стиль:

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>Я изучаю ReactJS</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{year}</p>
// 				<span>Время сейчас: {now.toLocaleTimeString()}</span>
// 			</header>
// 		</div>
// 	)
// }


//---------------***----------------------
//props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.

// JS code: /createElement('тэг', {объкт атрибутов}, )
//функция имеет три парпаметра: название тега, объект атрибутов этого тэга, потом через запятую весь последующий контент этого тэга

//    createElement('i', null, name), это как раз вложеный тег
// если div вложен в div то будет
//    createElement(
//       'div', //тэг
//       { className: 'App' }, //объект атрибутов
//       createElement('h1', null, "hello world"), // это вложенный другой тэг внутри тэга 'div'
//    );
// }
