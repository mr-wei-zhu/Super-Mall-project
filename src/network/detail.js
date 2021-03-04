import {request} from "./request"

export function getDetail(iid) {
    return request({
        url:'/detail',
        params: {
            iid
        }
    })
}
export function getRecommend(){
	return request({
		url:'/recommend'
	})
}

export class Goods {
    constructor(itemInfo,columns,shopInfo) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = shopInfo.services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
	constructor(shopInfo) {
	    this.shopLogo = shopInfo.shopLogo
		this.name = shopInfo.name
		this.score = shopInfo.score
		this.cSells = shopInfo.cSells
		this.cGoods = shopInfo.cGoods
	}
}

export class GoodsParam {
	constructor(info, rule) {
        this.image = info.image ? info.image[0] : '';
	    this.info = info.set;
		this.rule = rule.tables;
	}
}
