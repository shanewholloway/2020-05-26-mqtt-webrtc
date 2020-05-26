import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'
import { terser as rpi_terser } from 'rollup-plugin-terser'


const _cfg_ = {
  external: [],
  plugins: [
    rpi_dgnotify(),
    rpi_resolve(),

    rpi_jsy({defines:{}}),
  ]}

const cfg_web_min = { ... _cfg_,
  plugins: [ ... _cfg_.plugins, rpi_terser() ]}


export default [
  { ..._cfg_, input: `code/index.jsy`,
    output: { file: `esm/index.mjs`, format: 'es', sourcemap: true }},

  //{ ...cfg_web_min, input: `code/index.jsy`,
  //  output: { file: `esm/index.min.mjs`, format: 'es' }},
]
