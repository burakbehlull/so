import { StatusBar } from "expo-status-bar"
import Screens from "./components/Screens"
import { SafeAreaView } from "react-native"

export default function Main(){
    return(
        <>
            <SafeAreaView style={{flex: 1, paddingTop: 25}}>
                <Screens />
                <StatusBar style="auto" />
            </SafeAreaView>
        </>
    )
}