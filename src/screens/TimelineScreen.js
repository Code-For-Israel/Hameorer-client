import { Text, View, StyleSheet } from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import React, { useEffect } from "react";

export default function TimelineScreen() {

  useEffect(() => {
    try {
      fetch(
        getSiteUrl() + "v1/stories/",
        {
          headers: {
            accept: "application/json",
            "X-CSRFToken":
              "paXGD8R1f0D13WnOVy9x2XZoOx22UIbD4Diu8FuJvoOcsLFjuOzfvNZQSrMUj9V5",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log("DATAAA IS:", data));
    } catch (error) {
      console.error(error);
    }
  }, []);





  const { data, loading } = UseFetchGet(
    getSiteUrl() + "v1/stories/"
  );
  if (data) {
    let arr = [];
    data.forEach((element) => {
      arr.push({
        head: element.subject.subject,
        body: element.body.background,
      });
    });
    console.log(arr);
  }
  return (
    <View style={styles.container}>
      <Text>Timeline Screen</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Text>
                  שם הדמות:
                  {item.subject.subject}
                </Text>
                <Text>
                  רקע:
                  {item.body.background}
                </Text>
                <View style={{ height: 20 }} />
              </React.Fragment>
            );
          })}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
