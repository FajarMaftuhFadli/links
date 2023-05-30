/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      base: '#24273a',
      mantle: '#1e2030',
      crust: '#181926',
      text: '#cad3f5',
      blue: '#8aadf4'
    }
  },
  plugins: [],
}
