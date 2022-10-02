import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";
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
				<Image style={styles.image} source={require('../assets/images/goal.png')}/>
				<TextInput style={styles.textInput} placeholder={"Your course goal!"} value={enteredGoalText}
						   onChangeText={goalInputHandler}/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title={"Add Goal"} onPress={addGoalHandler} color={"#b180f0"}/>
					</View>
					<View style={styles.button}>
						<Button title={"Cancel"} onPress={props.onCancel} color={"#f31282"}/>
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
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		width: '100%',
		padding: 16,
		color: "#120438",
		borderRadius: 6,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
})

export default GoalInput;