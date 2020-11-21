import {request} from "./request";

export function getcCategorydata() {
  return request({
    url:'/category/categorydata'
  })
}

export function getcCategorySubcategorydata() {
  return request({
    url:'/category/subcategory'
  })
}

