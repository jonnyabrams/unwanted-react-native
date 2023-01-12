import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import AnimatedLottieView from "lottie-react-native";

import colors from "../constants/colors";

interface IProps {
  progress: number;
  visible: boolean;
  onDone: () => void;
}

const UploadScreen = ({ onDone, progress = 0, visible = false }: IProps) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
