import { DefaultTheme } from "@react-navigation/native";
import CustomColors from "../config/CustomColors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: CustomColors.primary,
        background: CustomColors.white,

    }
};