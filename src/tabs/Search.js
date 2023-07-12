import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import SearchAccountFollows from '../components/Accounts/SearchAccountFollows'

const Search = () => {
  return (
    <SafeAreaView className="p-5">
        <Text className="text-3xl font-extrabold mb-5">Search</Text>
        <View className="w-[100%] h-[45] rounded-xl px-2 bg-gray-200 flex-row items-center"> 
        <AntDesign name="search1" size={24} color="black" />
        <TextInput placeholder='Search people' className="mx-3 w-[85%]" />
        </View>

        {/* Search Users & peoples */}
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {
              [1,2,3,4,5,6,7,8,9,10,12,11,13,14,15].map((i)=><SearchAccountFollows key={i}/>)
            }
          </ScrollView>
            
        </View>
    </SafeAreaView>
  )
}

export default Search