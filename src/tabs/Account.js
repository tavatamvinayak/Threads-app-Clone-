import { View, Text, SafeAreaView, Image, Linking,  TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Threads from "../components/Profile/Threads";
import Replies from "../components/Profile/Replies";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation=useNavigation()
  const [Tab, setTab] = useState(0)

  const LinkPress = useCallback(async () => {
    const url="http://google.com"
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: `);
    }
  }, []);

  const ThreadsPress=()=>{
    setTab(0)
  }
  const RepliesPress=()=>{
    setTab(1)
  }

  return (
    <SafeAreaView className="flex-1 p-5 ">
      <View className="flex-row justify-between">
        <AntDesign name="earth" size={24} color="black" />
        <View className="flex-row w-20 justify-between">
          <AntDesign name="instagram" size={24} color="black" />
          <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
          <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile details */}
      <View className="mt-8">
        <View className="flex-row justify-between items-center">
          <View>
          <View className="mx-1 flex-row items-center">
          <Text className="text-2xl font-extrabold">Vinayak tavatam</Text>
                    <Image source={{
                      uri:"https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                    }} className="w-[20] h-[20] ml-1" />
                  </View>
           
            <Text className="mx-1" name="useName">
              Vishaltavatam
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://w0.peakpx.com/wallpaper/741/89/HD-wallpaper-taylor-missamericana-americana-cover-life-lover-miss-netflix-rep-swift-taylor-swift-thumbnail.jpg",
              }}
              className="w-[100] h-[100] rounded-full"
            />
          </View>
        </View>
        {/* description user bio */}
        <View className="w-[75%]">
          <Text>
            i f f f f f f d asd sa d asd d sd sd sd asd sd sd ds dsf d sf dsf
            dsf sdf sdf df dfs
          </Text>
        </View>
        {/* followers */}
        <View>
          <View className="flex-row mt-3">
            <View className="">
              <Ionicons name="person-circle" size={24} color="black" />
            </View>
            <View className="-ml-3">
              <Ionicons name="person-circle" size={24} color="black" />
            </View>
            <View className="-ml-3 ">
              <Ionicons name="person-circle" size={24} color="black" />
            </View>

            {/* followers */}
            <TouchableOpacity onPress={()=>navigation.navigate("Followers")}><Text>12 Followers -</Text></TouchableOpacity>
              <TouchableOpacity onPress={LinkPress}>
                <Text> https://Vishaltavatam.com</Text>
              </TouchableOpacity>
          </View>
          {/* edit share */}
          <View className="flex-row justify-between py-4">
            <TouchableOpacity className="px-12 py-2 border border-gray-300 rounded-xl"  ><Text className="font-bold ">Edit Profile</Text></TouchableOpacity>
            <TouchableOpacity className="px-12 py-2 border border-gray-300 rounded-xl"  ><Text className="font-bold">Share Profile</Text></TouchableOpacity>
          </View>
        </View>


      </View>

        {/* Treands and Replies  */}
          <View className="flex-row justify-center ">
            <TouchableOpacity onPress={ThreadsPress} className={`items-center py-3 w-[50%] ${ Tab===0 ? "border-b-2 " : "opacity-30 "} `}>
                <Text className="text-5 font-bold">Threads</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RepliesPress} className={`items-center py-3 w-[50%] ${ Tab===1 ? "border-b-2" : " opacity-30" }`}>
                <Text className="text-5 font-bold">Replies</Text>
            </TouchableOpacity>
          </View>
              {/* components Treads & Replies */}
          <View className="py-5">
                {
                  Tab===0 ? <Threads />: <Replies/>
                }
          </View>
    </SafeAreaView>
  );
};






export default Account;
