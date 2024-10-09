import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FeedScreen = () => {

    const Navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdcarwallpapers.com%2Fwalls%2F2019_ford_series_1_mustang_rtr_4k-HD.jpg&f=1&nofb=1&ipt=55a5a91349bb8543ca153fefda321083dfbb3d9779572a3f56003deaeef06632&ipo=images' }} 
                style={styles.image}
            />
            <Text style={styles.title}>
                Conoce el nuevo mustang
            </Text>
            <Text style={styles.description}>
                Prueba el nuevo modelo que tenemos en agencia, te gustara, prueba gratuita.
            </Text>
            <TouchableOpacity 
                onPress={() => Navigation.navigate("Stack")}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        textAlign: "center",
                        color: "white",
                    }}
                >Go to Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 16, 
        textAlign: 'center',
        color: '#666', 
    },
});

export default FeedScreen;
