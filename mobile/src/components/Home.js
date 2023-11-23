import { View,Text,Linking } from "react-native";
import {Styles} from '../styles'

export default function Home(){

    function Github(){
        Linking.openURL('https://github.com/buvakbehlul')
    }

    function Medium(){
        Linking.openURL('https://medium.com/@buvakbehlul')
    }
    return(
        <>
            <View style={{padding: 27}}>
                <Text style={Styles.HeaderText}>Burak Behlül</Text>
                <Text style={Styles.HeaderSubText}>Fullstack Developer & Blogger.</Text>

                <Text style={Styles.ChapHeaderText}>HAKKIMDA</Text>
                <Text style={Styles.ChapText}>Bir yazılım geliştiricisiyim.
                Türkoloji'nin "Tarih" dalıyla ile ilgileniyorum.
                Yazılım okuyorum. Ayrıca hobi olarak Grafik yapıyorum.
                Yazılarımı Medium ve Blogspot'da yayınlıyorum.</Text>

                <View style={{flexDirection: 'row', gap: 140}}>
                    <Text onPress={Github} style={Styles.Link}>Github</Text>
                    <Text onPress={Medium} style={Styles.Link}>Medium</Text>
                </View>
            </View>
        </>
    )
}