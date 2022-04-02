import React from 'react'

const Btn = ({ style, btnClass, text, onClick }) => {
	return (
		<button
			style={style}
			className={btnClass}
			onClick={onClick}>
			{text}
		</button>
	)
}

export default Btn