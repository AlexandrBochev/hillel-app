import { Image, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'
import { CustomPressable } from '../custom-pressable/CustomPressable'
import { colors } from '../../constants/colors'
import { HeaderProps } from '../../models/models'
import { useState } from 'react'

const Header = ({ setfavoriteModalVisible, setFilterModalVisible, setSearch, filterActive }: HeaderProps) => {
  const [inputVisible, setInputVisible] = useState(false)

  const handleSearch = () => {
    setSearch('')
    setInputVisible(prev => !prev)
  }

  return (
    <View style={ styles.header }>
      <View style={ styles.logoBlock }>
        <Image source={ require('../../../assets/logo.png') } alt='Logo' style={ styles.logo } />
        <Text style={ styles.title }>The best cinnamon rolls in the world!</Text>
      </View>
      <View style={ styles.dashboard }>
        { inputVisible &&
          <TextInput
            autoFocus
            onChange={ (e) => setSearch(e.nativeEvent.text)}
            style={ styles.input }
            placeholder='Search...'
          />}
        <CustomPressable onPress={ () => setfavoriteModalVisible(true) }>
          <AntDesign name='heart' size={24} color={ colors.red } />
        </CustomPressable>
        <CustomPressable onPress={ () => setFilterModalVisible(true) }>
          { filterActive ? <Text style={ styles.filterActive }>{ filterActive }</Text> : null}
          <AntDesign name="filter" size={24} color={ colors.dark } />
        </CustomPressable>
        <CustomPressable onPress={ handleSearch }>
          <AntDesign name="search1" size={24} color={ colors.dark } />
        </CustomPressable>
      </View>
    </View>
  )
}

export { Header }