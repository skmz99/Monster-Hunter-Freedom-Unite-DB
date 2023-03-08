import React,{useEffect, useRef, useState} from 'react'
import {View,ScrollView,StyleSheet, TouchableOpacity ,Text} from 'react-native'
import * as SQLite from 'expo-sqlite'
export default function Weapon(){
    const [weaponName, setweaponName] = useState();
    const [GSLS, setGSLS] = useState();
    const [HamHun, setHamHun] = useState();
    const [LanGlan, setLanGlan] = useState();
    const [SSDB, setSSDB] = useState();
    const [HB, setHB] = useState();
    const [LB, setLB] = useState();
    const [Bow, setBow] = useState();

   
    useEffect(()=>{
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM GSandLS',null,(_,{rows:{_array}})=>{setGSLS(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM Ham_and_HH',null,(_,{rows:{_array}})=>{setHamHun(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM HeavyBowgun',null,(_,{rows:{_array}})=>{setHB(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM Lance_and_Gunlance',null,(_,{rows:{_array}})=>{setLanGlan(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM LightBowgun',null,(_,{rows:{_array}})=>{setLB(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM bow',null,(_,{rows:{_array}})=>{setBow(_array)})
        })
        SQLite.openDatabase('MHFUDB.db').transaction(tx=>{
            tx.executeSql('SELECT * FROM SaS_and_DB',null,(_,{rows:{_array}})=>{setSSDB(_array)})
        })
        
    },[])
    
    const gs_ls = () =>{
        return GSLS.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',height:80}}>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:'center'}}>{name.WeaponName}</Text>
                    </View>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:"center"}}>{name.Attack}</Text>
                    </View>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:'center'}}>{name.Special}</Text>
                    </View>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                    </View>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                    </View>
                    <View style={{flex:.3}}>
                        <Text style={{alignSelf:'center'}}>{name.DEF}</Text>
                    </View>
                </View>
            )
        })
    }

    const HMHH = ()=>{
        return HamHun.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.WeaponName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attribute</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attribute}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Defense</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Defense}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    const LG = ()=>{
        return LanGlan.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.WeaponName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attribute</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attribute}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Shelling</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Shelling}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Defense</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Defense}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    const SS_DB = ()=>{
        return SSDB.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.WeaponName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attribute</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attribute}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Defense</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Defense}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }
    
    const HBG = () =>{
        return HB.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.GunsName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>InitialAttack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.InitialAttack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>FinalAttack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.FinalAttack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Defense</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.DefenseBonus}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Reload</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Reload}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Recoil</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Recoil}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    const LBG = () =>{
        return LB.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.GunsName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>InitialAttack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.InitialAttack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>FinalAttack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.FinalAttack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>RapidFire</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                            <Text style={{flex:1,flexWrap:'wrap'}}>{name.RapidFire}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Reload</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Reload}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Recoil</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Recoil}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    const bw = ()=>{
        return Bow.map((name,key)=>{
            return(
                <View key={key} style={{flexDirection:'row',borderWidth:1,borderBottomColor:'black'}}>
                    <View style={{flex:0.3,justifyContent:"center",alignContent:'center'}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:0.2}}>
                                <Text style={{alignSelf:'center'}}>Name</Text>
                            </View>
                            <View style={{flex:.7}}>
                                <Text style={{alignSelf:'center'}}>{name.WeaponName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:.8}}>
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flex:0.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attack</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attack}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Attribute</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Attribute}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Affinity</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Affinity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{flex:.5}}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Slots</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Slots}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>ShotTypes</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.ShotTypes}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:'center'}}>Cost</Text>
                                        </View>
                                        <View style={{flex:.5}}>
                                            <Text style={{alignSelf:"center"}}>{name.Cost}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            )
        })
    }

    if(GSLS === undefined || HamHun === undefined || LanGlan === undefined || SSDB === undefined || HB === undefined || LB === undefined || Bow == undefined){
        return(
            <View>
                <Text>Loading</Text>
            </View>
        )
    }else{
        return(
        <View style={[{flex: 1, flexDirection: 'column'}]}>
            <TouchableOpacity onPress={()=>{setweaponName('GSandLS')}} disabled={weaponName === 'GSandLS'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Great/Long Sword</Text>
            </TouchableOpacity>
            {weaponName === 'GSandLS' &&
                <ScrollView>
                    <View style={[{flexDirection: 'row',height: 50}]}>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Name</Text>
                        </View>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Attack</Text>
                        </View>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Special</Text>
                        </View>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Slots</Text>
                        </View>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Affinity</Text>
                        </View>
                        <View style={[{flex:.3}]}>
                            <Text style={{alignSelf:'center',textDecorationLine:'underline'}}>Def</Text>
                        </View>
                    </View>
                    {gs_ls()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('Ham_and_HH')}} disabled={weaponName === 'Ham_and_HH'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Hammer/Hunting Horn</Text>
            </TouchableOpacity>
            {weaponName === 'Ham_and_HH' &&
                <ScrollView>
                    {HMHH()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('Lance_and_Gunlance')}} disabled={weaponName==='Lance_and_Gunlance'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Lance/Gunlance</Text>
            </TouchableOpacity>
            {weaponName === 'Lance_and_Gunlance' &&
                <ScrollView>
                    {LG()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('SaS_and_DB')}} disabled={weaponName === 'SaS_and_DB'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Sword and Shield/Dual blades</Text>
            </TouchableOpacity>
            {weaponName === 'SaS_and_DB' &&
                <ScrollView>
                    {SS_DB()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('HeavyBowgun')}} disabled={weaponName === 'HeavyBowgun'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Heavy Bowgun</Text>
            </TouchableOpacity>
            {weaponName === 'HeavyBowgun' &&
                <ScrollView>
                    {HBG()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('LightBowgun')}} disabled={weaponName === 'LightBowgun'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Light Bowgun</Text>
            </TouchableOpacity>
            {weaponName === 'LightBowgun' &&
                <ScrollView>
                    {LBG()}
                </ScrollView>
            }
            <TouchableOpacity onPress={()=>{setweaponName('bow')}} disabled={weaponName === 'bow'} style={[styles.button_layout]}>
                <Text style={[styles.text]}>Bow</Text>
            </TouchableOpacity>
            {weaponName === 'bow'&&
                <ScrollView>
                    {bw()}
                </ScrollView>
            }
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
        height: '7%'
    },
    text:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})