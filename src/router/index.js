import {createRouter, createWebHashHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Popular = () => import('@/views/home/titleBar/Popular')
const New = () => import('@/views/home/titleBar/New')
const CareChose = () => import('@/views/home/titleBar/CareChose')

const CategoryList = () => import('@/views/category/CategoryList')
const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
     redirect: '/home/careChose',
    children: [

      {
        name: "popular",
        path: 'popular',
        component: Popular
      },
      {
        name: 'new',
        path: 'new',
        component: New
      },
      {
        name: 'careChose',
        path: 'careChose',
        component: CareChose
      },
    ]
  },
  {
    path: '/category',
    component: Category,
    redirect: '/category/subcategory',
    children: [
      {
        path:'subcategory',
        component:CategoryList
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopCart',
    component: ShopCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
