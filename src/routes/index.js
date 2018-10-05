export default {
  path: '/',

  component: require('COMPONENT/App').default,
  
  indexRoute: {
    component: require('COMPONENT/Welcome').default
  },
  
  childRoutes: [
    require('./msg').default,
    require('./todo').default,

    { path: 'redirect', component: require('COMPONENT/Redirect').default },
    
    { path: '*', component: require('COMPONENT/404').default }
  ]
}

/*
  当前路由树如下
  ├ /
  |
  ├ /msg
  ├ /msg/add
  ├ /msg/detail/:msgId
  ├ /msg/modify/:msgId
  |
  ├ /todo
  |
  ├ /redirect
*/
