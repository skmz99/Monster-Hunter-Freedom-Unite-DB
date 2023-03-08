import React from 'react'
import {View,Text} from 'react-native'

export default function Default(){
    return(
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
                <View style={{flex:0.25}}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'flex-start'}}>About:</Text>
                    </View>
                    <View>
                        <Text style={{alignSelf:'center'}}>
                            Simple personal project to learn React Native by creating a database containing
                            information for Quests, Armor and Weapons from Monster Hunter Freedom Unite to display information.
                        </Text>
                    </View>
                </View>
                <View  style={{flex:0.25}}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'flex-start'}}>Quests:</Text>
                    </View>
                    <View >
                        <Text style={{fontSize:12, alignSelf:'center'}}>
                            Quests is seperated into three sections <Text style={{fontWeight:'bold'}}>Village</Text>, <Text style={{fontWeight:"bold"}}>Guild</Text>,
                            and <Text style={{fontWeight:"bold"}}>G Rank</Text> where each type of quests contain their ranked quest in ascending order. Within the
                            quest rank are the list of quest for that rank which displays the quest name along with type of quest. Pressing any quest will display
                            another page which shows the quest <Text style={{fontWeight:'bold'}}>Objective</Text>, <Text style={{fontWeight:'bold'}}> Quest Description </Text>,
                            <Text style={{fontWeight:'bold'}}>Monsters </Text> , <Text style={{fontWeight:"bold"}}> Location </Text>, <Text style={{fontWeight:"bold"}}> Requirement </Text> , 
                            <Text style={{fontWeight:'bold'}}> Time Limit </Text>, <Text style={{fontWeight:'bold'}}> Requestor </Text>,<Text style={{fontWeight:'bold'}}> Reward </Text> and  
                            <Text style={{fontWeight:'bold'}}> Contact Fee</Text>.
                        </Text>
                    </View>
                </View>
                <View style={{flex:0.25}}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold',alignSelf:'flex-start'}}>Armor:</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:12,alignSelf:'center'}}>
                            Armor is sepearted into two sections <Text style={{fontWeight:'bold'}}> Blademaster </Text> and <Text style={{fontWeight:'bold'}}> Gunner </Text>
                            within the two sections are weapons seperated by rank in ascending order where upon pressing one of the ranks will display the weapons name
                            and their element resistance. Pressing one of the weapons will display that armor set <Text style={{fontWeight:'bold'}}>Parts</Text> , 
                            <Text style={{fontWeight:'bold'}}>materials</Text> for each parts, <Text style={{fontWeight:'bold'}}>Defense</Text> and the cost of <Text style={{fontWeight:'bold'}}>Zeni</Text> for each part.
                        </Text>
                    </View>
                </View>
                <View style={{flex:0.25}}>
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold',alignSelf:'flex-start'}}>Weapon:</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:12,alignSelf:'center'}}>
                            Weapon is sepearted into seven sections <Text style={{fontWeight:'bold'}}> Great Sword/Long Sword </Text>, <Text style={{fontWeight:'bold'}}> Hammer/Hunting Horn </Text>, <Text style={{fontWeight:'bold'}}> Lance/Gunlance </Text>,
                            <Text style={{fontWeight:'bold'}}> Sword and Shield/Dual blades </Text>, <Text style={{fontWeight:'bold'}}> Heavy Bowgun </Text>, <Text style={{fontWeight:'bold'}}> Light Bowgun </Text> and <Text style={{fontWeight:'bold'}}> Bow </Text>.
                            Each section weapons will mainly display Attack, Zeni cost, elemental effect, Affinity and other depending on which weapons are selected.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

