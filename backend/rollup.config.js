import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/server.ts',
  output: {
    dir: 'output',
    format: 'es',
  },
  plugins: [typescript()],
};
