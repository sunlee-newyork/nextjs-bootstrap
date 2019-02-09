const ErrorMessage = props => {
	const text = (!!props.error && !!props.error.message) ? props.error.message : 'Something went wrong.'

	return <Text>{text}</Text>
}

export default ErrorMessage