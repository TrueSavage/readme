const prompt = require('inquirer').createPromptModule()
const axios = require('axios')
const fs = require('fs')

const readme = readme => {
  const html = `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Read Me</title>
</head>
<body>
  ${readme.map(readme => `
    <div>
    <h1>ReadMe: ${readme.text}</h1>
    
    
  </div>
  `).join('')}
</body>
</html>
  `
  fs.writeFile('index.html', html, e => e ? console.log(e) : null)
}
const inquirer = require('inquirer')

inquirer.prompt({
  type: 'input',
  name: 'text',
  message: ('read'
})
  .then(response => {
    console.log(response)
  })