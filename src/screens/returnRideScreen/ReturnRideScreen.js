import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR, TEXT_STYLE, hp, wp } from '../../data/StyleGuides'
import { AppHeader, Label, Pressable } from '../../components'
import { SVG } from '../../assets/svg'

const ReturnRideScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppHeader
        style={styles.header}
        leftComp={<Pressable onPress={() => navigation.goBack()}>
          <SVG.BackArrowActive />
        </Pressable>}
      />

      <Label style={styles.heading}>Coming back as well? Publish your return ride now!</Label>

      <Pressable style={styles.sureContainer}>
        <Label style={styles.sureText}>Yes, Sure!</Label>
        <SVG.ForwardIcon />
      </Pressable>

      <Pressable style={styles.noContainer}>
        <Label style={styles.noText}>No, thanks</Label>
        <SVG.ForwardIcon />
      </Pressable>
    </View>
  )
}

export default ReturnRideScreen

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: COLOR.purple,
    padding: wp(4),

  },
  heading: {
    ...TEXT_STYLE.title,
    marginHorizontal: wp(4),
    lineHeight: hp(3.25)
  },
  sureContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:wp(6),
    paddingBottom:hp(2.5),
    borderBottomWidth:1,
    borderColor:COLOR.lightGrey
  },
  sureText:{
    ...TEXT_STYLE.text,
    color:COLOR.blue
  },
  noContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:wp(6),
  },
  noText:{
    ...TEXT_STYLE.text,
    color:COLOR.lightGrey
  },
})