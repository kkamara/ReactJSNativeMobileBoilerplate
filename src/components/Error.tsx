import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

const ErrorComponent = ({
  error,
  style,
}: {
  error: ErrorType,
  style?: ViewStyle,
}) => {
  if (!error) {
    return null;
  }

  return (
    <View style={style ? style : null}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 18,
  },
});

export default ErrorComponent;