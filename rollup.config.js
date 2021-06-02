'use strict';

import firebase from './node_modules/firebase/package.json'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

export default [{
  input: 'src/index.ts',
  output: {
    dir: 'demo',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    replace({
      'FIREBASE_SDK_VERSION': firebase.version,
    }),
    resolve({
      dedupe: [
        'lit-element',
        'lit-html',
      ]
    }),
    typescript({ typescript: require('typescript') }),
  ]
}]
