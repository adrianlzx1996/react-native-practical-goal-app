import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
			text: enteredGoalText,
			key: Math.random().toString(),
		}])
	}

	function deleteGoalHandler(key) {
		setCourseGoals(currentCourseGoals => {
			return currentCourseGoals.filter(goal => goal.key !== key);
		})
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler}/>
			<View style={styles.goalsContainer}>
				<FlatList keyExtractor={(item) => item.key} data={courseGoals} renderItem={({item}) => (
					<GoalItem id={item.key} text={item.text} onDeleteItem={deleteGoalHandler}/>
				)}/>
			</View>
		</View>
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