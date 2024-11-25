import { StyleSheet } from "react-native";
// import { colorPalette } from "./palette";

const darkBlue = "#324760"
const mediumBlue = "#5a7596"
const mediumGray = "#8f8e8e"
const white = "#000000"


export const colorPalette = {
    primary: darkBlue, 
    secondary: mediumBlue,
    accent: "#ffffff",
    background: white,
    
}

export const styles = StyleSheet.create({

    homeScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorPalette.primary
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

})