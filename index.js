const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require('tailwindcss/plugin');

const bgSvg = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'bg-lines-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none"><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-lines-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none"><path d="M0,0 l4,4
             M-1,3 l2,2
             M3,-1 l2,2" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-lines-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M-1,1 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-lines-4': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M0,0 l8,8
             M-1,7 l4,4
             M7,-1 l4,4" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-lines-5': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M-1,1 l2,-2 M0,6 l6,-6 M5,7 l2,-2" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-lines-6': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M7,1 l-2,-2 M0,0 l6,6 M1,7 l-2,-2" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M0,0 l6,6 M6,0 l-6,6" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M0,0 l8,8
             M8,0 l-8,8" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path d="M0,0 l12,12 M12,0 l-12,12" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-4': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none"><path d="M2,0 l0,4 M0,2 l4,0" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-5': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M3,0 l0,6 M0,3 l6,0" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-6': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M4,0 l0,8 M0,4 l8,0" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-mesh-7': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path d="M6,0 l0,12 M0,6 l12,0" stroke="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M-1,5 l2,2 M5,7 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 3,3 6,0" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M-1,7 l2,2 M7,9 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 4,4 8,0" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path d="M-1,11 l2,2 M11,13 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 6,6 12,0" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-c-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><circle cx="4" cy="4" r="2" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-c-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><circle cx="6" cy="6" r="3" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-c-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><circle cx="8" cy="8" r="4" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-o-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><circle cx="0" cy="6" r="2" stroke="${value}" fill="none" /><circle cx="12" cy="6" r="2" stroke="${value}" fill="none" /><circle cx="6" cy="0" r="2" stroke="${value}" fill="none" /><circle cx="6" cy="12" r="2" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-o-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><circle cx="0" cy="8" r="3" stroke="${value}" fill="none" /><circle cx="16" cy="8" r="3" stroke="${value}" fill="none" /><circle cx="8" cy="0" r="3" stroke="${value}" fill="none" /><circle cx="8" cy="16" r="3" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-circles-o-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><circle cx="0" cy="12" r="4" stroke="${value}" fill="none" /><circle cx="24" cy="12" r="4" stroke="${value}" fill="none" /><circle cx="12" cy="0" r="4" stroke="${value}" fill="none" /><circle cx="12" cy="24" r="4" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-c-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none"><rect width="2" height="2" x="0" y="0" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-c-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><rect width="2" height="2" x="0" y="0" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-c-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><rect width="2" height="2" x="0" y="0" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-c-4': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><rect width="2" height="2" x="0" y="0" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-o-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M2,2 l2,0 l0,2 l-2,0 l0,-2 M0,0 l1,0 l0,1 l-1,0 l0,-1 M5,0 l1,0 l0,1 l-1,0 l0,-1 M0,5 l1,0 l0,1 l-1,0 l0,-1 M5,5 l1,0 l0,1 l-1,0 l0,-1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-o-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M3,3 l2,0 l0,2 l-2,0 l0,-2 M0,0 l1,0 l0,1 l-1,0 l0,-1 M7,0 l1,0 l0,1 l-1,0 l0,-1 M0,7 l1,0 l0,1 l-1,0 l0,-1 M7,7 l1,0 l0,1 l-1,0 l0,-1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-o-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path d="M5,5 l2,0 l0,2 l-2,0 l0,-2 M0,0 l1,0 l0,1 l-1,0 l0,-1 M11,0 l1,0 l0,1 l-1,0 l0,-1 M0,11 l1,0 l0,1 l-1,0 l0,-1 M11,11 l1,0 l0,1 l-1,0 l0,-1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-points-o-4': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path d="M7,7 l2,0 l0,2 l-2,0 l0,-2 M0,0 l1,0 l0,1 l-1,0 l0,-1 M15,0 l1,0 l0,1 l-1,0 l0,-1 M0,15 l1,0 l0,1 l-1,0 l0,-1 M15,15 l1,0 l0,1 l-1,0 l0,-1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="none"><circle cx="2" cy="2" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><circle cx="3" cy="3" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><circle cx="4" cy="4" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-4': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><circle cx="6" cy="6" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-5': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><circle cx="0" cy="0" r="1" fill="${value}" /><circle cx="0" cy="6" r="1" fill="${value}" /><circle cx="6" cy="6" r="1" fill="${value}" /><circle cx="6" cy="0" r="1" fill="${value}" /><circle cx="3" cy="3" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-6': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><circle cx="0" cy="0" r="1" fill="${value}" /><circle cx="0" cy="8" r="1" fill="${value}" /><circle cx="8" cy="8" r="1" fill="${value}" /><circle cx="8" cy="0" r="1" fill="${value}" /><circle cx="4" cy="4" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-7': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><circle cx="0" cy="0" r="1" fill="${value}" /><circle cx="0" cy="12" r="1" fill="${value}" /><circle cx="12" cy="12" r="1" fill="${value}" /><circle cx="12" cy="0" r="1" fill="${value}" /><circle cx="6" cy="6" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-dots-8': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><circle cx="0" cy="0" r="1" fill="${value}" /><circle cx="0" cy="16" r="1" fill="${value}" /><circle cx="16" cy="16" r="1" fill="${value}" /><circle cx="16" cy="0" r="1" fill="${value}" /><circle cx="8" cy="8" r="1" fill="${value}" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-v-1': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><path d="M5,-1 l2,2 M5,7 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 3,3 0,6" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-v-2': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none"><path d="M7,-1 l2,2 M7,9 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 4,4 0,8" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )

    matchUtilities(
      {
        'bg-waves-v-3': (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none"><path d="M11,-1 l2,2 M11,13 l2,-2" stroke="${value}" fill="none" /><polyline points="0,0 6,6 0,12" stroke="${value}" fill="none" /></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    )
  }
);

module.exports = bgSvg;