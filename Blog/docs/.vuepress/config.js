module.exports = {
  // 其它配置
  title: 'rys Blog',
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '三剑客', items: [
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/html/css/' },
          { text: 'JavaScript', link: '/html/js/' }
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'vue', link: '/vue/' },
          { text: 'vuex', link: '/vue/vuex/' },
          { text: 'vue-router', link: '/vue/vue-router/' }
        ]
      },
    ],
    sidebar: {
      '/html/': [
        {
          title: '三剑客',
          collapsable: false,
          children: [
            { title: 'HTML', path: '/html/' },
            { title: 'CSS', path: '/html/css' },
            { title: 'JavaScript', path: '/html/js' }
          ]
        },
      ],
      '/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            { title: 'vue', path: '/vue/' },
            { title: 'vuex', path: '/vue/vuex/' },
            { title: 'vue-router', path: '/vue/vue-router/' },
          ]
        }
      ],
      sidebarDepth: 2,
    },
    smoothScroll: true,
    lastUpdated: 'Last Updated',
  }
}