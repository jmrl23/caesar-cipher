/**
 * run `npm run start:dev` or `yarn run start:dev`
 */

import { caesarCipher } from '.'
import { join } from 'path'
import { writeFileSync } from 'fs'

/* Creating an object called payload. */
const payload = {
  keys: [3, 5, 10],
  words: [
    'HEADING',
    'EVOLUTION',
    'INTERNATIONAL',
    'COMMAND PROMPT',
    'TECHNOLOGICAL',
    'DRAWBACKS',
    'REFERENCES',
    'POWERPOINT PRESENTATION',
    'MICROSOFT',
    'STEVE JOBS'
  ]
}

/* Joining the current directory with the file name output.txt. */
const outputFile = join(__dirname, `output-${Date.now()}.txt`)

/* Creating a variable called output and setting it to an empty string. */
let output = ''

for (let i = 0; i < payload.words.length; i++) {
  const word = payload.words[i]
  output += `${word}\n`
  for (const key of payload.keys) {
    output += `  ${key}${key < 10 ? ' ' : ''} |  ${caesarCipher(word, key)}\n`
  }
  output += '\n'
}

/* Writing the output to the output file. */
writeFileSync(outputFile, output.trim())