import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("")

	function goalInputHandler(value) {
		setEnteredGoalText(value)
	}

	function addGoalhandler() {}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder={"Your course goal!"} onChangeText={goalInputHandler}/>
				<Button title={"Add Goal"} onPress={addGoalhandler}/>
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
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
});