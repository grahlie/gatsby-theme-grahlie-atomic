const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "./src/images"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
    //fs.copyFile('./src/images/logotype.png', `${contentPath}/logotype.png`)
    //fs.copyFile('./src/images/favicon.png', `${contentPath}/favicon.png`)
  }
}