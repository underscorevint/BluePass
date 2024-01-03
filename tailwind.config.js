/** @type {import('tailwind').Config} */
module.exports = {

  content: {
    relative: true,
    files: ["./build/*.{html,js}", ],
    transform: (content) => content.replace(/taos:/g, ''),
    },

    safelist: [
      '!duration-[0ms]',
      '!delay-[0ms]',
      'html.js :where([class*="taos:"]:not(.taos-init))'
    ],

 // plugins: [ require('taos/plugin.js') ],

  darkMode: 'class',
  


  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'primary': '#2659D9',
      'primary-40': '#1E47AE',
      'primary-70': '#6692FF',
      'primary-60': '#517AE1',
      'mono-primary': '#0E204D',
      'mono-secondary': '#FBFBF9',
      'pale': '#F6F5F0',      
      'pale-70': '#C6C09F',
      'pale-90': '#ECEADF',
      'secondary': '#E54D4D',      
      'link': '#0000EE',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },

    fontFamily: {
      "Alexandria": ['Alexandria', 'sans-serif'],
      sans: ['Alexandria', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3.875rem',
      '5xl': '3.052rem',
    },

    extend: {

      lineHeight: {
        'normal': '150%',
        'tight': '110%',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
        'block': '50rem',
      },

      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  
  plugins: [],
}

