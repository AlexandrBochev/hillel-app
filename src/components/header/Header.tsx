import { Image, Text, View } from 'react-native'
import { styles } from './styles'

console.log('Header.tsx')
const Header = () => {
  return (
    <View style={ styles.header }>
      <Image source={require('../../../assets/logo.png')} alt='Logo' style={ styles.logo } />
      <Text style={styles.title}>The best cinnamon rolls in the world!</Text>
    </View>
  )
}

export { Header }