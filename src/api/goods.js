import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'

export const GetGoods = async (page,pageSize)=>{
  let url='/hello/v1/admin/food/getFoods' 
  let result = await axios.post(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

export const DelGood = async (foodId)=>{
  let url='/hello/v1/admin/food/delFood' 
  let result = await axios.post(url,{foodId})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

export const AddGood = async ({name,price,img,foodType,desc})=>{
  let url='/hello/v1/admin/food/addFood' 

  let result = await axios.post(url,{name,price,img,foodType,desc})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

//修改数据 
export const UpdateGood = async ({_id,name,price,img,foodType,desc})=>{
  let url='/hello/v1/admin/food/updateFood' 
  let foodId=_id
  let result = await axios.post(url,{foodId,name,price,img,foodType,desc})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}