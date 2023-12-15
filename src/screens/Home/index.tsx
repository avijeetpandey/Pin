import { View } from "react-native";
import Title from "../../components/Title";
import styles from "./style";
import { memo } from "react";

function Home() {
  return (
    <View style={styles.container}>
      <Title text="Where do" isSubtitle />
      <Title text="you want to go?" />
    </View>
  );
}

export default memo(Home);
