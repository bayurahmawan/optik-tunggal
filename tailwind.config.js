module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{mytheme: {
      "primary": "#1788FE",
      "secondary": "#463AA1",
      "accent": "#C149AD",
      "neutral": "#021431",
      "base-100": "#FFFFFF",
      "info": "#93E6FB",
      "success": "#80CED1",  
      "warning": "#EFD8BD",      
      "error": "#E58B8B",
               },}],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    
    
  },
}
