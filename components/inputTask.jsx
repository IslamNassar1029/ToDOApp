import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function InputTask(props) {
  const [task, setTask] = useState();

  // send task to app component
  const sendTask = () => {
    props.addTask(task);
    setTask(null);
  };
  return (
    <View style={styles.containerOne}>
      <TextInput
        onChangeText={(txt) => {
          setTask(txt);
        }}
        style={styles.inputStyle}
        placeholder=" Enter Your Task"
        value={task}
      />
      <TouchableOpacity onPress={sendTask}>
        <View style={styles.btnStyle}>
          <MaterialIcons name="keyboard-arrow-down" color="white" size={22} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    alignItems: "center",
    flexDirection: "row",
  },
  inputStyle: {
    marginVertical: 50,
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 15,
    color: "black",
    marginLeft: 10,
    borderWidth: 1.5,
    borderColor: "#03045E",
    padding: 10,
  },
  btnStyle: {
    width: 40,
    height: 40,
    backgroundColor: "#03045E",
    borderRadius: 15,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
