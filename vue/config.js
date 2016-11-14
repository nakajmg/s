function bg(params) {
  params = params || {}
  return Object.assign({}, {
    layout: 'title',
    backfaceSize: 'contain',
    backfaceFilter: 'blur(0px) opacity(.1)'
  }, params)
}

module.exports = {
  defaults: {
    attributes: {
      layout: 'bullets'
    }
  },
  pages: [
    {
      name: 'important',
      attributes: {
        layout: 'bullets',
        invert: true,
      }
    },
    {
      name: 'top',
      attributes: bg({
        backface: './img/vue.png',
        backfaceFilter: 'blur(2px) opacity(.1)'
      })
    },
    {
      name: 'cover-vue',
      attributes: bg({
        layout: 'bullets',
        backface: './img/logo.png',
        backfaceFilter: 'blur(1px) opacity(.1)'
      })
    },
    {
      name: 'cover-progressive',
      attributes: bg({
        invert: true,
        layout: 'cover',
        backface: './img/progressive.png',
        backfaceFilter: 'blur(0px) opacity(1)'
      })
    },
    {
      name: 'code',
      attributes: {
        layout: 'code'
      }
    },
    {
      name: 'houyouryoku',
      attributes: bg({
        backface: './img/yurusu_houyouryoku.png'
      })
    },
    {
      name: 'iitokoro',
      attributes: bg({
        backface: './img/pose_english_amazing_man.png'
      })
    },
    {
      name: 'seityou',
      attributes: bg({
        backface: './img/kaeru4_shippo.png',
        invert: true,
      })
    },
    {
      name: 'youkyuu',
      attributes: bg({
        backface: './img/hanashiai_business_man.png'
      })
    },
    {
      name: 'tsurami',
      attributes: bg({
        backface: './img/kibunwarui_man.png'
      })
    },
    {
      name: 'hatena',
      attributes: bg({
        backface: './img/mark_question.png'
      })
    },
    {
      name: 'annsin',
      attributes: bg({
        backface: './img/pose_anshin_man.png'
      })
    },
    {
      name: 'tool',
      attributes: bg({
        backface: './img/kougu_bako.png',
        layout: 'title'
      })
    },
    {
      name: 'juunan',
      attributes: bg({
        invert: true,
        backface: './img/taiiku_bridge.png',
        layout: 'title'
      })
    },
    {
      name: 'kaidan',
      attributes: bg({
        backface: './img/tatemono_kaidan.png',
        backfaceFilter: 'opacity(.2)',
        layout: 'title',
        invert: true,
      })
    },
    {
      name: 'guide',
      attributes: bg({
        backface: './img/setsumeisyo_man.png',
        layout: 'bullets'
      })
    },
    {
      name: 'guide-invert',
      attributes: bg({
        backface: './img/setsumeisyo_man.png',
        layout: 'bullets',
        invert: true,
      })
    },
    {
      name: 'wakaba',
      attributes: bg({
        backface: './img/mark_syoshinsya.png',
        // backfaceSize: 'cover',
        layout: 'bullets',
      })
    },
  ]
}
