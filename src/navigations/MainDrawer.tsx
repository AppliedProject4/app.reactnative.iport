import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";

import { colors } from "../styles";

import DrawerContent from "../components/molecules/DrawerContent";

import MainPage from "../pages/Main";
import PostCreationPage from "../pages/PostCreation";
import { AppStackParamsList } from "./AppStack";
import ProfileStack from './ProfileStack';

export type DrawerParamsList = {
    MainPage: undefined;
    ProfileStack: undefined;
    PostCreationPage: undefined;
};

type DefaultLoginPageProps = StackScreenProps<AppStackParamsList, "Drawer">;

const { Navigator, Screen } = createDrawerNavigator<DrawerParamsList>();

export default function Drawer({ navigation }: DefaultLoginPageProps) {
    return (
        //#region JSX

        <Navigator
            initialRouteName="MainPage"
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerStyle={{
                width: "80%",
                backgroundColor: colors.vividPurple + "dd",
            }}
        >
            <Screen name="MainPage" component={MainPage} />
            <Screen name="PostCreationPage" component={PostCreationPage} />
            <Screen name="ProfileStack" component={ProfileStack} />
        </Navigator>

        //#endregion
    );
}
