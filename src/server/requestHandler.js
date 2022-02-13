
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const port = process.env.PORT || 5000
const publicPath = path.join(__dirname, '../..', 'public')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static(publicPath)) //--> Requires production build