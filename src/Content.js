import React from 'react'
import Part from './Part.js'

const Content = (props) => {
	return (
		<div>
			{props.parts.map((part) => {
			    return(
			        <Part
			          part={part}
			        />
			    )
			})}
		</div>
	)
}

export default Content 