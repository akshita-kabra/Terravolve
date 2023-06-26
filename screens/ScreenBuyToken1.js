import * as React from "react";
import { StatusBar, StyleSheet, Image, Text, View } from "react-native";
import TopBarContainer from "../components/TopBarContainer";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ScreenBuyToken1 = () => {
  return (
    <View style={[styles.screenBuyToken1, styles.cardGraphChildLayout]}>
      <StatusBar
        style={styles.btButtonSpaceBlock}
        barStyle="default"
        translucent={true}
      />
      <View style={[styles.btScroll, styles.agreementFlexBox]}>
        <TopBarContainer
          logoId={require("../assets/up2.png")}
          pageNameId="Token Details"
        />
        <View style={[styles.btCard, styles.btCardShadowBox]}>
          <View style={styles.cardTop}>
            <Image
              style={styles.btPropImgIcon}
              resizeMode="cover"
              source={require("../assets/btpropimg.png")}
            />
            <View>
              <View>
                <View>
                  <View style={styles.name}>
                    <Text style={[styles.parkViewVillas, styles.textTypo1]}>
                      Park View Villas
                    </Text>
                  </View>
                  <Text style={[styles.aundhStreetIndore, styles.wallet1Typo]}>
                    Aundh Street, Indore
                  </Text>
                </View>
                <View style={[styles.type, styles.typeLayout]}>
                  <Text style={[styles.residential, styles.text1Typo]}>
                    Residential
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cardFlexBox}>
            <View>
              <View style={[styles.btReturnLink, styles.linkBorder]}>
                <Text style={[styles.aundhStreetIndore, styles.wallet1Typo]}>
                  Current Return
                </Text>
              </View>
              <View style={styles.btReturnNo}>
                <Text style={[styles.text, styles.textTypo1]}>11%</Text>
                <View style={styles.btGrowth}>
                  <Image
                    style={styles.returnGrowthIcon}
                    resizeMode="cover"
                    source={require("../assets/returngrowth.png")}
                  />
                  <Text style={[styles.text1, styles.text1Typo]}>4%</Text>
                </View>
              </View>
            </View>
            <View style={styles.btCardInfoChild} />
            <View style={styles.cardGraph}>
              <View style={[styles.btGraphLink, styles.linkBorder]}>
                <Text style={[styles.aundhStreetIndore, styles.wallet1Typo]}>
                  Last three months
                </Text>
              </View>
              <Image
                style={[styles.cardGraphChild, styles.cardGraphChildLayout]}
                resizeMode="cover"
                source={require("../assets/vector-66.png")}
              />
            </View>
            <View style={styles.btCardInfoChild} />
            <View>
              <View style={[styles.btReturnLink, styles.linkBorder]}>
                <Text style={[styles.aundhStreetIndore, styles.wallet1Typo]}>
                  Timeline
                </Text>
              </View>
              <Text style={[styles.yrs, styles.textTypo1]}>
                <Text style={styles.text2}>{`2 `}</Text>
                <Text style={styles.yrs1}>yrs</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.btCardToken, styles.cardFlexBox]}>
            <View style={styles.btEnterToken}>
              <Image
                style={[styles.leftIncreaseIcon, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../assets/left-increase.png")}
              />
              <View style={styles.btFill} />
              <Image
                style={[styles.leftIncreaseIcon1, styles.leftIconLayout]}
                resizeMode="cover"
                source={require("../assets/left-increase1.png")}
              />
            </View>
            <Text style={[styles.x, styles.textTypo1]}>X</Text>
            <Text style={[styles.text3, styles.textTypo1]}>₹10,000</Text>
          </View>
        </View>
        <View style={[styles.btPdAgreement, styles.navbarSpaceBlock]}>
          <Image
            style={styles.btPdCheckIcon}
            resizeMode="cover"
            source={require("../assets/btpdcheck.png")}
          />
          <View style={styles.btPdAgreement1}>
            <Text
              style={[styles.andThe, styles.andThePosition]}
            >{`and the `}</Text>
            <Text
              style={[styles.iAgreeTo, styles.iAgreeToPosition]}
            >{`I agree to the `}</Text>
            <View style={[styles.privacyPolicy, styles.iAgreeToPosition]}>
              <Text style={[styles.privacyPolicy1, styles.text1Typo]}>
                Privacy Policy
              </Text>
            </View>
            <View style={[styles.investmentAgreement, styles.andThePosition]}>
              <Text
                style={[styles.investmentAgreement1, styles.text1Typo]}
              >{`Investment Agreement `}</Text>
            </View>
          </View>
        </View>
        <View style={styles.btPriceDetails}>
          <View style={styles.cardTop}>
            <Text style={[styles.text3, styles.textTypo1]}>Price Details</Text>
            <View style={[styles.priceBreakdownLink, styles.linkBorder]}>
              <Text style={[styles.priceBreakdown, styles.wallet1Typo]}>
                + price breakdown
              </Text>
            </View>
          </View>
          <View style={styles.btPdRow2}>
            <Text style={[styles.priceBreakdown, styles.wallet1Typo]}>
              Token Amount
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>50,000</Text>
          </View>
          <View style={styles.btPdRow2}>
            <Text style={[styles.priceBreakdown, styles.wallet1Typo]}>
              Platform Fees
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>1451</Text>
          </View>
          <View style={styles.btPdRow2}>
            <Text style={[styles.priceBreakdown, styles.wallet1Typo]}>
              Taxes and Charges
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>8000</Text>
          </View>
          <View style={styles.btPdRow2}>
            <Text style={[styles.x, styles.textTypo1]}>Total</Text>
            <Text style={[styles.x, styles.textTypo1]}>₹ 59,451</Text>
          </View>
        </View>
      </View>
      <View style={[styles.btAction, styles.btActionShadowBox]}>
        <View style={styles.walletBalanceNf}>
          <Text style={[styles.balanceAvailable, styles.wallet1Typo]}>
            Balance Available:
          </Text>
          <Text style={[styles.text8, styles.textTypo]}>₹60,000</Text>
        </View>
        <View style={[styles.btButton, styles.btActionShadowBox]}>
          <Text style={[styles.buyToken, styles.textTypo1]}>Buy Token</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardGraphChildLayout: {
    width: "100%",
    overflow: "hidden",
  },
  btButtonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    justifyContent: "space-between",
  },
  agreementFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  btCardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.18)",
    elevation: 10,
    shadowRadius: 10,
    backgroundColor: Color.white,
  },
  textTypo1: {
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    textAlign: "left",
  },
  wallet1Typo: {
    fontFamily: FontFamily.tRBody,
    textAlign: "left",
  },
  typeLayout: {
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  text1Typo: {
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
  },
  linkBorder: {
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
  },
  cardFlexBox: {
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  leftIconLayout: {
    width: 27,
    height: 41,
  },
  navbarSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  andThePosition: {
    top: 1,
    position: "absolute",
  },
  iAgreeToPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.black,
    fontFamily: FontFamily.tRBody,
  },
  btActionShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
  },
  btPropImgIcon: {
    width: 133,
    height: 100,
    overflow: "hidden",
  },
  parkViewVillas: {
    fontSize: FontSize.tSBTitle_size,
    textAlign: "left",
    color: Color.gray_200,
  },
  name: {
    paddingRight: Padding.p_9xs,
    borderBottomWidth: 1,
    borderColor: "#171618",
    borderStyle: "solid",
    flexDirection: "row",
  },
  aundhStreetIndore: {
    fontSize: FontSize.tSLabel_size,
    color: Color.gray_200,
  },
  residential: {
    color: Color.gray_100,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
  },
  type: {
    backgroundColor: Color.blue900,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    marginTop: 10,
  },
  cardTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  btReturnLink: {
    borderColor: "#171618",
    borderStyle: "dashed",
  },
  text: {
    fontSize: FontSize.tMBTitle_size,
    textAlign: "left",
    color: Color.gray_200,
  },
  returnGrowthIcon: {
    width: 10,
    height: 10,
  },
  text1: {
    color: Color.highlightsCorrect,
    display: "flex",
    width: 16,
    height: 9,
    marginLeft: 4,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
    alignItems: "center",
  },
  btGrowth: {
    marginLeft: 11,
    flexDirection: "row",
  },
  btReturnNo: {
    flexDirection: "row",
    alignItems: "center",
  },
  btCardInfoChild: {
    backgroundColor: Color.blue800,
    width: 1,
    height: 40,
  },
  btGraphLink: {
    borderColor: "#171618",
    borderStyle: "dashed",
    alignSelf: "stretch",
  },
  cardGraphChild: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 28,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cardGraph: {
    width: 94,
  },
  text2: {
    fontSize: FontSize.tMBTitle_size,
  },
  yrs1: {
    fontSize: FontSize.tBLabel_size,
  },
  yrs: {
    textAlign: "left",
    color: Color.gray_200,
  },
  leftIncreaseIcon: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 41,
  },
  btFill: {
    borderColor: "#6ea9d6",
    borderWidth: 1,
    width: 109,
    height: 41,
    borderStyle: "solid",
    backgroundColor: Color.grey95,
  },
  leftIncreaseIcon1: {
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    height: 41,
  },
  btEnterToken: {
    flexDirection: "row",
  },
  x: {
    fontSize: FontSize.tBHeadline_size,
    color: Color.black,
    textAlign: "left",
  },
  text3: {
    color: Color.black,
    fontSize: FontSize.tMBTitle_size,
    textAlign: "left",
  },
  btCardToken: {
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  btCard: {
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_11xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  btPdCheckIcon: {
    width: 15,
    height: 15,
  },
  andThe: {
    left: 216,
    color: Color.black,
    fontSize: FontSize.tBLabel_size,
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
    textAlign: "left",
  },
  iAgreeTo: {
    top: 0,
    color: Color.black,
    fontSize: FontSize.tBLabel_size,
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
    textAlign: "left",
  },
  privacyPolicy1: {
    color: Color.black,
    fontSize: FontSize.tBLabel_size,
    textAlign: "left",
  },
  privacyPolicy: {
    top: 17,
    width: 79,
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "#171618",
    justifyContent: "center",
    alignItems: "center",
  },
  investmentAgreement1: {
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.tBLabel_size,
    alignSelf: "stretch",
  },
  investmentAgreement: {
    left: 80,
    width: 134,
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "#171618",
    justifyContent: "center",
    alignItems: "center",
  },
  btPdAgreement1: {
    width: 261,
    height: 33,
    marginLeft: 9,
  },
  btPdAgreement: {
    justifyContent: "center",
    alignItems: "center",
  },
  priceBreakdown: {
    fontSize: FontSize.tBBody_size,
    color: Color.black,
  },
  priceBreakdownLink: {
    borderColor: "#000",
    alignItems: "center",
  },
  text4: {
    fontSize: FontSize.tBBody_size,
  },
  btPdRow2: {
    marginTop: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  btPriceDetails: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xl,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  btScroll: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  balanceAvailable: {
    color: Color.black,
    fontSize: FontSize.tSLabel_size,
  },
  text8: {
    fontSize: FontSize.tSLabel_size,
  },
  walletBalanceNf: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buyToken: {
    fontSize: FontSize.tBBody_size,
    textAlign: "left",
    color: Color.gray_200,
  },
  btButton: {
    backgroundColor: Color.yellow500,
    shadowRadius: 8,
    elevation: 8,
    paddingHorizontal: Padding.p_47xl,
    marginTop: 20,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Padding.p_3xs,
  },
  btAction: {
    width: 375,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_base,
    justifyContent: "flex-end",
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
  },
  screenBuyToken1: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.grey95,
    width: "100%",
  },
});

export default ScreenBuyToken1;
