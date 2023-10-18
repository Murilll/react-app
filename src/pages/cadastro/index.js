import { useState, useContext, createContext } from "react"
import { Text, Button, Image, TextInput, View, Switch, TouchableOpacity, StyleSheet } from "react-native"
import { UserContext } from "../../context/user";

export default function Register(props) {
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [name, setName] = useState('');
    const [idade, setIdade] = useState(0);
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const { addUser } = useContext(UserContext)

    const onHandleAddUser = async () => {
        const user = {
            name: name,
            idade: idade,
            sexo: sexo,
            email: email,
            senha: senha,
            not: isEnabled
        }
        props.navigation.navigate('login')
        await addUser(user);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
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
                            backgroundColor: 'white'
                        }}
                    />
                </View>
                <View style={styles.input2}>
                    <View>
                        <Text>Idade:</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white'
                            }}
                            onChangeText={text => setIdade(text)}
                        />
                    </View>
                    <View>
                        <Text>Sexo:</Text>
                        <TextInput
                            style={{
                                backgroundColor: 'white'
                            }}
                            onChangeText={text => setSexo(text)}
                        />
                    </View>
                </View>
                <View style={styles.input}>
                    <Text>E-mail:</Text>
                    <TextInput
                        style={{
                            backgroundColor: 'white'
                        }}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.input}>
                    <Text>Senha:</Text>
                    <TextInput
                        style={{
                            backgroundColor: 'white'
                        }}
                        onChangeText={text => setSenha(text)}
                    />
                </View>
                <View style={styles.input}>
                    <Text>Confirme a senha:</Text>
                    <TextInput
                        style={{
                            backgroundColor: 'white'
                        }}
                        onChangeText={text => console.log(text)}
                    />
                </View>
                <View style={{alignItems: 'center', marginBottom: '2vh', marginTop: '2vh'}}>
                    <Text>Deseja receber notificações?</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.input}>
                    <Button
                        onPress={() => onHandleAddUser()}
                        color={"black"}
                        title='Cadastrar'
                    />
                </View>
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
        width: '100%',
    },
    input: {
        marginBottom: '1vw',
        marginTop: '1vw',
        width: '80%',
        borderRadius: 2
    },
    input2: {
        marginBottom: '1vw',
        width: '80%',
        display: 'flex',
        borderRadius: 2,
    }
});
