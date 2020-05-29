const { resolve } = require("path");

const CONFIG_FILE = 'qms.config.json'

module.exports = {
  prompts() {
    return [
      // {
      //   name: 'name',
      //   message: 'What is the name of the new project',
      //   default: this.outFolder,
      //   filter: val => val.toLowerCase()
      // }
    ]
  },
  actions: (generator) => {
    // generator.spinner.start('Generating Nest.js project')

    return [
      {
        type: 'add',
        files: '**'
      },
      // {
      //   type: 'move',
      //   patterns: {
      //     gitignore: '.gitignore'
      //   }
      // }
    ]
  },
  async prepare(context) {
    if (!await this.fs.pathExists(resolve(CONFIG_FILE))) {
      throw this.createError(`Missing ${CONFIG_FILE}`)
    }

    context.$config = JSON.parse(this.fs.readFileSync(resolve(CONFIG_FILE), { encoding: 'utf8' }))
  },
  templateData() {
    return this.$config
  },
  async completed() {
    // console.log(this)
    // this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  }
}
