import { View } from "react-native";
import Title from "../../components/Title";
import styles from "./style";
import { memo } from "react";
import { Heading } from "../../components/Heading";
import { CONSTANTS } from "../../utils/constants";

function Home() {
  return (
    <View style={styles.container}>
      <Title text={CONSTANTS.mainTitle.subtitle} isSubtitle />
      <Title text={CONSTANTS.mainTitle.title} />

      <Heading text={CONSTANTS.heading} />
    </View>
  );
}

export default memo(Home);
