import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { SIZES, COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerBtn}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.tertiary} />
        ) : error ? (
          <Text>Something Went Wrong. Please try again later.</Text>
        ) : data && data.length > 0 ? (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        ) : (
          <Text>No jobs found for your criteria.</Text>
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
