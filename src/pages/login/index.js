import { Text, Button, TextInput } from "react-native"

export default function Login(props) {
    return (
        <>
            <Text>Login</Text>
            <Button onPress={() => props.navigation.navigate('cadastro')} title="Cadastro"></Button>
        </>
    )
}
