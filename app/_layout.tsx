import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: "ExpoTest",
        }} 
      />
      <Stack.Screen name="about" options={{title: "About"}} />
    </Stack>
  );
}
