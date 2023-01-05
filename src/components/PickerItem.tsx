import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AppText from './AppText';

interface IProps {
  label: string;
  onPress: () => void;
}

const PickerItem = ({label, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})