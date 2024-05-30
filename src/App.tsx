import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type Diceprops = PropsWithChildren<{
  imageurl: ImageSourcePropType;
}>;

const Dice = ({imageurl}: Diceprops): JSX.Element => {
  return (
    <View>
      <Image style={styles.imagecontainer} source={imageurl} />
    </View>
  );
};

function App(): JSX.Element {
  const [imagemine, setChangeImage] = useState<ImageSourcePropType>(DiceOne);

  const changeDice = () => {
    let randonNum = Math.floor(Math.random() * 6) + 1;
    switch (randonNum) {
      case 1:
        setChangeImage(DiceOne);
        break;
      case 2:
        setChangeImage(DiceTwo);
        break;
      case 3:
        setChangeImage(DiceThree);
        break;
      case 4:
        setChangeImage(DiceFour);
        break;
      case 5:
        setChangeImage(DiceFive);
        break;
      case 6:
        setChangeImage(DiceSix);
        break;
      default:
    }
  };

  return (
    <View style={styles.mainscreen}>
      <TouchableOpacity onPress={changeDice}>
        <Dice imageurl={imagemine} />
      </TouchableOpacity>
      <Pressable onPress={changeDice} style={styles.pressable}>
        <Text>Roll the Dice</Text>
        </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecontainer: {
    height: 200,
    width: 200,
  },
  pressable:
  {borderColor:"blue",  borderWidth: 2,  borderRadius: 8,   paddingVertical: 10,
    paddingHorizontal: 40,}
});


export default  App