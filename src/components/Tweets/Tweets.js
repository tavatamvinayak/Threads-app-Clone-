import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

// Context api
import CreateContext from "../../Context/createContext";
import { useNavigation } from "@react-navigation/native";

const Tweets = () => {

  const [Like, setLike] = useState(false);
  const navigation = useNavigation()
  return (
    <View className=" w-[100%] mt-2 border-b border-gray-300 pb-3">
      <View className="flex-row items-center">
        <View className="flex-row items-center w-[80%]">
          <View className="w-[18%]  opacity-40">
            <Image
              source={{
                uri: "https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg",
              }}
              className="w-[50] h-[50] rounded-full"
            />

            <View className="absolute top-8 right-0  ">
              <AntDesign name="pluscircle" size={15} color="black" />
            </View>
          </View>
          <View className="px-3 inline">
           <TouchableOpacity onPress={()=>navigation.navigate("UsersProfile")}>
           <Text className="font-extrabold">Vinayak tavatam</Text>
           </TouchableOpacity>
            {/* <Text>asdfakljsldk </Text> */}
          </View>
        </View>
        {/* mt-3 px-1 */}
        <View className=" flex-row">
          <Text className="pr-3">51 m</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>
      <View className="flex-row">
        <View className=" ml-7 mr-9 w-[2] bg-gray-300 h-[100%]"></View>
        <View className="w-[300]">
          <Text>
            als als als als als als als alsalsals alsals alsv als als asdfasdf
            asdfasdf asdf asd
          </Text>
          <View className="flex-1 justify-center items-center mt-2">
            {/* user Image */}
            <Image
              source={{
                uri: "https://w0.peakpx.com/wallpaper/189/489/HD-wallpaper-taylor-swift-red-2012-cover-taylor-swift-thumbnail.jpg",
              }}
              className="w-[100%] h-[200] rounded-lg"
            />
          </View>

          {/* Like commement share */}
          <View className="flex-row mt-2 px-2">
            <View className="mr-4">
              <TouchableOpacity onPress={() => setLike(true)}>
                {Like === true ? (
                  <AntDesign name="heart" size={24} color="red" />
                ) : (
                  <AntDesign name="hearto" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <View className="mr-4">
              <TouchableOpacity>
                <AntDesign name="message1" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View className="mr-4">
              <TouchableOpacity>
                <FontAwesome name="circle-thin" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <FontAwesome5 name="telegram-plane" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {/* replies likes */}
          <View className="mt-2">
            <Text className="opacity-30">15 replies - 139 likes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tweets;
