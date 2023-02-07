import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function TaskItem(props) {
  const [done, setDone] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.textStyle}>
        <Text>
          Task No {props.index} : {props.task}
        </Text>
      </View>
      <View style={styles.buttons}>
        {/*delete task function*/}
        <TouchableOpacity onPress={props.deleteTask}>
          <View style={styles.btnStyle}>
            <MaterialIcons name="delete" color="white" size={22} />
          </View>
        </TouchableOpacity>
        <View style={{ margin: 10, width: 152 }}>
          <Text>{done ? "The Task is done" : "The Task is not done yet"}</Text>
        </View>
        <TouchableOpacity /* function to show task is done */
          onPress={() => {
            setDone(true);
          }}
        >
          <View style={styles.btnStyle}>
            <MaterialIcons name="check-circle" color="white" size={22} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    backgroundColor: "white",
    marginVertical: 10,
  },
  textStyle: {
    marginLeft: 15,
  },
  btnStyle: {
    width: 40,
    height: 40,
    backgroundColor: "#03045E",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    margin: 15,
  },
});
