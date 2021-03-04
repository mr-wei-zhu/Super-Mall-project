import { ADD_COUNTER, ADD_IN_CART } from './mutation.type'

export default {
    addCart(context, payload) {
    return new Promise((resolve,reject) => {
         //查询之前数组内是否有该商品
         let product = context.state.cartList.find(item => item.iid === payload.iid)

         if (product) {
             context.commit(ADD_COUNTER,product)
             resolve('当前商品数量+1')
         } else {
             payload.count = 1
             context.commit(ADD_IN_CART,payload)
             resolve('添加商品成功')
         }
         // state.cartList.push(payload)
    }) 
    }
}