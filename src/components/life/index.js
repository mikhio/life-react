import React from 'react'
import './styles.css'

function Life({ dataLine = () => {} }) {
	return (
		<div>
			{ dataLine.map(str => renderString(str)) }
		</div>
	)
}

function renderString(data) {
	return (
		<div className="line">
			<span className='year'> { data.name } </span>  { data.els.map(el => renderElement(el)) }
		</div>
	)
}

function renderElement(data) {
	const cube = data ? 'cubeRed' : 'cubeBlue' 
	return (
		<span className={ cube }>{data}</span>
	)
}

export default Life