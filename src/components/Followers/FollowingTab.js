import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const FollowingTab = () => {
  return (
    <SafeAreaView className="p-5">
      <Text className="text-1 mb-5 opacity-30  text-center ">68 Following See others you're following on instagram that {"\n"} you're not following on Thread yet. See all </Text>
      <View className="w-[100%] h-[45] rounded-xl px-2 bg-gray-200 flex-row items-center">
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder="Search people" className="mx-3 w-[85%]" />
      </View>


      {/* Accounts & profiles */}
      <View className="h-[90%]"> 
     <ScrollView showsVerticalScrollIndicator={false}>     

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,54,45,78,75,23,42,56,25].map((i) => (
          <View className="flex-row justify-between mt-5" key={i}>
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: "https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg",
                }}
                className="w-[50] h-[50] rounded-full"
              />

              <View className="ml-5">
              <View className="flex-row items-center">
                  <Text className="font-bold">Vinayaktavatam</Text>
                  <View className="mx-1">
                    <Image source={{
                      uri:"https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                    }} className="w-[20] h-[20]" />
                  </View>
                </View>
                <Text>vishal tavatam</Text>
              </View>
            </View>
            <View className="opacity-40">
              <TouchableOpacity className="px-6 py-2 border rounded-xl  items-center" onPress={()=>{}}>
                <Text>Following</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default FollowingTab