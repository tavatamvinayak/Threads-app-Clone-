import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const NewThread = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className="p-5">
        <View className="flex-row justify-between  pb-5">
           <TouchableOpacity onPress={()=>navigation.navigate('Main')}> 
           <Text>Cancel</Text>
           </TouchableOpacity>
            <Text className="text-xl font-bold">New Thread</Text>
            <Text> </Text>
        </View>
        <View className="border-b-2 w-[100%] opacity-20 h-1"></View>

            {/* new Input add */}
            <View className="py-4 flex-row items-center">
                <Image source={{
                    uri:"https://w0.peakpx.com/wallpaper/839/32/HD-wallpaper-taylor-swift-2021-fearless-taylor-swift-thumbnail.jpg"
                }} className="w-[55] h-[55] rounded-full" />
                <View className="ml-5">
                    <Text className="font-bold text-lg">vinayaktavatam</Text>
                    <TextInput placeholder='start a thread' multiline className="w-[300]"  />
                    <Ionicons name="attach" size={24} color="black" />
                </View>
            </View>
    </SafeAreaView>
  )
}

export default NewThread