import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const AccountFollow = () => {
  return (
    <View className="flex-row justify-between mt-3">
      <View className="flex-row items-center">
        <Image
          source={{
            uri: "https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg",
          }}
          className="w-[50] h-[50] rounded-full"
        />

        <View className="ml-5">
          <View className="flex-row">
            <Text className="font-bold">Vinayaktavatam</Text>
            <Text className="opacity-30 mx-3">3h</Text>
          </View>
          <Text>Your just accepted</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity className="px-6 py-2 border rounded-xl  items-center">
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountFollow;
