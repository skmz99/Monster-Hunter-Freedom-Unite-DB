import React, {useState,useRef} from 'react'
import {Animated, StyleSheet,Text, TouchableOpacity, View} from 'react-native'

export default function Top_Menu ({navigation,route}){
    return(
        <View>
        <View style={[{justifyContent:'flex-end', height: 100,backgroundColor:'lightblue'}]}>
            <View style={[{alignSelf:'center',marginBottom: 20, }]}>
                <Text style={[{fontWeight: 'bold',fontSize: 20,alignSelf:'center',fontStyle: 'italic'}]}>Monster Hunter Freedom Unite Database</Text>
            </View>
            <View style={[{marginBottom: 5,marginHorizontal: 10,flexDirection:'row', justifyContent: 'space-evenly'}]}>
                <TouchableOpacity style={styles.button_Quests} onPress={()=> {navigation.navigate('Quests')}}>
                    <Text style={styles.text}>Quests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_Armor}  onPress={()=>navigation.navigate('Armor')}>
                    <Text style={styles.text}>Armor</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_Weapons}  onPress={()=> navigation.navigate('Weapon')}>
                    <Text style={styles.text}>Weapons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_Items,{display:'none'}]}  onPress={()=> navigation.navigate('Items')}>
                    <Text style={styles.text}>Items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_Default]}  onPress={()=>navigation.navigate('About')}>
                    <Text style={styles.text}>About</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={[{flex: 1, backgroundColor: 'white',flexDirection: 'row',paddingBottom: 40}]}>
            <View style={[{flex: 0.5, paddingBottom: 40}]}>
                <TouchableOpacity disabled={!navigation.canGoBack()} onPress={()=>navigation.goBack()}>
                    <Text style={[styles.textNearArrowButton]}>Go Back</Text>
                </TouchableOpacity>
            </View>
            <View style={[{flex: 0.5, paddingBottom: 40}]}>
                <Text style={[styles.textNearArrowButton]}>{route.name}</Text>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    buttonTouch: {
        opacity: .6,
        backgroundColor: 'lightgray',
        width: 25,
        borderRadius: 2,
        transform: [{rotate: '90deg'}],
    },
    text:{
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    button_Quests:{
        backgroundColor: 'white',
        width: 60, 
        height: 20,
        marginTop: 10,
        borderRadius:50,
    },
    button_Armor:{
        backgroundColor: 'white',
        width: 60, 
        height: 20,
        borderRadius:50,
        marginTop: 10,

    },
    button_Weapons:{
        backgroundColor: 'white',
        width: 60, 
        height: 20,
        borderRadius:50,
        marginTop: 10,

    },
    button_Items:{
        backgroundColor: 'white',
        width: 60, 
        height: 20,
        borderRadius:50,
        marginTop: 10,

    },
    button_Default: {
        backgroundColor: 'white',
        width: 60,
        height: 20,
        borderRadius: 50,
        marginTop: 10,

    },
    textNearArrowButton:{
        marginTop: 5, 
        alignSelf: 'center', 
        fontSize: 20, 
        fontWeight: 'bold', 
        fontStyle: 'italic', 
        position: 'absolute',
    }
});