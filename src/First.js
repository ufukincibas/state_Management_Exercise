import React, { useState } from "react";
import {View , Text, TextInput, Button} from "react-native"

import { useDispatch } from "react-redux";



function First(){
    const [text , setText] = useState("");
    
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({type : 'ADD_NAME', payload:{name: text}}) //name e text i gonder
    }
    const Clear = () => {
        dispatch({type : "CLEAN_LIST"})
    }

    return(
    <View>
        <Text style={{fontSize:30}}>Hi From First</Text>
        <View style={{borderWidth:1 , padding: 5 , margin:10, borderColor:"#e0e0e0"}}>
            <TextInput value={text} onChangeText={setText} placeholder="isim giriniz" />
        </View>
        <Button title= "ekle..." onPress={handleAdd}/>
        <Button title= "Temizle" onPress={Clear}/>
    </View>
    )
}

export default First;