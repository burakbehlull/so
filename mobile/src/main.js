import { StatusBar } from "expo-status-bar"
import Screens from "./components/Screens"

export default function Main(){
    return(
        <>
            <Screens />
            <StatusBar style="auto" />
        </>
    )
}