import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SeacrhScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccount';
import {COLORS, FONTSIZE, FONTFAMILY, SPACING} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          height: SPACING.space_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="video"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SeacrhScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="search"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="ticket"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.Orange} : {},
              ]}>
              <CustomIcon
                name="video"
                color={COLORS.White}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.space_16,
    borderRadius: SPACING.space_16 * 10,
  },
});
