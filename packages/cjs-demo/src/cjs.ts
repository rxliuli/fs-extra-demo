import { readdir } from 'fs-extra'
;(async () => {
  console.log(await readdir(__dirname))
})()
