import { Image, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { ProductCardProps } from "../../models/models"
import { styles } from "./styles"
import { useState } from "react"
import { colors } from "../../constants/colors"
import { CustomPressable } from "../custom-pressable/CustomPressable"

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, description, price, discount, isNew, image } = product
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
      
      <View style={ styles.btn }>
        <CustomPressable onPress={() => console.log({'id': id, 'currentPrice': currentPrice})}>
          <View style={ styles.buy }>
            <Text style={ styles.buyText }>Buy</Text>
            <FontAwesome5 name="shopping-basket" size={16} color={ colors.blue } />
          </View>
        </CustomPressable>
      </View>

      <View style={ styles.heart }>
        <CustomPressable onPress={() => setIsFavorite(prev => !prev)}>
          <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={ colors.red } />
        </CustomPressable>
      </View>
    </View>
  );
}

export { ProductCard }