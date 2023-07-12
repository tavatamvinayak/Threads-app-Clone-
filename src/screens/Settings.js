import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="p-5">
      <View className="flex-row justify-between">
      <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            className="pr-2"
          >  
          <View className="flex-row items-center">
          
           <View> 
            <MaterialCommunityIcons name="less-than" size={24} color="black" />
           </View>
          
          <Text className="text-xl">Back</Text>
        </View>
        </TouchableOpacity>
        <Text className="text-xl font-bold">Settings</Text>
        <Text> </Text>
      </View>

      {/* options settings */}
      <View className="py-5">
            <View className="flex-row my-4">
            <Ionicons name="person-add" size={24} color="black" /><Text className="mx-5">Follow and invite friends</Text>
            </View>
            <View className="flex-row my-4">
            <Ionicons name="notifications" size={24} color="black" /><Text className="mx-5">Notifications</Text>
            </View>
            <View className="flex-row my-4">
            <AntDesign name="lock" size={24} color="black" /><Text className="mx-5">Privecy</Text>
            </View>
            <View className="flex-row my-4">
            <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" /><Text className="mx-5">Account</Text>
            </View>
            <View className="flex-row my-4">
            <Feather name="help-circle" size={24} color="black" /><Text className="mx-5">Help</Text>
            </View>
            <View className="flex-row my-4">
            <AntDesign name="exclamationcircleo" size={24} color="black" /><Text className="mx-5">About</Text>
            </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
