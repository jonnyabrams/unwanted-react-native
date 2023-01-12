import { Modal, StyleSheet, View } from "react-native";
import * as Progress from 'react-native-progress';

import colors from "../constants/colors";

interface IProps {
  progress: number;
  visible: boolean;
}

const UploadScreen = ({progress = 0, visible = false}: IProps) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
