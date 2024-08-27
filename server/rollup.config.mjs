// rollup.config.js
import typescript from "@rollup/plugin-typescript"

export default {
  input: 'src/index.ts',
  externals: ['@prisma/client'],
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    strict: false
  },
  plugins: [typescript()]
}
