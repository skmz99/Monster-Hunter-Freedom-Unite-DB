import React, {useEffect, useRef, useState} from 'react'
import {View, Animated, ScrollView, TouchableOpacity,Text, StyleSheet} from 'react-native'
import * as SQLite from 'expo-sqlite'

export default function Quests({navigation}){
    const villageContent = useRef(new Animated.Value(0)).current;
    const guildContent = useRef(new Animated.Value(0)).current;
    const G_rankContent = useRef(new Animated.Value(0)).current;
    const [questInfo, setquestInfo] = useState(undefined);
    const [quest,setQuest] = useState(undefined)
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT idQuests,questName,RankIndx,questType FROM quests',null,(_,{rows:{_array}})=>{setQuest(_array),setLoading(false)},(trans,error)=>console.log(error))
        })
    },[])

    const displayQuest = (RankIndx)=>{
        return quest.map((name,key)=>{
            if(name.RankIndx === RankIndx){
                return(
                    <TouchableOpacity key={key}  onPress={()=> {navigation.navigate('QuestsInfo',{info: name.idQuests})}} style={[name.idQuests % 2 != 0 ? {backgroundColor: 'white'}:{backgroundColor:'#f3f3f3'},]}>
                        <View style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={[styles.text,{fontSize: 18}]}>{name.questName}</Text>
                            <Text style={[{alignSelf: 'center'},name.questType == 'Key Quest' ? {color: 'blue'}: name.questType == 'Urgent Quest' ? {color: 'red'}: {color:'gray'}]}>{name.questType}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        })
    }

    const villageGrow = ()=>{
        Animated.parallel([
            Animated.timing(villageContent,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(guildContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(G_rankContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start();
    }

    const guildGrow = ()=>{
        Animated.parallel([
            Animated.timing(guildContent,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(villageContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(G_rankContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start();
    }

    const G_rankGrow = ()=>{
        Animated.parallel([
            Animated.timing(G_rankContent,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(villageContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(guildContent,{
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }),
        ]).start();
    }

    if(loading){
        return(
            <View style={[{flex:1, flexDirection: 'column'}]}>
                <TouchableOpacity style={[styles.button_layout]}>
                    <Text style={[styles.text]}>Village Quests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_layout]}>
                    <Text style={[styles.text]}>Guild Quests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_layout]}>
                    <Text style={[styles.text]}>G Rank Quests</Text>
                </TouchableOpacity>
                <View style={[{flex:1, justifyContent: "center"}]}>
                    <Text style={[{alignSelf:"center"}]}>Loading...</Text>
                </View>
            </View>
        )
    }else{
        return(
            <View style={[{flex: 1,flexDirection: 'column'}]}>
        
            <TouchableOpacity onPress={()=>villageGrow()} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Village Quests</Text>
            </TouchableOpacity>
            <Animated.View style={[{flex: villageContent, opacity: villageContent, height: 0}]}>
                <ScrollView>

                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_1')}>
                    <Text style={[styles.text]}>★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_1' && 
                    <View>
                        {displayQuest(1)}
                    </View>
                }
                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_2')}>
                    <Text style={[styles.text]}>★★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_2' && 
                    <View>
                        {displayQuest(2)}
                    </View>

                }
                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_3')}>
                    <Text style={[styles.text]}>★★★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_3' &&
                    <View>
                        {displayQuest(3)}
                    </View>
                }
                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_4')}>
                    <Text style={[styles.text]}>★★★★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_4' &&
                    <View>
                        {displayQuest(4)}
                    </View>
                }
                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_5')}>
                    <Text style={[styles.text]}>★★★★★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_5' &&
                    <View>
                        {displayQuest(5)}
                    </View>
                }
                <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Village_6')}>
                    <Text style={[styles.text]}>★★★★★★ Quests</Text>
                </TouchableOpacity>
                {questInfo === 'Village_6' &&
                    <View>
                        {displayQuest(6)}
                    </View>
                }
                </ScrollView>
            </Animated.View>
            <TouchableOpacity onPress={()=>guildGrow()} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Guild Quests</Text>
            </TouchableOpacity>
            <Animated.View style={[{flex: guildContent, opacity: guildContent, height: 0}]}>
                <ScrollView>
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_1')}>
                        <Text style={[styles.text]}>1 ★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_1' &&
                        <View>
                            {displayQuest(7)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_2')}>
                        <Text style={[styles.text]}>2 ★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_2' &&
                        <View>
                            {displayQuest(8)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_3')}>
                        <Text style={[styles.text]}>3 ★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_3' &&
                        <View>
                            {displayQuest(9)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_4')}>
                        <Text style={[styles.text]}>4 ★★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_4' &&
                        <View>
                            {displayQuest(10)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_5')}>
                        <Text style={[styles.text]}>5 ★★★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_5' &&
                        <View>
                            {displayQuest(11)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_6')}>
                        <Text style={[styles.text]}>6 ★★★★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_6' &&
                        <View>
                            {displayQuest(12)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_7')}>
                        <Text style={[styles.text]}>7 ★★★★★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_7' &&
                        <View>
                            {displayQuest(13)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('Guild_8')}>
                        <Text style={[styles.text]}>8 ★★★★★★★★ Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'Guild_8' &&
                        <View>
                            {displayQuest(14)}
                        </View>
                    }
                </ScrollView>
            </Animated.View>
            <TouchableOpacity onPress={()=>G_rankGrow()} style={[styles.button_layout]}>
                <Text style={[styles.text]}>G Rank Quests</Text>
            </TouchableOpacity>
            <Animated.View style={[{flex: G_rankContent, opacity: G_rankContent, height: 0, backgroundColor: 'white'}]}>
                <ScrollView>
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('G_1')}>
                        <Text style={[styles.text]}>G1 Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'G_1' &&
                        <View>
                            {displayQuest(15)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('G_2')}>
                        <Text style={[styles.text]}>G2 Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'G_2' &&
                        <View>
                            {displayQuest(16)}
                        </View>
                    }
                    <TouchableOpacity style={[styles.button_layout]} onPress={()=>setquestInfo('G_3')}>
                        <Text style={[styles.text]}>G3 Quests</Text>
                    </TouchableOpacity>
                    {questInfo === 'G_3' &&
                        <View>
                            {displayQuest(17)}
                        </View>
                    }
                </ScrollView>
            </Animated.View>
        </View>
        
        )
    }
    }
    
    const styles = StyleSheet.create({
        button_layout: {
            flex: 0.08,
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    text:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})