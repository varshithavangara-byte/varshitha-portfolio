import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use base: '/<repo-name>/' only if you deploy to GitHub Pages under a sub-path.
export default defineConfig({ plugins: [react()], base: '/' })
