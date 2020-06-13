const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const srcFolder = 'src'
  const imageFolder = "images"

  if (!fs.existsSync(srcFolder)) {
    reporter.info(`creating the ${srcFolder} directory`)
    fs.mkdirSync(srcFolder)
  }
  
  if (!fs.existsSync(`${srcFolder}/${imageFolder}`)) {
    reporter.info(`creating the ${srcFolder}/${imageFolder} directory`)
    fs.mkdirSync(`${srcFolder}/${imageFolder}`)
  }
}