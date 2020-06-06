const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const srcFolder = 'src'
  const imageFolder = "images"

  if (!fs.existsSync(imageFolder)) {
    reporter.info(`creating the ${srcFolder} & ${srcFolder}/${imageFolder} directory`)
    fs.mkdirSync(srcFolder)
    fs.mkdirSync(`${srcFolder}/${imageFolder}`)
  }
}