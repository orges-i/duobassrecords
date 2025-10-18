import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/DuoBass-Records-Website/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true,
    fs: {
      strict: false
    }
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      external: [
        'next-themes',
        'vaul',
        'sonner',
        'recharts',
        'react-resizable-panels',
        'react-hook-form',
        'react-day-picker',
        'lucide-react',
        'input-otp',
        'embla-carousel-react',
        'cmdk',
        'class-variance-authority'
      ]
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: [
      // Core libraries
      { find: /^@?\$\/(.*)/, replacement: `${path.resolve(__dirname, 'src')}/$1` },
      { find: /^(.*)@[^/]+(\/.*)?$/, replacement: '$1$2' }, // Remove version numbers from imports
      { find: /^@radix-ui\/(.*?)(@[^/]+)?(\/.*)?$/, replacement: '@radix-ui/$1$3' }, // Handle @radix-ui imports
      { find: /^(.*?)(@[^/]+)?\/dist\/(.*)$/, replacement: '$1$3' }, // Handle /dist in paths
      { find: /^(.*?)(@[^/]+)?\/esm\/(.*)$/, replacement: '$1$3' }, // Handle /esm in paths
      { find: /^(.*?)(@[^/]+)?\/lib\/(.*)$/, replacement: '$1$3' }, // Handle /lib in paths
      { find: /^(.*?)(@[^/]+)?\/src\/(.*)$/, replacement: '$1$3' }, // Handle /src in paths
      
      // Specific path aliases
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '~', replacement: path.resolve(__dirname, './node_modules') },
      
      // Image assets
      {
        find: 'figma:asset/aea765e000172c9c240041cf02f9956547e719b2.png',
        replacement: path.resolve(__dirname, './src/assets/aea765e000172c9c240041cf02f9956547e719b2.png')
      },
      {
        find: 'figma:asset/9a30149e90bdc184d3da347acf21ce16da7e47f8.png',
        replacement: path.resolve(__dirname, './src/assets/9a30149e90bdc184d3da347acf21ce16da7e47f8.png')
      },
      {
        find: 'figma:asset/862b0069fc0dea16db0a3c7021578468d46f230a.png',
        replacement: path.resolve(__dirname, './src/assets/862b0069fc0dea16db0a3c7021578468d46f230a.png')
      },
      {
        find: 'figma:asset/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png',
        replacement: path.resolve(__dirname, './src/assets/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png')
      },
      {
        find: 'figma:asset/089ea5095a042117f713291a5eb8665a2c0dee5c.png',
        replacement: path.resolve(__dirname, './src/assets/089ea5095a042117f713291a5eb8665a2c0dee5c.png')
      },
    ],
  },
});