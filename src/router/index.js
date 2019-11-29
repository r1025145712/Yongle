import {Home,Classify,Mine,Search,Login} from '../pages'

export const TabBarRoute=[
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        text:'首页',
        icon:"#iconzhuye",
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        text:'分类',
        icon:"#iconleimupinleifenleileibie",
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:true
        },
        text:'搜索',
        icon:"#iconsousuo",
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true,
        },
      
        text:'我的',
        icon:"#iconweibiaoti-",
    }
]

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
        },
    }
]

export const  configRoute = TabBarRoute.concat(NoTabBarRoute);
