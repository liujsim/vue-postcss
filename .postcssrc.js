// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": { browsers: ['last 2 versions', 'Android >= 4.4'] },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750,     // (Number) The width of the viewport.
      viewportHeight: 1334,    // (Number) The height of the viewport.
      unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw',     // (String) Expected units.
      selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
      mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
    },
    "postcss-aspect-ratio-mini": {},
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false
    }
    // "saladcss-bem":{
    //   defaultNamespace: undefined,
    //   style: 'bem',
    //   separators: {
    //     'descendent': '__', // 设置 desendent 的分隔符为 __
    //     'modifier': '--'  // 设置 modifier 的分隔符为 --
    //   },
    //   shortcuts: {
    //     'component': 'b', // 在 css 中可以使用 @b 来代替 @component
    //     'modifier': 'm',
    //     'descendent': 'e'
    //   }
    // }
  }
}
