const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'bg-grid': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )

  matchUtilities(
    {
      'bg-stripes': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8 " width="8" height="8" fill="none" stroke="${value}"><path d="M-1,1 l4,-4 M0,8 l8,-8 M6,10 l4,-4"/></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )

  matchUtilities(
    {
      'bg-waves': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="18" height="18" fill="none" stroke="${value}"><path d="M11,-1 l2,2 M11,13 l2,-2"/><polyline points="0,0 6,6 0,12" fill="none" stroke="${value}"/></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )

  matchUtilities(
    {
      'bg-mesh': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="${value}"><path d="M0,0 l12,12 M12,0 l-12,12"/></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )

  matchUtilities(
    {
      'bg-points': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="${value}"><rect width="2" height="2" x="0" y="0" fill="${value}"/></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )

  matchUtilities(
    {
      'bg-circles': (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><circle cx="4" cy="4" r="2" stroke="${value}" fill="none" /></svg>`
        )}")`,
      }),
    },
    { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
  )
});