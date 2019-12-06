import { Home, Category, Mine, Search, Login, Opera, Register, Admin } from '../pages'
import Subject from 'components/subject'
import Details from 'components/details'
import SearchCO from "pages/search/val.js"
import Modify from "pages/admin/modify"
import Cipher from "pages/admin/cipher"
import City from "components/city"
export const TabBarRoute = [
    {
        path: "/home",
        component: Home,
        meta: {
            flag: true
        },
        text: '首页',
        icon: "#iconzhuye",
    },
    {
        path: "/category",
        component: Category,
        meta: {
            flag: true
        },
        text: '分类',
        icon: "#iconleimupinleifenleileibie",
    },
    {
        path: "/search",
        component: Search,
        meta: {
            flag: true
        },
        text: '搜索',
        icon: "#iconsousuo",
    },
    {
        path: "/mine",
        component: Mine,
        meta: {
            flag: true,
            requiredAuth: true,
        },

        text: '我的',
        icon: "#iconweibiaoti-",
    },
]

export const NoTabBarRoute = [
    {
        path: "/login",
        component: Login,
        meta: {
        },
    },
    {
        path: "/admin",
        component: Admin,
        meta: {
        },
    },
    {
        path: "/register",
        component: Register,
        meta: {
        },
    },
    {
        path: "/modify",
        component: Modify,
        meta: {
        },
    },
    {
        path: "/cipher",
        component: Cipher,
        meta: {
        },
    },
    {
        path: "/s/:con",
        component: SearchCO,
        meta: {
            flag: true,
            requiredAuth: true,
        },
        text: '我的',
    },
    {
        path: "/opera",
        component: Opera,
        meta: {
            flag: true
        },
        text: '永乐说',
    },
    {
        path: "/subject",
        component: Subject,
        meta: {
            flag: true
        },
        text: '活动专区',
    },
    {
        path: "/details",
        component: Details,
        meta: {
            flag: false
        },
        text: '详情',
    },
    {
        path: "/city",
        component: City,
        meta: {
            flag: false
        },
        text: '详情',
    },
]

export const configRoute = TabBarRoute.concat(NoTabBarRoute);
