import { View, StyleSheet, Alert } from "react-native";
import { theme } from "@/theme";
import { Filters } from "@/components/Filters";

import { POSTS } from "@/utils/posts";
import { FILTERS } from "@/utils/filters";
import { useState } from "react";
import Posts from "@/components/Posts";

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS}
        filter={filter}
        onChange={(item) => setFilter(item)}
      />
      <Posts posts={POSTS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 52,
    backgroundColor: theme.colors.black,
  },
  text: {
    fontSize: 22,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.white,
  },
});
