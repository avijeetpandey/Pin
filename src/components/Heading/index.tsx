import { Text } from "react-native";
import { HeadingProps } from "./heading.types";
import styles from "./style";

export function Heading({ text }: HeadingProps) {
  return <Text style={styles.heading}>{text}</Text>;
}
