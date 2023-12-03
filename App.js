import { View, StyleSheet } from "react-native";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import Navigation from "./Navigation"; // Import your Navigation component

const App = () => {
  return (
      <Navigation />
  );
};
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
