import { createRoot } from 'react-dom/client'

export const Box = ({
	className = '',
	style = {},
	...props
}: React.ComponentProps<'div'>) => {
	return (
		<div
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...props}
		/>
	)
}

const smallBox = (
	<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
		small lightblue box
	</Box>
)
const mediumBox = (
	<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
		medium pink box
	</Box>
)
const largeBox = (
	<Box className="box--large" style={{ backgroundColor: 'orange' }}>
		large orange box
	</Box>
)
const sizelessColorlessBox = <Box>sizeless colorless box</Box>

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
