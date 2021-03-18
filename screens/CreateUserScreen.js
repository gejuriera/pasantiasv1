import React, {useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'

const CreateUserScreen =() => {

    const[state, setState]= useState({
        name: '',
        email: '',
        phone: '',
        city: ''

    });

    

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User" />
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="Email User" />
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone User" />
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder="City" />
            </View>

            

            <View >
                <Button tittle=" Save User" onPress={() => console.log(state)} />
            </View>
        </ScrollView>

    )
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        padding:35,
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15
        

    }
})

export default CreateUserScreen
