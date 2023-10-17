import { useState } from "react"
import { Text, Button, Image, TextInput, View, Switch, TouchableOpacity, StyleSheet } from "react-native"

export default function Register(props) {
    const [name, setName] = useState('');
    const [idade, setIdade] = useState();
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Button onPress={() => props.navigation.navigate('login')} title="Cadastro"></Button>

                <Image
                    style={{
                        height: "200px",
                        width: "200px"
                    }}
                    source={require("/assets/user.png")}
                />

                <View style={styles.input}>
                    <Text>Nome:</Text>
                    <TextInput
                        multiline
                        maxLength={40}
                        numberOfLines={1}
                        onChangeText={text => setName(text)}
                        style={{
                            border: "solid black 2px"
                        }}
                    />
                </View>

                <View style={styles.input2}>
                    <View>
                        <Text>Idade:</Text>
                        <TextInput />
                    </View>

                    <View>
                        <Text>Sexo:</Text>
                        <TextInput />
                    </View>
                </View>

                <View style={styles.input}>
                    <Text>E-mail:</Text>
                    <TextInput />
                </View>

                <View style={styles.input}>
                    <Text>Senha:</Text>
                    <TextInput />
                </View>

                <View style={styles.input}>
                    <Text>Confirmar senha:</Text>
                    <TextInput />
                </View>

                <Switch
                    trackColor={{ false: "#767577", true: "#324535" }}
                />

                <View style={styles.input}>
                    <Button
                        color={"black"}
                        title='Cadastrar'
                    />

                    <TouchableOpacity onPress={() => console.log("Touchable")}
                        style={{
                            width: '100%'
                        }}
                    >
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>

                <Text>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100vw',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#EFEDEE',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40vw',
    },
    input: {
        marginBottom: '1vw',
        width: '80%',
        borderRadius: 2,
        backgroundColor: 'white',
    },
    input2: {
        marginBottom: '1vw',
        width: '80%',
        display: 'flex',
        borderRadius: 2,
        backgroundColor: 'white'
    }
});
