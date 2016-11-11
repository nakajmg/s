module.exports = {
  defaults: {
    attributes: {
      layout: 'bullets'
    }
  },
  pages: [
    {
      name: 'top',
      attributes: {
        layout: 'title',
        backface: './img/vue.png',
        backfaceFilter: 'blur(2px) opacity(.1)'
      },
      note: ''
    },
    {
      name: 'cover-vue',
      attributes: {
        layout: 'cover',
        // invert: true,
        backface: './img/progressive.png',
        backfaceFilter: 'blur(0px) opacity(1)'
      }
    },
    {
      name: 'cover-progressive',
      attributes: {
        layout: 'cover',
        // invert: true,
        backface: './img/progressive.png',
        backfaceFilter: 'blur(0px) opacity(1)'
      }
    },
    {
      name: 'code',
      attributes: {
        layout: 'code',
      }
    }
  ]
}
