import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "./src/components/BottomTabBar";
import HomeScreen from "./src/screens/HomeScreen";
import DeviceControlScreen from "./src/screens/DeviceControlScreen";
import { MediaGallery } from "./src/screens/MediaScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Media" component={MediaGallery} />
        <Tab.Screen name="Device Controls" component={DeviceControlScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
