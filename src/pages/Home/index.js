import '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "../../routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}