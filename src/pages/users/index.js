import { useContext } from "react";
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import { UserContext } from "../../context/user";


export default function Login(props) {
    const { users } = useContext(UserContext);

    const renderUsers = () => {
        return users.map((u) => {
            return (
                <View style={styles.screen}>
                    <View style={styles.card}>
                        <Text>{u.name}</Text>
                        <Text>{u.email}</Text>
                        <Text>{u.idade}</Text>
                        <Text>{u.sexo}</Text>
                        <Text>{u.not}</Text>
                    </View>
                </View>
            )
        })
    }

    return (
        <View style={styles.screen}>
            {renderUsers()}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100vw',
        backgroundColor: 'white',
        marginBottom: '1vh'
    },
    card: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
});

