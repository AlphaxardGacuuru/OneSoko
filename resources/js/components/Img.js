import React from 'react'

const Img = ({ src, width, height, imgClass, style, alt }) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			className={imgClass}
			style={style}
			alt={alt}
			loading="lazy" />
	)
}

export default Img