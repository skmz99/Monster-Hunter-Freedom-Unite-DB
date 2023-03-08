import React,{useState, useEffect} from 'react'
import {View,Text} from 'react-native'
import * as SQLite from 'expo-sqlite'
import { SafeAreaContext } from 'react-native-safe-area-context'

export default function QuestsInfo({route}){
    const [quest,setQuest] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM quests WHERE idQuests=?',[route.params.info],(_,{rows:{_array}})=>{setQuest(_array[0]),setLoading(false)},(trans,error)=>console.log(error))
        })
    },[])

    if(!loading){
        return(
            <View style={[{flex: 1}]}>    
                <View style={[{flex: 0.05, flexDirection: 'row', justifyContent: 'space-between'}]}>
                    <Text style={[{left: 5, alignSelf: 'center',fontSize: 15,fontWeight: 'bold',fontStyle: 'italic',}]}>{quest.questName}</Text>
                    <Text style={[quest.questType == 'Key Quest' ? {color:'blue'}: quest.questType == 'Urgent Quest' ? {color:'red'}:{color:'grey'},{right: 5,fontSize: 15, fontWeight: 'bold', fontStyle: 'italic',alignSelf: 'center'}]}>{quest.questType}</Text>
                </View>
                <View style={[{flex: 0.95, flexDirection: 'column',}]}>
                    <View style={[{flex: 1}]}>
                        <View style={[{left: 3,flex: 0.7}]}>
                            <View style={[{flexDirection: 'column'}]}>
                                <Text style={[{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}]}>Objective: </Text>
                                <Text style={[{fontSize: 15, fontWeight:'600',}]}>{quest.Objective + '\n'}</Text>
                            </View>
                            <View style={[{flexDirection: 'column'}]}>
                                <Text style={[{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}]}>Quest Description: </Text>
                                <Text style={[{fontSize: 15, fontWeight: '600',}]}>{quest.questDesc + '\n'}</Text>
                            </View>
                            <View style={[{flexDirection: 'column'}]}>
                                <Text style={[{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}]}>Monsters: </Text>
                                <Text style={[{fontSize: 15, fontWeight: '600',}]}>{quest.Monsters + '\n'}</Text>
                            </View>
                            <View style={[{flexDirection: 'column'}]}>
                                <Text style={[{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}]}>Location: </Text>
                                <Text style={[{fontSize: 15, fontWeight: '600'}]}>{quest.Location + '\n'}</Text>
                            </View>
                            <View style={[{flexDirection: 'column'}]}>
                                <Text style={[{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}]}>Requirement</Text>
                                <Text style={[{fontSize: 15, fontWeight: '600'}]}>{quest.Requirement + '\n'}</Text>
                            </View>
                        </View>
                        <View style={[{left: 3, flex: 0.3}]}>
                            <View style={[{flexDirection: 'column', flex: 1}]}>
                                <View style={[{flex: 0.4,flexDirection: 'row', justifyContent:'space-evenly'}]}>
                                    <View style={[{flexDirection: 'column'}]}>
                                        <Text style={[{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}]}>Time Limit</Text>
                                        <Text style={[{fontSize: 13, fontWeight: '600', fontStyle: 'normal'}]}>{quest.timeLimit}</Text>
                                    </View>
                                    <View style={[{flexDirection: "column"}]}>
                                        <Text style={[{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}]}>Requestor: </Text>
                                        <Text style={[{fontSize: 13, fontWeight: '600', fontStyle: 'normal'}]}>{quest.Requestor}</Text>
                                    </View>
                                </View>
                                <View style={[{flex: 0.4, flexDirection: 'row', justifyContent: 'space-evenly'}]}>
                                    <View style={[{flexDirection: 'column'}]}>
                                        <Text style={[{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}]}>Reward: </Text>
                                        <Text style={[{fontSize: 13, fontWeight: '600', fontStyle: 'normal'}]}>{quest.Reward}</Text>
                                    </View>
                                    <View stlye={[{flexDirection: "column"}]}>
                                        <Text style={[{fontSize: 15, fontWeight: 'bold', fontStyle: 'italic'}]}>Contract Fee: </Text>
                                        <Text style={[{fontSize: 13, fontWeight: '600', fontStyle: 'normal'}]}>{quest["Contract Fee"]}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }else{
        return(
            <View style={[{flex: 1}]}>
                <View style={[{justifyContent: 'center', alignContent: 'center'}]}>
                    <Text style={[{fontSize: 30, alignSelf: 'center'}]}>Loading...</Text>
                </View>
            </View>
        )
    }
}