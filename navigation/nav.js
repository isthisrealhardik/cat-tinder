import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/main';
import All from '../screens/all';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        // tabBarStyle={{ backgroundColor: '#d4a373',  }}
        screenOptions={{
            tabBarActiveTintColor: '#d4a373',
            // tabBarInactiveTintColor: 'gray',
            // tabBarIconStyle: { display: 'none' },
            tabBarStyle: { backgroundColor: '#fefae0', borderWidth: 0 }
          }}
    >
      <Tab.Screen name="Main" options={{ headerShown: false }} component={Main} />
      <Tab.Screen name="All" options={{ headerShown: false }} component={All} />
    </Tab.Navigator>
  );
}

export default MyTabs;