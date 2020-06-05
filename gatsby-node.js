const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "src/images"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}