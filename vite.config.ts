import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/duobassrecords/' : '/',
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
        'react',
        'react-dom',
        '@radix-ui/react-slot',
        ...Object.keys(require('./package.json').dependencies || {}),
        'sonner',
        'recharts',
        'react-resizable-panels',
        'react-hook-form',
        'react-day-picker',
        'lucide-react',
        'input-otp',
        'embla-carousel-react',
        'cmdk',
        'class-variance-authority',
        'vaul'
      ]
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Core libraries
      'vaul': 'vaul',
      'sonner': 'sonner',
      'recharts': 'recharts',
      'react-resizable-panels': 'react-resizable-panels',
      'react-hook-form': 'react-hook-form',
      'react-day-picker': 'react-day-picker',
      'next-themes': 'next-themes',
      'lucide-react': 'lucide-react',
      'input-otp': 'input-otp',
      'embla-carousel-react': 'embla-carousel-react',
      'cmdk': 'cmdk',
      'class-variance-authority': 'class-variance-authority',
      
      // Radix UI components
      ...Object.fromEntries(
        [
          'accordion', 'alert-dialog', 'aspect-ratio', 'avatar', 'checkbox', 'collapsible',
          'context-menu', 'dialog', 'dropdown-menu', 'hover-card', 'label', 'menubar',
          'navigation-menu', 'popover', 'progress', 'radio-group', 'scroll-area',
          'select', 'separator', 'slider', 'slot', 'switch', 'tabs', 'toggle',
          'toggle-group', 'tooltip'
        ].map(name => [
          `@radix-ui/react-${name}`,
          `@radix-ui/react-${name}`
        ])
      ),
      
      // Image assets
      'figma:asset/aea765e000172c9c240041cf02f9956547e719b2.png': path.resolve(__dirname, './src/assets/aea765e000172c9c240041cf02f9956547e719b2.png'),
      'figma:asset/9a30149e90bdc184d3da347acf21ce16da7e47f8.png': path.resolve(__dirname, './src/assets/9a30149e90bdc184d3da347acf21ce16da7e47f8.png'),
      'figma:asset/862b0069fc0dea16db0a3c7021578468d46f230a.png': path.resolve(__dirname, './src/assets/862b0069fc0dea16db0a3c7021578468d46f230a.png'),
      'figma:asset/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png': path.resolve(__dirname, './src/assets/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png'),
      'figma:asset/089ea5095a042117f713291a5eb8665a2c0dee5c.png': path.resolve(__dirname, './src/assets/089ea5095a042117f713291a5eb8665a2c0dee5c.png'),
      
      // Source directory alias
      '@': path.resolve(__dirname, './src'),
    },
  },
});