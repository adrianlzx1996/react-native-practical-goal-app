import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
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
		<Modal visible={props.visible} animationType={"slide"}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder={"Your course goal!"} value={enteredGoalText}
						   onChangeText={goalInputHandler}/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title={"Add Goal"} onPress={addGoalHandler}/>
					</View>
					<View style={styles.button}>
						<Button title={"Cancel"} onPress={props.onCancel}/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		padding: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#ccc",
		width: '100%',
		padding: 8,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
})

export default GoalInput;