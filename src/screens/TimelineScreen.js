import { Text, View, StyleSheet, Button } from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import React, { useState } from "react";

export default function TimelineScreen() {
  const { data, loading } = UseFetchGet(
    "http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/stories/"
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
