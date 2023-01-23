import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, images } from '../../constants'
import { useDynamicAnimation, MotiImage } from 'moti'

const Walkthrough4 = ({ animate }) => {

    const motiImage1 = useDynamicAnimation(() => ({
        top: "30%",
        left: "25%"
    }))

    const motiImage2 = useDynamicAnimation(() => ({
        top: "45%",
        left: "15%"
    }))

    const motiImage3 = useDynamicAnimation(() => ({
        top: "58%",
        left: "25%"
    }))

    const motiImage4 = useDynamicAnimation(() => ({
        top: "61%",
        left: "40%"
    }))



    //only when the animate parameter is true animation should happen
    React.useEffect(() => {
        if (animate) {
            motiImage1.animateTo({
                top: "20%",
                left: "20%"
            })

            motiImage2.animateTo({
                top: "25%",
                left: "60%"
            })

            motiImage3.animateTo({
                top: "62%",
                left: "25%"
            })

            motiImage4.animateTo({
                top: "75%",
                left: "60%"
            })
        }

    }, [animate])

    return (
        <View style={{
            flex: 1,
            overflow: 'hidden',

        }}>

            <MotiImage
                state={motiImage1}
                source={images.walkthrough_04_01}
                style={styles.image}
            />

            <MotiImage
                state={motiImage2}
                source={images.walkthrough_04_02}
                style={styles.image}
            />
            <MotiImage
                state={motiImage3}
                source={images.walkthrough_04_03}
                style={styles.image}
            />

            <MotiImage
                state={motiImage4}
                source={images.walkthrough_04_04}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 86,
        height: 112,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})

export default Walkthrough4