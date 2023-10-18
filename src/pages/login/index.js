import { useContext } from "react";
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import { UserContext } from "../../context/user";
import users from "../users";
import { useState } from "react";

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userExists } = useContext(UserContext);

    const [error, setError] = useState(false);
    const onHandleLogin = () => {
        const users = {
            email: email,
            password: password
        }

        if (userExists(users))
            navigation.navigate("users");
        else
            setError(true);
    }

    const renderError = () => {
        if (error)
            return <Text style={{ fontSize: '1rem', color: 'red' }}>Usuário ou senha incorretos.</Text>
    }

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Email:</Text>
                    <TextInput style={{ backgroundColor: '#f1f1f1' }}
                        onChange={(e) => { setEmail(e.target.value); setError(false) }} />
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput style={{ backgroundColor: '#f1f1f1' }}
                        onChange={(e) => { setPassword(e.target.value); setError(false) }} />
                </View>
            </View>
            <View style={{marginTop: '40vh', width: '60vw'}}>
                <Button onPress={() => onHandleLogin} title="Logar"/>
            </View>
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
        fontSize: '4rem',
        marginBottom: '4vw'
    },
    container: {
        width: '90vw'
    }
});

