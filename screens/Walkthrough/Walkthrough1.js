import { View, Image } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SIZES, constants } from '../../constants'

const ITEM_WIDTH = 120

const Walkthrough1 = () => {

    // Image Row 1 Scroll Animation
    const [row1Images, setRow1Images] = useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images
    ])

    //for animation
    const [currentPosition, setCurrentPosition] = useState(0)


    // Image Row 2 Scroll Animation
    const [row2Images, setRow2Images] = useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images
    ])

    //for animation
    const [row2CurrentPosition, setRow2CurrentPosition] = useState(0)

    // Reference variable for flatlist
    const row1FlatListRef = React.useRef()
    const row2FlatListRef = React.useRef()

    React.useEffect(() => {
        //automatic scolling
        let positionTimer;
        const timer = () => {
            positionTimer = setTimeout(() => {
                //Increment  scoll pos with each new interval

                //Slider 1
                setCurrentPosition(prevPosition => {
                    //Get new position for scoll bar
                    const position = Number(prevPosition) + 1;

                    //scroll to new position
                    row1FlatListRef?.current?.scrollToOffset({ offset: position, animated: false })

                    //endless scroll
                    const maxOffset = constants.walkthrough_01_01_images.length * ITEM_WIDTH

                    //slider scrolled beyond the max 
                    if (prevPosition > maxOffset) {
                        const offset = prevPosition - maxOffset;

                        row1FlatListRef?.current?.scrollToOffset({ offset, animated: false })

                        return offset
                    } else {
                        return position
                    }
                })

                //Slider 2

                setRow2CurrentPosition(prevPosition => {
                    const position = Number(prevPosition) + 1;

                    row2FlatListRef?.current?.scrollToOffset({
                        offset:
                            position, animated: false
                    })
                    
                    const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH

                    if (prevPosition > maxOffset) {
                        const offset = prevPosition - maxOffset;

                        row2FlatListRef?.current?.scrollToOffset({
                            offset,
                            animated: false
                        })

                        return offset
                    } else {
                        return position
                    }

                })

                timer();
            }, 32) //trigger this method on 32 seconds
        }

        timer();

        //cleanup
        return () => {
            clearTimeout(positionTimer);
        }

    }, [])

    return (
        <View>
            {/* Slider 1 */}

            <FlatList
                ref={row1FlatListRef}
                decelerationRate="fast"
                scrollEnabled={false}
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider1"
                // keyExtractor={(_, index) => { `Slider1_` + index + Math.random().toString() }}
                keyExtractor={(_, index) => `Slider1_${index}`}
                data={row1Images}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >

                            <Image
                                source={item}
                                style={{
                                    width: 110,
                                    height: 110
                                }}
                            />

                        </View>
                    )
                }}

            />

            {/* Slider 2 */}
            <FlatList
                ref={row2FlatListRef}
                decelerationRate="fast"
                style={{
                    marginTop: SIZES.padding,
                    transform: [{rotate: "180deg"}]
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider2"
                scrollEnabled={false}
                
                keyExtractor={(_, index) => `Slider2_${index}`}
                data={row2Images}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems: 'center',
                                justifyContent: 'center',
                                transform:[{rotate: "180deg"}]
                            }}
                        >

                            <Image
                                source={item}
                                style={{
                                    width: 110,
                                    height: 110
                                }}
                            />

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Walkthrough1