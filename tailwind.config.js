/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocre: '#D1451E',
        coral: '#F0633C',
        coralClaro: '#FFDBD1',
        creme: '#FFFAF3',
        verdeEscuro: '#263A29',
        verdeMedio: '#3D6D4A',
        cinza: '#444444',
        cinzaClaro: '#EFEFEF',
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
      },
      fontSize: {
        paragraph: ['18px', { lineHeight: '150%' }],
        paragraphLarge: ['22px', { lineHeight: '150%' }],
        subtitle: ['26px', { lineHeight: '150%' }],
        subtitleLarge: ['31px', { lineHeight: '150%' }],
        headingSmall: ['37px', { lineHeight: '120%' }],
        heading: ['44px', { lineHeight: '120%' }],
        headingLarge: ['53.7px', { lineHeight: '120%' }],
      },
    },
  },
  plugins: [],
}
