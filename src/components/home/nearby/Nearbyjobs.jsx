import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { SIZES, COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setLoading(true); // Start loading
      // Simulating a network request
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with real data fetching logic
      setLoading(false); // Stop loading after data is fetched
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerBtn}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          // Show loading indicator when loading is true
          <ActivityIndicator size="large" color={COLORS.tertiary} />
        ) : (
          // Render job cards or other content here when loading is false

          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={({ item }) => {
              return <PopularJobCard item={item} />;
            }}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
