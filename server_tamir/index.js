console.log('server started')

const express = require('express')
const app = express()
const port = 4000

function myFunc(req, res) {
	res.json({
		name: 'Avi'
	})
}

app.get('/', myFunc)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))