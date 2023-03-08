import React, {useEffect, useRef, useState} from 'react'
import {View, Animated, ScrollView, TouchableOpacity,Text, StyleSheet} from 'react-native'
import * as SQLite from 'expo-sqlite'

export default function Armor(){
    const [armor, setArmor] = useState();
    const [loading, setLoading] = useState(true);
    // const [armorInfo, setarmorInfo] = useState();
    const [Type, setType] = useState();
    const [Rank, setRank] = useState();
    const [armorInfo, setarmorInfo] = useState();
    const bmContent = useRef(new Animated.Value(0)).current;
    const gnContent = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM armor',null,(_,{rows:{_array}})=>{setArmor(_array),setLoading(true)})
        })
    },[])

    const displayArmor = (rank,type)=>{
        return armor.map((name,key)=>{
            if(name.armorRarity == rank && name.armorType == type){
                return(
                    <View key={key}>
                        <TouchableOpacity onPress={()=>setarmorInfo(name.setName)} style={[name.armorId % 2 === 0 ? {backgroundColor: 'white'}:{backgroundColor:'#f3f3f3'}]}>
                            <View style={[{flex: 1,flexDirection: 'column'}]}>
                                <View style={[{flex: 0.6, justifyContent: 'center'}]}>
                                    <Text style={[styles.text,{alignSelf:'center'}]}>{name.setName}</Text>
                                </View>
                                <View style={[{flex:0.4, justifyContent: 'center'}]}>
                                    <Text style={[{alignSelf:'center', fontSize: 12,flexWrap:'wrap'}]}>{name.armorRes}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        {name.setName === armorInfo &&
                            <View style={[name.armorId % 2 === 0 ? {backgroundColor: 'white'}:{backgroundColor:'#f3f3f3'},{flex: 1,borderWidth: .5, borderColor: 'black'}]}>
                                <View style={[{flex: .2,flexDirection: 'row'}]}>
                                    <View style={[{flex:.25, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Helm</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.helmName}</Text>
                                    </View>
                                    <View style={[{flex:.40, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Materials</Text>
                                        <Text style={[{alignSelf:'center',fontSize: 12}]}>{name.helmMat}</Text>
                                    </View>
                                    <View style={[{flex:.15, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Defense</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.helmDefense}</Text>
                                    </View>
                                    <View style={[{flex:.20, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Zeni</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.helmPrice}</Text>
                                    </View>
                                </View>
                                <View style={[{flex: .2,flexDirection: 'row', }]}>
                                <View style={[{flex:.25, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Chest</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.chestName}</Text>
                                    </View>
                                    <View style={[{flex:.40, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Materials</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.chestMat}</Text>
                                    </View>
                                    <View style={[{flex:.15, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Defense</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.chestDefense}</Text>
                                    </View>
                                    <View style={[{flex:.20, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Zeni</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.chestPrice}</Text>
                                    </View>
                                </View>
                                <View style={[{flex: .2,flexDirection: 'row', }]}>
                                    <View style={[{flex:.25, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Arms</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.armName}</Text>
                                    </View>
                                    <View style={[{flex:.40, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Materials</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.armMat}</Text>
                                    </View>
                                    <View style={[{flex:.15, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Defense</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.armDefense}</Text>
                                    </View>
                                    <View style={[{flex:.20, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Zeni</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.armPrice}</Text>
                                    </View>
                                </View>
                                <View style={[{flex: .2,flexDirection: 'row', }]}>
                                    <View style={[{flex:.25, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Waist</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.waistName}</Text>
                                    </View>
                                    <View style={[{flex:.40, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Materials</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.waistMat}</Text>
                                    </View>
                                    <View style={[{flex:.15, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Defense</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.waistDefense}</Text>
                                    </View>
                                    <View style={[{flex:.20, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Zeni</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.waistPrice}</Text>
                                    </View>
                                </View>
                                <View style={[{flex: .2,flexDirection: 'row', }]}>
                                    <View style={[{flex:.25, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Leggings</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.leggingName}</Text>
                                    </View>
                                    <View style={[{flex:.40, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Materials</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.leggingMat}</Text>
                                    </View>
                                    <View style={[{flex:.15, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Defense</Text>
                                        <Text style={[{alignSelf:'center',fontSize:12}]}>{name.leggingDefense}</Text>
                                    </View>
                                    <View style={[{flex:.20, flexDirection: 'column'}]}>
                                        <Text style={[{alignSelf:'center',textDecorationLine:'underline'}]}>Zeni</Text>
                                        <Text style={[{fontSize:12, alignSelf:'center'}]}>{name.leggingPrice}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                )
            }
        })
    }

    const bmGrow = () =>{
        Animated.parallel([
            Animated.timing(bmContent,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(gnContent,{
                toValue: 0,
                duation: 1000,
                useNativeDriver: false,
            })
        ]).start();
    }

    const gnGrow = () =>{
        Animated.parallel([
            Animated.timing(gnContent,{
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }),
            Animated.timing(bmContent,{
                toValue: 0,
                duartion: 1000,
                useNativeDriver: false,
            })
        ]).start();
    }

    if(!loading){
        return(
            <View>
                <Text>This is the Armor file</Text>
            </View>
        )
    }else{
        return(
            <View style={[{flex: 1, flexDirection: 'column'}]}>
                <TouchableOpacity onPress={()=>bmGrow()} style={[styles.button_layout]}>
                    <Text style={[styles.text]}>Blademaster</Text>
                </TouchableOpacity>
                <Animated.View style={[{flex: bmContent, opacity: bmContent, height: 0}]}>
                    <ScrollView>
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(1),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 1</Text>
                        </TouchableOpacity>
                        {Rank == 1 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(2),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 2</Text>
                        </TouchableOpacity>
                        {Rank == 2 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(3),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 3</Text>
                        </TouchableOpacity>
                        {Rank == 3 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(4),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 4</Text>
                        </TouchableOpacity>
                        {Rank == 4 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(5),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 5</Text>
                        </TouchableOpacity>
                        {Rank == 5 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(6),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 6</Text>
                        </TouchableOpacity>
                        {Rank == 6 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(7),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 7</Text>
                        </TouchableOpacity>
                        {Rank == 7 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(8),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 8</Text>
                        </TouchableOpacity>
                        {Rank == 8 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(9),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 9</Text>
                        </TouchableOpacity>
                        {Rank == 9 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(10),setType('Blademaster')}}>
                            <Text style={[styles.text]}>Blademaster Rank 10</Text>
                        </TouchableOpacity>
                        {Rank == 10 && Type == 'Blademaster' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                    </ScrollView>
                </Animated.View>
                <TouchableOpacity onPress={()=>gnGrow()} style={[styles.button_layout]}>
                    <Text style={[styles.text]}>Gunner</Text>
                </TouchableOpacity>
                <Animated.View style={[{flex: gnContent, opacity: gnContent, height: 0}]}>
                    <ScrollView>
                    <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(1),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 1</Text>
                        </TouchableOpacity>
                        {Rank == 1 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(2),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 2</Text>
                        </TouchableOpacity>
                        {Rank == 2 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(3),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 3</Text>
                        </TouchableOpacity>
                        {Rank == 3 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(4),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 4</Text>
                        </TouchableOpacity>
                        {Rank == 4 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(5),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 5</Text>
                        </TouchableOpacity>
                        {Rank == 5 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(6),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 6</Text>
                        </TouchableOpacity>
                        {Rank == 6 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(7),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 7</Text>
                        </TouchableOpacity>
                        {Rank == 7 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(8),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 8</Text>
                        </TouchableOpacity>
                        {Rank == 8 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(9),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 9</Text>
                        </TouchableOpacity>
                        {Rank == 9 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
                            </View>
                        }
                        <TouchableOpacity style={[styles.button_layout,{flex:1}]} onPress={()=>{setRank(10),setType('Gunner')}}>
                            <Text style={[styles.text]}>Gunner Rank 10</Text>
                        </TouchableOpacity>
                        {Rank == 10 && Type == 'Gunner' &&
                            <View>
                                {displayArmor(Rank,Type)}
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
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        height: '10%'
    },
    text:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})
