export interface Product {
  id: number
  brandName: string
  productName: string
  price: number
  image: string
  isInCart?: boolean
}

export interface CartItem extends Product {
  quantity: number
}
