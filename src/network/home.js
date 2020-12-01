import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

// export function getHomeHomedata() {
//   return request({
//     url:'/home/homedata'
//   })
// }

export function getHomeGoods(type,page) {
  return request({
    url:'/home/homedata',
    params:{
      type,page
    }
  })
}


export function getHomeTabdata() {
  return request({
    url:'/home/tabdata'
  })
}

