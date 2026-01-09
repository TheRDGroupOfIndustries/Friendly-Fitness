import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.MP4', '**/*.mp4'], 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 2. Link @ to src
    },
  },
});
