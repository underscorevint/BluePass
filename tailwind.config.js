/** @type {import('tailwind').Config} */
module.exports = {
  content: ["./build/*.{html,js}", ],
  
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'primary': '#2659D9',
      'mono-primary': '#E204D',
      'mono-secondary': '#FBFBF9',
      'purple': '#7e5bef',
      'pink': '#ff49db',
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
      '3xl': '1.953rem',
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

