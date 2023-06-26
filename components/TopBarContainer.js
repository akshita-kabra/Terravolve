import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TopBarContainer = ({ logoId, pageNameId }) => {
  return (
    <View style={[styles.topBar, styles.topBarFlexBox]}>
      <Image style={styles.logoIcon} resizeMode="cover" source={logoId} />
      <Text style={styles.marketplace}>{pageNameId}</Text>
      <View style={styles.topBarFlexBox}>
        <Image
          style={styles.wishlistIcon}
          resizeMode="cover"
          source={require("../assets/wishlist.png")}
        />
        <Image
          style={styles.bellIcon}
          resizeMode="cover"
          source={require("../assets/bell.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoIcon: {
    width: 20,
    height: 20,
  },
  marketplace: {
    fontSize: FontSize.tMBTitle_size,
    fontWeight: "700",
    fontFamily: FontFamily.tBLabel,
    color: Color.gray_200,
    textAlign: "center",
  },
  wishlistIcon: {
    width: 17,
    height: 22,
  },
  bellIcon: {
    width: 21,
    height: 24,
    marginLeft: 20,
  },
  topBar: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    justifyContent: "space-between",
  },
});

export default TopBarContainer;
