/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // file index.html
    "./src/**/*.{js,jsx,ts,tsx}",  // Semua file di dalam folder src yang memiliki ekstensi js, jsx, ts, tsx
  ],
  theme: {
    extend: {},  // Kamu bisa menambahkan modifikasi tema di sini jika perlu
  },
  plugins: [],
}
