import { useState } from "react"
import { Text, Button, Image, TextInput, View, Switch } from "react-native"

export default function Register(props) {
    const [name, setName] = useState('');

    return (
        <>
            <Text>Cadastro</Text>
            <Button onPress={() => props.navigation.navigate('login')} title="Cadastro"></Button>

            <Image
                style={{
                    height: "200px",
                    width: "200px"
                }}
                source={require("/assets/user.png")}
            />

            <View>
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

            <View>
                <Text>Idade:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />

                <Text>Sexo:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />
            </View>

            <View>
                <Text>E-mail:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />
            </View>

            <View>
                <Text>Senha:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />
            </View>

            <View>
                <Text>Confirmar senha:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />
            </View>

            <View>
                <Text>Senha:</Text>
                <TextInput
                    multiline
                    maxLength={40}
                    numberOfLines={1}
                    style={{
                        border: "solid black 2px"
                    }}
                />
            </View>

            <Switch
                trackColor={{ false: "#767577", true: "#324535" }}      
            />

            

            <Text>{name}</Text>
        </>
    )
}
