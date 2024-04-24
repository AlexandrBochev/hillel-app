import { StatusBar } from 'expo-status-bar'
import { Image, SafeAreaView, ScrollView, View } from "react-native"
import { styles } from './styles'
import { ProductCard } from '../../components/product-card/ProductCard'
import { Product } from '../../models/models'
import { Header } from '../../components/header/Header'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/baseUrl'

const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch(BASE_URL)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
      setLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading && <Image source={ require('../../../assets/loader.gif') } alt='Spinner' style={styles.loading} />}
      <ScrollView>
        <Header />
        <View style={styles.scrollView}>
          { products.map((product: Product) => <ProductCard key={ product.id } { ...product } />) }
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export { Home }