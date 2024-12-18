import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="(tabs)" 
        options={{
          headerTitle: "ExpoTest",
          headerLeft: () => <></>,
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{
          headerTitle: "About",
        }} 
      />
      <Tabs.Screen 
        name="+not-found" 
        options={{
          headerTitle: "Whoopsy Daisy!",
        }} 
      />
    </Tabs>
  );
}
