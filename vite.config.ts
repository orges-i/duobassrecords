import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tsconfigPaths()
  ],
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
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        manualChunks: undefined,
      }
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Use tsconfig paths for all aliases
    }
  },
});