import babelTester from 'babel-tester'
import plugin from '@emotion/babel-plugin'
import path from 'path'

babelTester('vanilla emotion', path.join(__dirname, 'vanilla-emotion-macro'), {
  plugins: [plugin],
  transform: (src) => src.replace(/\/macro/g, ''),
})
