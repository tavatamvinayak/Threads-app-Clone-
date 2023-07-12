import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

// vector icons
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "../tabs/Home";
import Search from "../tabs/Search";
import Notification from "../tabs/Notification";
import Account from "../tabs/Account";
import { useNavigation } from "@react-navigation/native";


const Main = () => {
    const [selectedTab, setSelectedTab] = useState(0)


const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1">
            {/* Tabs Components */}
            { selectedTab===0 ? <Home/>:selectedTab===1 ? <Search/>:selectedTab===3 ? <Notification/> : <Account/>  }

        {/* Tabs */}
      <View className="absolute bottom-0 py-2 bg-white w-full h-[60] justify-evenly flex-row items-center ">
        {/* Home */}
        <TouchableOpacity onPress={()=>setSelectedTab(0)} className="w-[100%] h-full justify-center items-center">
          <Entypo name="home" size={35} color={ selectedTab===0 ? "black":"gray"} />
        </TouchableOpacity>
        {/* search */}
        <TouchableOpacity onPress={()=>setSelectedTab(1)} className="w-[100%] h-full justify-center items-center">
          <AntDesign name="search1" size={30} color={ selectedTab===1 ? "black":"gray"} />
        </TouchableOpacity>
        {/* edit & using navigation */}
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("NewThread");
          }}
           className="w-[100%] h-full justify-center items-center"> 
          <Feather name="edit" size={30} color={ selectedTab===2 ? "black":"gray"} />
        </TouchableOpacity>
        {/* heart */}
        <TouchableOpacity onPress={()=>setSelectedTab(3)} className="w-[100%] h-full justify-center items-center">
        { selectedTab===3 ? <AntDesign name="heart" size={30} color="red" />  : <AntDesign name="hearto" size={30} color={ selectedTab===3 ? "black":"gray"}/>}
        </TouchableOpacity>
        {/* account */}
        <TouchableOpacity onPress={()=>setSelectedTab(4)} className="w-[100%] h-full justify-center items-center">
          <MaterialCommunityIcons name="account" size={40} color={ selectedTab===4 ? "black":"gray"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;
