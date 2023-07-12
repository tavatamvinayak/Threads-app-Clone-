import { View, Text, SafeAreaView, Image, Linking,  TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Threads from "../components/Profile/Threads";
import Replies from "../components/Profile/Replies";

const ProfileTab = () => {
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
<SafeAreaView className="px-5 ">
<View className="flex-row justify-between">

<TouchableOpacity onPress={()=>navigation.navigate("Main")} >
<Ionicons name="arrow-back-outline" size={24} color="black" /> 
</TouchableOpacity> 

  <View className="flex-row w-20 justify-between">
    <Ionicons name="ios-notifications-outline" size={24} color="black" />   
      <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
      <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="black" />  
          </TouchableOpacity>
    </View>
  </View>

  {/* Profile details */}
  <View className="mt-8">
    <View className="flex-row justify-between items-center">
      <View>
        <Text className="text-3xl font-extrabold">Vinayak tavatam</Text>
        <Text className="" name="useName">
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
        <TouchableOpacity className="w-[100%] items-center py-2 border border-gray-300 rounded-xl"  ><Text className="font-bold ">Follow</Text></TouchableOpacity>
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
          <View className="">
                {
                  Tab===0 ? <Threads />: <Replies/>
                }
          </View>
</SafeAreaView>
  )
}

export default ProfileTab