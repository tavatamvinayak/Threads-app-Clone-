import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import Tweets from "../components/Tweets/Tweets";

const Home = () => {
  return (
    <SafeAreaView className="">
      <View className="pb-16">
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <Image
        source={require("./../../assets/threads-app-icon.png")}
        className="w-16 h-16 self-center"
      />
      
        {/* <FlatList
            data={[1,2,3,4,5,6]}
            getItem={({item})=>{
                return(
                    <View className="w-full">
                        <View className="w-full flex-row justify-between">
                            <View className="w-[50] h-[50]">
                            <MaterialCommunityIcons name="account-circle" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                )
            }}
            /> */}
        
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
            return (
             <Tweets key={item} />
            );
          })}
     
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Home;
