import * as React from "react";
import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopBarContainer from "../components/TopBarContainer";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ScreenCheckout = () => {
  return (
    <View style={styles.screenCheckout}>
      <View style={styles.checkoutScroll}>
        <StatusBar barStyle="default" translucent={true} />
        <TopBarContainer
          logoId={require("../assets/up2.png")}
          pageNameId="Checkout"
        />
        <LinearGradient
          style={[styles.coWalletCard, styles.navbarSpaceBlock]}
          locations={[0, 0.61, 1]}
          colors={["#ffe367", "rgba(255, 246, 204, 0.65)", "#ffefaa"]}
          useAngle={true}
          angle={127.2}
        >
          <View>
            <Text style={[styles.walletBalance, styles.walletClr]}>
              Wallet balance
            </Text>
            <Text style={[styles.text, styles.textTypo]}>₹ 60,000</Text>
          </View>
        </LinearGradient>
        <View style={styles.coText}>
          <Text style={[styles.willBeDeductedContainer, styles.textTypo]}>
            <Text style={styles.text1}>{`₹59,451
`}</Text>
            <Text style={styles.willBeDeducted}>
              will be deducted from your wallet
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.btAction, styles.navbarShadowBox]}>
        <View style={[styles.btButton, styles.btButtonShadowBox]}>
          <Text style={[styles.buyToken, styles.textTypo]}>Buy Token</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  walletClr: {
    color: Color.gray_200,
    textAlign: "left",
  },
  textTypo: {
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    color: Color.gray_200,
  },
  navbarShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "flex-end",
    flexDirection: "row",
  },
  btButtonShadowBox: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
  },
  walletBalance: {
    fontSize: FontSize.tBLabel_size,
    fontWeight: "600",
    fontFamily: FontFamily.tSLabel,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.tBHeadline_size,
    textAlign: "left",
  },
  coWalletCard: {
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: "#ffefaa",
    borderWidth: 1,
    backgroundColor: Color.cardGradient,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.tBHeadline_size,
  },
  willBeDeducted: {
    fontSize: FontSize.tSBTitle_size,
  },
  willBeDeductedContainer: {
    textAlign: "center",
    flex: 1,
  },
  coText: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  checkoutScroll: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  buyToken: {
    fontSize: FontSize.tBBody_size,
    textAlign: "left",
  },
  btButton: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.yellow500,
    paddingHorizontal: Padding.p_47xl,
    justifyContent: "space-between",
    paddingVertical: Padding.p_3xs,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  btAction: {
    width: 375,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 10,
    backgroundColor: Color.white,
  },
  screenCheckout: {
    backgroundColor: Color.grey95,
    width: "100%",
    height: 402,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ScreenCheckout;
