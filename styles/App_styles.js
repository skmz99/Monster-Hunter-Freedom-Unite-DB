import {StyleSheet} from 'react-native';

const App_Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        // zIndex: 1
        // flexDirection: 'column',
        
    },
    left_half:{
        // flex: .1,
        backgroundColor: 'lightblue',
        marginTop: -16,
        justifyContent: 'center',
        alignItems: 'center'
   
    },
    text: {
        fontSize: 26,
        opacity: 1,
        color: 'black',        

    },
    button: {
        borderRadius: 10,
        backgroundColor: 'darkgray',
        left: 10,
        
    }
});

export {App_Styles};