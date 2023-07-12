import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchAccountFollows = () => {
  return (
    <View className="my-3 flex-row justify-between items-center">
      <View className="flex-row items-center ">
        <Image source={{
            uri:"https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg"
        }} className="w-[40] h-[40] rounded-full" />
        <View className="mx-3">
            <Text className="font-bold">Vinayak tavatam</Text>
            <Text className="opacity-30">Vinayak tavatam</Text>
            <View className="flex-row ">
               <View className="flex-row">
               <Image source={{
                    uri:"https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg"
                }} className="w-[20] h-[20] rounded-full" />
                <Image source={{
                    uri:"https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg"
                }} className="w-[20] h-[20] -ml-3 rounded-full" />
               </View>
               <Text className="mx-4">2.1M followers</Text>
            </View>
        </View>
      </View>
      <TouchableOpacity className="border px-5 py-1 rounded-xl">
        <Text>Follow</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchAccountFollows