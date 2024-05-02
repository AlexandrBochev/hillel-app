import { Modal, Pressable, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { CustomPressable } from "../custom-pressable/CustomPressable"
import { styles } from './styles'
import { CustomModalProps } from "../../models/models"
import { colors } from "../../constants/colors"

const CustomModal = ({ title, children, modalVisible, setModalVisible }: CustomModalProps) => {
  const hide = () => setModalVisible(!modalVisible)

  return (
    <Modal
      animationType="slide"
      transparent
      visible={ modalVisible }
      onRequestClose={ hide }
    >
      <Pressable style={ styles.pressable } onPress={ hide } />
      <View style={ styles.centeredView }>
        <View style={ styles.close }>
          <CustomPressable onPress={ hide }>
            <AntDesign name="closecircle" size={24} color={ colors.blue } />
          </CustomPressable>
        </View>
        <Text style={ styles.modalTitle }>{ title }</Text>
        { children }
      </View>
    </Modal>
  )
}

export { CustomModal }