import * as SQLite from 'expo-sqlite'
import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset"

async function loadDatabase(){
    if(!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists){
        try{
            await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQLite", {intermediates: true});
        }catch(err){
            console.log(err)
        }
    }else{
        console.log('SQLite directory exits in ' + FileSystem.documentDirectory + "SQLite")
    }
    try{
        await FileSystem.downloadAsync(Asset.fromModule(require('./assets/database/MHFUDB.db')).uri,`${FileSystem.documentDirectory}SQLite/MHFUDB.db`)
    }catch(err){
        console.log(err)
    }   
}

export {loadDatabase}