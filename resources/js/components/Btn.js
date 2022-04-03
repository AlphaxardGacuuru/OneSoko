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

Btn.defaultProps = {
	btnClass: 'onesoko-btn',
}

export default Btn