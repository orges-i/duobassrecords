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
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
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
      // Image assets
      'figma:asset/aea765e000172c9c240041cf02f9956547e719b2.png': path.resolve(__dirname, './src/assets/aea765e000172c9c240041cf02f9956547e719b2.png'),
      'figma:asset/9a30149e90bdc184d3da347acf21ce16da7e47f8.png': path.resolve(__dirname, './src/assets/9a30149e90bdc184d3da347acf21ce16da7e47f8.png'),
      'figma:asset/862b0069fc0dea16db0a3c7021578468d46f230a.png': path.resolve(__dirname, './src/assets/862b0069fc0dea16db0a3c7021578468d46f230a.png'),
      'figma:asset/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png': path.resolve(__dirname, './src/assets/70b011ab5daef8d07bbe86fd809e477b8cd2ed65.png'),
      'figma:asset/089ea5095a042117f713291a5eb8665a2c0dee5c.png': path.resolve(__dirname, './src/assets/089ea5095a042117f713291a5eb8665a2c0dee5c.png'),
      // Radix UI components
      ...Object.fromEntries(
        [
          'tooltip', 'toggle', 'toggle-group', 'tabs', 'switch', 'slot', 'slider',
          'separator', 'select', 'scroll-area', 'radio-group', 'progress', 'popover',
          'navigation-menu', 'menubar', 'label', 'hover-card', 'dropdown-menu',
          'dialog', 'context-menu', 'collapsible', 'checkbox', 'avatar', 'aspect-ratio',
          'alert-dialog', 'accordion'
        ].map(name => [
          `@radix-ui/react-${name}`,
          `@radix-ui/react-${name}`
        ])
      ),
      // Source directory alias
      '@': path.resolve(__dirname, './src'),
    },
  },
});
