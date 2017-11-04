import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

export default (ButtonLink = props => {
    /*
        PROPTYPES

        text: PropTypes.string.isRequired,
        handlePress: PropTypes.func.isRequired,
        disabled: PropTypes.string,

        // style: PropTypes.node,
        // textStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                props.disabledStyle ? props.disabledStyle : styles.disabled,
                props.style,
            ]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[styles.button, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </Touchable>
    );

    return button;
});

const styles = StyleSheet.create({
    button: {},
    disabled: {
        opacity: 0.33,
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
        textDecorationLine: "underline",
    },
});
