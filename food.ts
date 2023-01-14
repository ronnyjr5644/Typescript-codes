class deliverydetails{
    city:string
    area:string
    doorno?:string
}

class foodorder extends deliverydetails{
    orderid:string
    type:string
    foodlist:string[]
    restaurentlist:string[]
    deliveryreq:boolean
    deliverydetails?:deliverydetails
    contactno:string

    constructor(){
        super()
        this.foodlist=[]
        this.restaurentlist=[]
    }
}


