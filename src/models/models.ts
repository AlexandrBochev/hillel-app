export interface Product {
  id: number
  title: string
  description: string
  price: number
  discount?: number
  isNew: boolean
  image: string
}

export interface ProductCardProps {
  product: Product
}

export interface HeaderProps {
  setfavoriteModalVisible: (value: boolean) => void
  setFilterModalVisible: (value: boolean) => void
  setSearch: (value: string) => void
  filterActive: number
}

export interface CustomPressableProps {
  children?: React.ReactNode
  onPress: () => void
}

export interface CustomModalProps {
  title: string
  children?: React.ReactNode
  modalVisible: boolean
  setModalVisible: (modalVisible: boolean) => void
}