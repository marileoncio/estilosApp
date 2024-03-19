import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    {id: "1", nome: "Josefa", idade: "60", email: "josefina.email.com"},
    {id: "2", nome: "Julio", idade: "35", email: "julio.email.com"},
    {id: "3", nome: "Leticia", idade: "40", email: "leticia.email.com"},
    {id: "4", nome: "Josefa", idade: "60", email: "josefina.email.com"},
    {id: "5", nome: "Julio", idade: "35", email: "julio.email.com"},
    {id: "6", nome: "Leticia", idade: "40", email: "leticia.email.com"},
    {id: "7", nome: "Josefa", idade: "60", email: "josefina.email.com"},
    {id: "8", nome: "Julio", idade: "35", email: "julio.email.com"},
    {id: "9", nome: "Leticia", idade: "40", email: "leticia.email.com"},
    {id: "10", nome: "Josefa", idade: "60", email: "josefina.email.com"},
    {id: "11", nome: "Julio", idade: "35", email: "julio.email.com"},
    {id: "12", nome: "Leticia", idade: "40", email: "leticia.email.com"}
];

const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.idade}</Text>
        <Text>{item.email}</Text>
    </TouchableOpacity>
);

function FlatListExample(): React.JSX.Element{
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF007F" barStyle='light-content' />
        <View style={styles.header}>
            <Text style={styles.headerText}>Mary Jane</Text>
        </View>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
            />
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('./assets/images/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/images/orders.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/images/profile.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#FDA4BA',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderWidth: 2
    },
    header: {
        backgroundColor:'#D62598',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#D62598',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width:30,
        height: 30
    }
})

export default FlatListExample;