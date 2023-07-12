import { View, Text,SafeAreaView, TouchableOpacity, ScrollView, _ScrollView } from 'react-native'
import React, { useState } from 'react'
import AccountFollow from '../components/Accounts/AccountFollow'

const Notification = () => {
  const [SelectedTab, setSelectedTab] = useState(0)
  return (
    <SafeAreaView className="p-5 ">
      <View>
      <Text className="text-4xl font-extrabold">Activity</Text>
      {/* Tabs */}
      <View className="pt-5 mb-2">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-2" >
            <TouchableOpacity onPress={()=>setSelectedTab(0)} className={`px-10 py-2 mr-2 rounded-xl border ${SelectedTab==0?"bg-black":" "} `}>
              <Text className={`${SelectedTab==0 ? "text-white":" "} `}>All</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setSelectedTab(1)} className={`px-6 py-2 mx-2 rounded-xl border ${SelectedTab==1?"bg-black":" "} `}>
              <Text className={`${SelectedTab==1 ? "text-white":" "} `} >Replies</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setSelectedTab(2)} className={`px-6 py-2 mx-2 rounded-xl border ${SelectedTab==2?"bg-black":" "} `}>
              <Text className={`${SelectedTab==2 ? "text-white":" "} `} >Mentions</Text> 
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setSelectedTab(3)} className={`px-6 py-2 mx-2 rounded-xl border ${SelectedTab==3 ? "bg-black":" " }`}>
              <Text className={`${SelectedTab==3 ? "text-white":" "} `} >Verified</Text> 
              </TouchableOpacity>
          </ScrollView>
      </View>

      {/* selected tab components view*/}
      <View>
      <ScrollView showsVerticalScrollIndicator={false}>
          {
            SelectedTab==0 ? ( [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((i)=><AccountFollow key={i}/>) )
              : SelectedTab==1 ? (<>
                <View>
                  <Text>no need to see Replies </Text>
                </View>
                </>) : SelectedTab==2 ? (<>
                <View>
                  <Text>no need to see Mentions </Text>
                </View>
                </>)  : SelectedTab==3 ? (<>
                <View>
                  <Text>no need to see Mentions</Text>
                </View>
                </>) :(<> </>)
            
          }
          </ScrollView>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Notification