import { Image, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Product } from "../../models/models"
import { styles } from "./styles"
import { useState } from "react"

const ProductCard = (props: Product) => {
  const { id, title, description, price, discount, isNew, image } = props
  const [isFavorite, setIsFavorite] = useState(false)
  const currentPrice = price * (1 - (discount || 0) / 100)

  return (
    <View style={ styles.container }>
      <View>
        <Image source={{ uri: image }} style={styles.img} />
        {isNew &&
          <View style={ styles.newBlock }>
            <Text style={ styles.new }>New</Text>
          </View>
        }
      </View>

      <View>
        <Text style={ styles.title }>{ title }</Text>
        <View style={ styles.price }>
          <Text style={ styles.newPrice }>$ { currentPrice }</Text>
          {discount !== 0 && <Text style={ styles.oldPrice }>$ { price }</Text>}
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={ styles.description }>
          { description }
        </Text>
      </View>

      <TouchableOpacity onPress={() => console.log({'id': id, 'currentPrice': currentPrice})} style={ styles.buy }>
        <Text style={ styles.buyText }>Buy</Text>
        <FontAwesome5 name="shopping-basket" size={16} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsFavorite(prev => !prev)} style={ styles.heart }>
        <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

export { ProductCard }