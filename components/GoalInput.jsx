import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("")

	function goalInputHandler(value) {
		setEnteredGoalText(value)
	}

	function addGoalHandler() {
		props.onAddGoal(enteredGoalText)
		setEnteredGoalText("")
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.textInput} placeholder={"Your course goal!"} value={enteredGoalText}
					   onChangeText={goalInputHandler}/>
			<Button title={"Add Goal"} onPress={addGoalHandler}/>
		</View>
	)
}

const styles = StyleSheet.create({
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
})

export default GoalInput;