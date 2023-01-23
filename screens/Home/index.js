import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'

import { FormInput, IconButton, TextButton } from '../../components'
import { COLORS, SIZES, FONTS, icons, constants, images } from "../../constants"
import { Shadow } from 'react-native-shadow-2'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Home = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingTop: SIZES.padding * 2,
          paddingBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
          backgroundColor: COLORS.primary,
          zIndex: 1
        }}
      >
        {/* //close Button */}
        <Image
          source={images.logo}
          style={{
            width: 30,
            height: 30,

            backgroundColor: 'white'

          }}
          resizeMode='cover'
        />

        {/* Title */}
        <Text
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.h2,            
          }}
        >
          Home
        </Text>

        <IconButton
          icon={icons.shoppingBag}
          onPress={() => navigation.goBack()}
        />
        <IconButton
          icon={icons.bell}
          onPress={() => navigation.goBack()}
        />
        <IconButton
          icon={icons.shoppingCart}
          onPress={() => navigation.goBack()}
        />
      </View>

    )
  }

  function renderSearch() {
    return (
    
          <View
            style={{width:SIZES.width, justifyContent:'center', 
            padding: 15,
            paddingRight:10,
          //flex: 1,
          // backgroundColor: COLORS.error60,
          paddingTop: SIZES.padding * 2,
          paddingBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.primary,          
            }}
          >           

            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={"handled"}
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                paddingBottom: 20
              }}
            >
              {/* Search  */}
              
              <FormInput
                containerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.error,                  
                }}
                placeholder="Search Product"              
                prependComponent={
                  <Image
                    source={icons.search}
                    style={{ width: 25, height: 25, marginRight: SIZES.base }}

                  />
                }
                onChange={()=>{console.log("Search Typed")}}
              />
              
              
            </KeyboardAwareScrollView>
            
          </View>
         
      
    )
  }
  return (

    <View
      style={{
        flex: 1,
      }}
    >
      {/* Header */}
      {renderHeader()}
      {renderSearch()}

      {/* Camera Section
      {renderCamera()}

      {/* Footer */}



    </View>
  )

}
const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    width: "100%",    
    backgroundColor: COLORS.light,    
  }
})

export default Home