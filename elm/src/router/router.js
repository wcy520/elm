import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        {
            path: '/city/:cityid',
            component: city
        },
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        {
            path: '/food',
            component: food
        },
        {
            path: '/search/:geohash',
            component: search
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //食品详情页
                component: foodDetail,
            }, {
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
            }]
        },
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
        {
            path: '/find',
            component: find
        },
        {
            path: '/download',
            component: download
        },
           //确认订单页
           {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
                path: 'remark', //订单备注
                component: remark,
            }, {
                path: 'invoice', //发票抬头
                component: invoice,
            }, {
                path: 'payment', //付款页面
                component: payment,
            }, {
                path: 'userValidation', //用户验证
                component: userValidation,
            }, {
                path: 'chooseAddress', //选择地址
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //添加地址
                    component: addAddress,
                    children: [{
                        path: 'searchAddress', //搜索地址
                        component: searchAddress,
                    }]
                }, ]
            }, ]
        },
    ]
}]
