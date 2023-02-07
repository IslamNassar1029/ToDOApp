import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import InputTask from "./components/inputTask";
import TaskItem from "./components/taskItem";

export default function App() {
  const [tasksList, setTasksList] = useState([]);
  const [error, setError] = useState(false);
  //add task function
  const addTask = (task) => {
    if (task) {
      // check if there's no input
      setTasksList([...tasksList, task]);
      setError(false);
      Keyboard.dismiss();
    } else {
      setError(true);
    }
  };
  //delete task function
  const deleteTask = (deletedId) => {
    setTasksList(tasksList.filter((task, id) => id != deletedId));
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#03045E" style="light" />
      <Text style={{ marginTop: 50, color: "#03045E", fontSize: 35 }}>
        Today's Plan
      </Text>
      <View
        style={{ borderColor: "#03045E", width: 200, borderWidth: 2 }}
      ></View>
      <InputTask addTask={addTask} />
      {error && (
        <View style={styles.errorStyle}>
          <Text>You must Enter your Task{/* error massage*/} </Text>
        </View>
      )}
      <ScrollView>
        {tasksList.map((task, taskId) => {
          return (
            <View key={taskId}>
              {/*unique key for VDom*/}
              <TaskItem
                task={task}
                index={taskId + 1}
                deleteTask={() => deleteTask(taskId)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setTasksList([]);
          {
            /*clear all function*/
          }
        }}
      >
        <View style={styles.btnStyle}>
          <Text style={{ color: "white" }}>Clear All</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CAF0F8",
  },
  errorStyle: {
    backgroundColor: "red",
    borderRadius: 15,
    padding: 10,
    margin: 20,
  },
  btnStyle: {
    width: 200,
    borderRadius: 15,
    padding: 10,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#03045E",
    alignItems: "center",
    marginBottom: 20,
  },
});
// flex: 1,

//
