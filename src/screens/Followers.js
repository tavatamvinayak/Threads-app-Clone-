import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import FollowersTab from "../components/Followers/FollowersTab";
import FollowingTab from "../components/Followers/FollowingTab";
import PendingTab from "../components/Followers/PendingTab";
import { useNavigation } from "@react-navigation/native";

const Followers = () => {
  const navigation = useNavigation();
  const [SelectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <View className="flex-row mt-5 items-center px-5">
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
          <Text className="mx-5 text-xl font-bold">vinayak_tavatam</Text>
        </View>
        <View className="flex-row w-[100%] ">
          <TouchableOpacity
            onPress={() => setSelectedTab(0)}
            className={`py-5 w-[33%] items-center border-b-2 ${
              SelectedTab == 0 ? "border-b-2 " : "opacity-30"
            } `}
          >
            <Text className="font-bold">Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab(1)}
            className={`py-5 w-[33%] items-center border-b-2 ${
              SelectedTab == 1 ? "border-b-2 " : "opacity-30"
            } `}
          >
            <Text className="font-bold">Following</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab(2)}
            className={`py-5 w-[34%] items-center border-b-2 ${
              SelectedTab == 2 ? "border-b-2 " : "opacity-30"
            } `}
          >
            <Text className="font-bold">Pending</Text>
          </TouchableOpacity>
        </View>
        <View>
          {SelectedTab == 0 ? (
            <FollowersTab />
          ) : SelectedTab == 1 ? (
            <FollowingTab />
          ) : (
            <PendingTab />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Followers;
