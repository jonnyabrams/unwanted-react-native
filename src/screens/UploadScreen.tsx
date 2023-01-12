import { Modal, StyleSheet, View } from "react-native";
import AppText from "../components/Text";

interface IProps {
  progress: number;
  visible: boolean;
}

const UploadScreen = ({progress = 0, visible = false}: IProps) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{`${progress * 100}%`}</AppText>
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
