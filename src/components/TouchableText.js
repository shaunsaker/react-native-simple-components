import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

export default (TouchableText = props => {
    /*
        PROPTYPES

        text: PropTypes.string.isRequired,
        handlePress: PropTypes.func.isRequired,
        handleLongPress: PropTypes.func,
        disabled: PropTypes.string,
        isLink: PropTypes.bool,

        // style: PropTypes.node,
        // textStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

    const linkStyles = props.isLink && styles.linkText;

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                props.disabledStyle ? props.disabledStyle : styles.disabled,
                props.style,
            ]}>
            <Text style={[styles.text, linkStyles, props.textStyle]}>
                {props.text}
            </Text>
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            onLongPress={props.handleLongPress}
            style={[styles.button, props.style]}>
            <Text style={[styles.text, linkStyles, props.textStyle]}>
                {props.text}
            </Text>
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
    },
    linkText: {
        textDecorationLine: "underline",
    },
});
