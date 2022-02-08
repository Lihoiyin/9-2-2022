const express = require('express')
const morgan = require('morgan')
const compileSass = require('express-compile-sass')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000


app.set('views', './views') // Folder to our views
app.set('view engine', 'ejs') // Engine to render our views

app.use(expressLayouts)
app.use(morgan('dev'))
app.use(require('./routes'))
app.use(compileSass({
  root: `${process.cwd()}/public`,
  sourceMap: true, // Includes Base64 encoded source maps in output css
  sourceComments: true, // Includes source comments in output css
  watchFiles: true, // Watches sass files and updates mtime on main files for each change
  logToConsole: false // If true, will log to console.error on errors
}))
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
