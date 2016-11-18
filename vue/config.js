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
      name: 'table',
      attributes: {
        layout: ''
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
      name: 'cover-vue-cover',
      attributes: bg({
        layout: 'bullets',
        backface: './img/logo.png',
        backfaceFilter: 'blur(0px) opacity(1)'
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
      name: 'tool-list',
      attributes: bg({
        backface: './img/kougu_bako.png',
        layout: 'bullets'
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
        // invert: true,
      })
    },
    {
      name: 'wakaba-invert',
      attributes: bg({
        backface: './img/mark_syoshinsya.png',
        // backfaceSize: 'cover',
        layout: 'title',
        invert: true,
      })
    },
    {
      name: 'okane',
      attributes: bg({
        backface: './img/money_tokeru_yen.png',
        backfaceFilter: 'opacity(.2)',
        layout: 'title',
        invert: true,
      })
    },
    {
      name: 'hayai',
      attributes: bg({
        backface: './img/ninja_hashiru.png',
        layout: 'title',
        // invert: true,
      })
    },
    {
      name: 'cover-hayai',
      attributes: bg({
        backface: './img/ninja_hashiru.png',
        backfaceSize: 'cover',
        layout: 'table',
        // invert: true,
      })
    },
    {
      name: 'power',
      attributes: bg({
        backface: './img/robot_suit.png',
        layout: 'title',
        backfaceFilter: 'opacity(.3)'
        // invert: true,
      })
    },
    {
      name: 'nihon',
      attributes: bg({
        backface: './img/sensu_hinomaru.png',
        layout: 'title',
      })
    },
    {
      name: 'karui',
      attributes: bg({
        backface: './img/hitsuji_youmougari.png',
        layout: '',
      })
    },
    {
      name: 'super',
      attributes: bg({
        backface: './img/superman_hero.png',
        layout: 'title',
      })
    },
    {
      name: 'vuex',
      attributes: bg({
        backface: './img/vuex.png',
        layout: 'quoted-image',
        backfaceFilter: 'opacity(1)', 
      })
    },
    {
      name: 'bg-vuex',
      attributes: bg({
        backface: './img/vuex.png',
        layout: 'bullets', 
      })
    },
    {
      name: 'bg-vuex-invert',
      attributes: bg({
        backface: './img/vuex.png',
        layout: 'bullets',
        invert: true
      })
    },
    {
      name: 'devtools',
      attributes: bg({
        backface: './img/pet_echo_kensa_cat.png',
        layout: 'bullets', 
      })
    },
    {
      name: 'target',
      attributes: bg({
        backface: './img/job_guide_tour.png',
        layout: 'bullets', 
      })
    },
    {
      name: 'devtools-component',
      attributes: bg({
        backface: './img/devtools_component.png',
        backfaceFilter: 'opacity(1)',
        layout: 'title', 
      })
    },
    {
      name: 'devtools-vuex',
      attributes: bg({
        backface: './img/devtools_vuex.png',
        backfaceFilter: 'opacity(1)',
        layout: 'bullets', 
      })
    },
    {
      name: 'relax',
      attributes: bg({
        backface: './img/relax_girl.png',
        layout: 'bullets',
      })
    },
    {
      name: 'relax-invert',
      attributes: bg({
        backface: './img/relax_girl.png',
        layout: 'bullets',
        // invert: true,
      })
    },
    {
      name: 'end',
      attributes: bg({
        backface: './img/superman_hero.png',
        backfaceFilter: 'opacity(.1)',
        // invert: true,
        layout: 'bullets'
      })
    },
    {
      name: 'end2',
      attributes: bg({
        backface: './img/logo.png',
        backfaceFilter: 'opacity(.1)',
        // backfaceSize: 'cover',
        layout: 'cover',
        invert: true
      })
    },
    {
      name: 'codegrid',
      attributes: bg({
        backface: './img/codegrid.png',
        backfaceFilter: 'opacity(.5)',
        layout: 'title',
        invert: true
      })
    },
    {
      name: 'sponser',
      attributes: bg({
        backface: './img/money_fueru.png',
        layout: 'bullets', 
      })
    },
    {
      name: 'start',
      attributes: bg({
        backface: './img/logo.png',
        layout: 'cover',
        invert: true 
      })
    },
    {
      name: 'progressive_framework',
      attributes: bg({
        backface: './img/progressive_framework.png',
        backfaceFilter: 'opacity(1)',
        layout: 'quoted-image',
      })
    },
    {
      name: 'progressive_framework-bg',
      attributes: bg({
        backface: './img/progressive_framework.png',
        backfaceFilter: 'opacity(.2)',
        layout: 'bullets'
      })
    },
    {
      name: 'hukou',
      attributes: bg({
        backface: './img/tsukareta_business_man.png',
        layout: 'cover',
        invert: true
      })
    },
    {
      name: 'siawase',
      attributes: bg({
        backface: './img/family_happy.png',
        layout: 'title',
      })
    },
    {
      name: 'jikan',
      attributes: bg({
        backface: './img/mezamashidokei.png',
        layout: 'title',
        backfaceFilter: 'opacity(.2)',
        invert: true
      })
    },
    {
      name: 'tukatte',
      attributes: bg({
        backface: './img/starter_man.png',
        layout: 'title',
        invert: true
      })
    },
    {
      name: 'raku',
      attributes: bg({
        backface: './img/syokuji_computer_woman.png',
        layout: 'bullets',
      })
    },
    {
      name: 'cli',
      attributes: bg({
        backface: './img/computer_girl.png',
        layout: 'bullets',
      })
    },
    {
      name: '',
      attributes: bg({
        backface: './img/',
        layout: 'title', 
      })
    },
    
    
  ]
}
