import React from 'react'
import marked from 'marked'

class Markdown extends React.Component {
	render() {
		const { content } = this.props

		if (!content) return <div></div>

		return <div className="markdown" dangerouslySetInnerHTML={{__html: marked(content, {...this.props})}} />
	}
}

export default Markdown