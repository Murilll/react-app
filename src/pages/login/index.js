import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"

export default function Login(props) {
    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Email:</Text>
                    <TextInput style={{ backgroundColor: 'black' }} />
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput style={{ backgroundColor: 'black' }} />
                </View>
            </View>
            <Button onPress={() => console.log("foi")} title="Logar"></Button>
            <TouchableOpacity onPress={() => props.navigation.navigate('cadastro')}>
                <Text>criar cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('users')}>
                <Text>users</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100vw',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: '4vw',
        marginBottom: '4vw'
    },
    container: {
        width: '40vw'
    }
});

