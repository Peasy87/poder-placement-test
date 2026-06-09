import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // base64 images push the bundle over Vite's default 500kb warning threshold
    // — that's fine for this single-page app, raise the warning limit
    chunkSizeWarningLimit: 1500,
  },
});
