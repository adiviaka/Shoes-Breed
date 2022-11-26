import { faBolt, faCartShopping, faHome, faHomeAlt, faList, faShoePrints, faSkull, faUserAlt, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Product from './Product';
import About from './About';

const BottomTab = createBottomTabNavigator();

const TabBawah = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faHomeAlt} /> }} />
      <BottomTab.Screen name="Product" component={Product} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faList} /> }} />
      <BottomTab.Screen name="About" component={About} options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faUserAlt} /> }} />
    </BottomTab.Navigator>
  );
};

export default TabBawah;
