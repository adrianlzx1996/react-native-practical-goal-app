import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("")
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(value) {
		setEnteredGoalText(value)
	}

	function addGoalHandler() {
		setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
			text: enteredGoalText,
			key: Math.random().toString(),
		}])
		setEnteredGoalText("")
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder={"Your course goal!"} value={enteredGoalText}
						   onChangeText={goalInputHandler}/>
				<Button title={"Add Goal"} onPress={addGoalHandler}/>
			</View>
			<View style={styles.goalsContainer}>
				<FlatList keyExtractor={(item) => item.key} data={courseGoals} renderItem={({item}) => (
					<View style={styles.goalItem}>
						<Text style={styles.goalText}>{item.text}</Text>
					</View>
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
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		width: '70%',
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
});