import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [courseGoals, setCourseGoals] = useState([]);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
			text: enteredGoalText,
			key: Math.random().toString(),
		}])

		endAddGoalHandler();
	}

	function deleteGoalHandler(key) {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter(goal => goal.key !== key);
		})
	}

	return (
		<>
			<View style={styles.appContainer}>
				<Button title={"Add New Goal"} onPress={startAddGoalHandler} color={"#a065ec"}/>
				<GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
				<View style={styles.goalsContainer}>
					<FlatList keyExtractor={(item) => item.key} data={courseGoals} renderItem={({item}) => (
						<GoalItem id={item.key} text={item.text} onDeleteItem={deleteGoalHandler}/>
					)}/>
				</View>
			</View>
			<StatusBar style={"light"}/>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
});