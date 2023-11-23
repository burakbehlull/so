import { StatusBar } from "expo-status-bar"
import Screens from "./components/Screens"
import { SafeAreaView, View } from "react-native"
export default function Main(){
    return(
        <>
            <SafeAreaView style={{flex: 1,paddingTop: 25}} forceInset={{ top: 'never' }}>
                <Screens />
                <StatusBar style="auto" />
            </SafeAreaView>
        </>
    )
}