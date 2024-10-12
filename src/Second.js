import React from "react";
import {View , Text , FlatList} from "react-native";
import { useSelector } from "react-redux";

function Second(){
    const list = useSelector(selector => selector.nameList) //nameList ten yakala list e gonder
    return(
        <View>
          <FlatList
          keyExtractor={(_ , index) => index.toString()}
          data={list}
          renderItem={({item}) => <Text>{item}</Text>}/>
        </View>
    )
}

export default Second;