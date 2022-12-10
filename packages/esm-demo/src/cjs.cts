import { readdir } from 'fs-extra'
import fsExtra from 'fs-extra'
const { readdir: readdirCjs } = require('fs-extra')
const fsExtraCjs = require('fs-extra')
;(async () => {
  console.log(await readdir(__dirname))
  console.log(await readdirCjs(__dirname))
  console.log(await fsExtra.readdir(__dirname))
  console.log(await fsExtraCjs.readdir(__dirname))
})()
