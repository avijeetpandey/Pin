import { SafeAreaView, View } from "react-native";
import Title from "../../components/Title";
import { memo } from "react";

function Home() {
  return (
    <View>
      <Title text="Where do" isSubtitle />
      <Title text="you want to go?" />
    </View>
  );
}

export default memo(Home);
