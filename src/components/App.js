import React from 'react'
import Life from './life'
import './app.css'

function App() {
	const data = []
	const yearBt = 2006
	const yearNow = yearBt + 65	
	const week = 1000 * 60 * 60 *24 * 7
	const now = new Date()
	const mybt = new Date(2006, 4, 15)

	for (let i = yearBt; i <= yearNow; i++) {
		let line = {
			name: i,
			els: []
		}
		let ny = new Date(i, 0, 1).getTime();

		for (let c = 1; c <= 52; c++) {
			ny = ny + week
			line.els.push(ny <= now.getTime() && ny >= mybt.getTime())
		}

		data.push(line)
	}

	return (<Life dataLine={data} />)
}

export default App