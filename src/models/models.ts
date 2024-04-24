export interface Product {
  id: number
  title: string
  description: string
  price: number
  discount?: number
  isNew: boolean
  image: string
}