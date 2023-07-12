import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import StateContext from "./src/Context/StateContext";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* Context api */}
      <StateContext> 
        <>
          <AppNavigator />
        </>
      </StateContext>
    </>
  );
}
