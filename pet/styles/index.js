import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Tela: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Logo:{
        width: 200, 
        height: 200
    },
    backgroundPattern: {
        backgroundColor: "#FFEFC5"
    },
    colorFont: {
      color: "#616161"
    },
    header: {
        fontSize: 26,
        textAlign: "center",
        fontWeight: "bold"
    },
    input:{
        height: 40,
        marginTop: 7,
        borderWidth: 1,
        padding: 10,
        width: 275,
        backgroundColor: "#E9E5E5",
        borderColor: "#B2ADAD",
        borderRadius: 15
    },
    button:{
        width: 275,
        borderRadius: 30,
        marginTop: 12,
        backgroundColor: "#FFBD3E",
        padding: 6
    },
    buttonSecondary:{
        width: 275,
        borderRadius: 30,
        marginTop: 12,
        backgroundColor: "#FFDC6E",
        padding: 6
    },
    buttonText: {
        fontSize: 24,
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
    linkPadrao: {
        color: "#616161",
        textDecorationLine: "underline",
        fontSize: 16
    },
    viewIn: {
        flex: 15,
        width: 100+"%",
        alignItems: "center",
        backgroundColor: "#FFEFC5",
        justifyContent: "center"
    },
    flat: {
        width: 100 +"%"
    }
});

export default styles;