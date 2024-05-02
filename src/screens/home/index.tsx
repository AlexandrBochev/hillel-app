import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native"
import { styles } from './styles'
import { ProductCard } from '../../components/product-card/ProductCard'
import { Product } from '../../models/models'
import { Header } from '../../components/header/Header'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/baseUrl'
import { CustomModal } from '../../components/custom-modal/CustomModal'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from '../../constants/colors'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [favoriteModalVisible, setfavoriteModalVisible] = useState(false)
  const [filterModalVisible, setFilterModalVisible] = useState(false)
  const [isNew, setIsNew] = useState(false)
  const [filterActive, setFilterActive] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(BASE_URL)
        const data = await response.json()
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getProducts()
  }, [])

  const hantleFilter = (isChecked: boolean) => {
    setIsNew(isChecked)
    setFilterModalVisible(false)
    setFilterActive(isChecked ? 1 : 0)
  }

  const searchProducts = (search === '' ? products : products.filter(product => product.title.toLowerCase().includes(search.toLowerCase())))

  const filtredProducts = isNew ? searchProducts.filter(product => product.isNew) : searchProducts

  return (
    <SafeAreaView style={ styles.safeArea }>
      { loading && <ActivityIndicator size="large" style={ styles.loading } /> }

      <FlatList
        data={ filtredProducts }
        renderItem={ ({ item }) => <ProductCard product={ item } /> }
        keyExtractor={ (item) => item.id.toString() }
        ListHeaderComponent={
          <Header setfavoriteModalVisible={ setfavoriteModalVisible }
          setFilterModalVisible={ setFilterModalVisible }
          setSearch={ setSearch }
          filterActive={ filterActive }
        /> }
      />

      <CustomModal title='My Favorite Cinnabons' modalVisible={ favoriteModalVisible } setModalVisible={ setfavoriteModalVisible }>
        <Text>Comming soon...</Text>
      </CustomModal>

      <CustomModal title='Filter' modalVisible={ filterModalVisible } setModalVisible={ setFilterModalVisible }>
        <BouncyCheckbox
          size={24}
          fillColor={ colors.green }
          text="Show New Cinnabons"
          innerIconStyle={{ borderWidth: 4 }}
          textStyle={{ textDecorationLine: "none"}}
          isChecked={ isNew }
          onPress={ (isChecked) => hantleFilter(isChecked) }
        />
      </CustomModal>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export { Home }