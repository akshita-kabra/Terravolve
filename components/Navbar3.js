import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Navbar3 = ({ style }) => {
  return (
    <View style={[styles.navbar, style]}>
      <View style={styles.wallet}>
        <Image
          style={styles.walletIcon}
          resizeMode="cover"
          source={require("../assets/wallet1.png")}
        />
        <Text style={styles.wallet1}>Wallet</Text>
      </View>
      <View style={styles.wallet}>
        <Image
          style={styles.marketplaceActiveIcon}
          resizeMode="cover"
          source={require("../assets/marketplaceactive1.png")}
        />
        <Text style={styles.wallet1}>Marketplace</Text>
      </View>
      <View style={styles.wallet}>
        <Image
          style={styles.portfolioIcon}
          resizeMode="cover"
          source={require("../assets/portfolio1.png")}
        />
        <Text style={styles.wallet1}>Portfolio</Text>
      </View>
      <View style={styles.wallet}>
        <Image
          style={styles.walletIcon}
          resizeMode="cover"
          source={require("../assets/newsfeed1.png")}
        />
        <Text style={styles.wallet1}>Newsfeed</Text>
      </View>
      <View style={styles.wallet}>
        <Image
          style={styles.walletIcon}
          resizeMode="cover"
          source={require("../assets/profile1.png")}
        />
        <Text style={styles.wallet1}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  wallet1: {
    fontSize: FontSize.tSLabel_size,
    fontFamily: FontFamily.tRBody,
    color: Color.gray_200,
    textAlign: "left",
    marginTop: 6,
  },
  wallet: {
    alignItems: "center",
  },
  marketplaceActiveIcon: {
    width: 22,
    height: 22,
  },
  portfolioIcon: {
    width: 20,
    height: 22,
  },
  navbar: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.18)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default Navbar3;
