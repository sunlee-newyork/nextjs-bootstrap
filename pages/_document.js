import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default MyDocument