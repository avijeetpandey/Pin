import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { CategoriesProps } from "./categories.type";

function Categories({
  categories,
  selectedCategory,
  onCategoryPress,
}: CategoriesProps) {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item.name;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item.name)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? { marginLeft: 32 } : {},
            ]}
          >
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

export default React.memo(Categories);
