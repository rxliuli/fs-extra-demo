import { readdir } from 'fs-extra'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(await readdir(__dirname))
