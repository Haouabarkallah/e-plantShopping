
import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

export default defineConfig({
  base: "/learning_react", // Replace with your actual repo name!
  plugins: [react()],
})