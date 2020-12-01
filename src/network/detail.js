import {request} from "./request";

// export function getHomeMultidata() {
//   return request({
//     url:'/home/multidata'
//   })
// }

export function getDetailMessage(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
