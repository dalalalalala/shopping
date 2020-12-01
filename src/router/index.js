import {createRouter, createWebHistory} from 'vue-router'

const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const ShopCart = () => import('@/views/shopCart/ShopCart')
const Detail = () => import('@/views/detail/Detail')

const CategoryList = () => import('@/views/category/CategoryList')


const routes = [
  {path: '', redirect: '/home'},
  {path: '/home', component: Home},
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
  {path: '/category', component: Category},
  {path: '/profile', component: Profile},
  {path: '/shopcart', component: ShopCart},
  {path: '/detail/:iid', component: Detail}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
