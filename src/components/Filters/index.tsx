import { FlatList } from "react-native";
import { Filter } from "../Filter";
import { styles } from "./styles";
import { FiltersProps } from "./filters";

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={filter === item}
          onPress={() => onChange(item)}
        />
      )}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
