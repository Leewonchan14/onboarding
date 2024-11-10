import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    checker({ typescript: { tsconfigPath: "tsconfig.app.json" } }),
  ],
});
