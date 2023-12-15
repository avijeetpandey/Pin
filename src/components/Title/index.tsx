import { Text } from "react-native";
import { TitleProps } from "./title.types";
import styles from "./styles";

/**
 * Title component , that can be used as a subtitle component as well
 */
export default function Title({ text, isSubtitle = false }: TitleProps) {
  if (isSubtitle) {
    return <Text style={[styles.title, styles.subtitle]}>{text}</Text>;
  }
  return <Text style={styles.title}>{text}</Text>;
}
