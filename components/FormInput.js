import { View, Text } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from "../constants"
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens'
import { TextInput } from 'react-native-gesture-handler'

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLength,
    placeholderTextColor = COLORS.grey60
}) => {
    return (
        <View
            style={{
                ...containerStyle
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    height: 55,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGrey,                                      
                    ...inputContainerStyle
                }}
            >
                {prependComponent}
                <TextInput style={{
                    flex:1,
                    paddingVertical: 0,
                    ...FONTS.body3,
                    ...inputStyle,
                    color: COLORS.dark // added due to showing white color
                }}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                keyboardType = {keyboardType}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                maxLength = {maxLength}
                onChange={(text)=>onChange(text)}
                onPressIn={onPress}
                editable={editable}
                />

                {appendComponent}

            </View>          
        </View>
    )
}

export default FormInput