import React, { FC, useState } from "react";
import { StackNavigationProp } from '@react-navigation/stack';
import { ISessionStore } from "../../stores/interfaces";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Menu } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

interface IComponentProps {
    sessionStore?: ISessionStore;
}

const SettingsApp: FC<IComponentProps> = ({ sessionStore }) => {

    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const logout = () => {
        closeMenu();
        sessionStore?.logout();
    }

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
                <TouchableOpacity onPress={openMenu}>
                    <Ionicons name="options-outline" size={25} />
                </TouchableOpacity>
            }
        >
            <Menu.Item icon="power" onPress={logout} title="Cerrar Sesión" />
        </Menu>
    );
}

export default inject('sessionStore')(observer(SettingsApp));