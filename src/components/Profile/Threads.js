import { View, Text, ScrollView } from "react-native";
import React from "react";
import Tweets from "../Tweets/Tweets";

const Threads = () => {
  return (
    <View className="w-[100%] h-[71%]  ">
      {/* <View className="flex-1 justify-center items-center">
    <Text>You haven't posted any  replies yet </Text>
    </View> */}
    {/* user Post & Threads */}
        <View>
           <ScrollView showsVerticalScrollIndicator={false} >
           <Tweets/>
            <Tweets/>
            <Tweets/>
            <Tweets/>
           </ScrollView>
        </View>
    </View>
  );
};

export default Threads;
