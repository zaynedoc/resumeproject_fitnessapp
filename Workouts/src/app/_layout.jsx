import { Stack } from 'expo-router'; 
// Importing Stack from expo-router
// Stack is a component that provides a stack navigation layout for the app

export default function RootLayout() {
    return (
    <Stack>
        <Stack.Screen name = 'index' options = {{title: 'Exercises'}}/>

    </Stack>
    )
}