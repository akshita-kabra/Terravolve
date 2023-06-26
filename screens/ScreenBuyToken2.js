import * as React from "react";
import { StatusBar, StyleSheet, Image, Text, View } from "react-native";
import TopBarContainer from "../components/TopBarContainer";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const ScreenBuyToken2 = () => {
  return (
    <View style={styles.screenBuyToken2}>
      <View style={[styles.bt2Scroll, styles.bt2ScrollSpaceBlock]}>
        <StatusBar
          style={styles.navbarFlexBox}
          barStyle="default"
          translucent={true}
        />
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
                    <Text style={[styles.parkViewVillas, styles.yrsClr]}>
                      Park View Villas
                    </Text>
                  </View>
                  <Text style={[styles.aundhStreetIndore, styles.yrsClr]}>
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
              <View style={styles.btReturnLinkBorder}>
                <Text style={[styles.aundhStreetIndore, styles.yrsClr]}>
                  Current Return
                </Text>
              </View>
              <View style={styles.btReturnNo}>
                <Text style={[styles.text, styles.yrsClr]}>11%</Text>
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
            <View>
              <View style={styles.btReturnLinkBorder}>
                <Text style={[styles.aundhStreetIndore, styles.yrsClr]}>
                  Last three months
                </Text>
              </View>
              <Image
                style={styles.cardGraphChild}
                resizeMode="cover"
                source={require("../assets/vector-66.png")}
              />
            </View>
            <View style={styles.btCardInfoChild} />
            <View>
              <View style={styles.btReturnLinkBorder}>
                <Text style={[styles.aundhStreetIndore, styles.yrsClr]}>
                  Timeline
                </Text>
              </View>
              <Text style={[styles.yrs, styles.yrsClr]}>
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
            <Text style={[styles.x, styles.textTypo]}>X</Text>
            <Text style={[styles.text3, styles.textTypo]}>₹10,000</Text>
          </View>
        </View>
        <View style={[styles.btPdAgreement, styles.agreementFlexBox]}>
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
        <View style={[styles.btPriceDetails, styles.btActionShadowBox]}>
          <View style={styles.btPdRow1}>
            <Text style={[styles.priceDetails, styles.textTypo]}>
              Price Details
            </Text>
          </View>
          <View style={styles.btPdSec1SpaceBlock}>
            <View style={styles.btPbdHead}>
              <Text style={[styles.tokenAmount, styles.textTypo]}>
                Token Amount
              </Text>
              <Text style={[styles.text4, styles.textFlexBox]}>50,000</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Token Rate</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>10,000</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>No of Tokens</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>5</Text>
            </View>
            <View style={[styles.btPdSec1Child, styles.btPbdRow2SpaceBlock]} />
          </View>
          <View style={styles.btPdSec1SpaceBlock}>
            <View style={styles.btPbdHead}>
              <Text style={[styles.tokenAmount, styles.textTypo]}>Fees</Text>
              <Text style={[styles.text4, styles.textFlexBox]}>1451</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Convenience Fees</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Management Fees</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>451</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Acquisition Fees</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPdSec1Child, styles.btPbdRow2SpaceBlock]} />
          </View>
          <View style={styles.btPdSec1SpaceBlock}>
            <View style={styles.btPbdHead}>
              <Text style={[styles.tokenAmount, styles.textTypo]}>
                Taxes and Charges
              </Text>
              <Text style={[styles.text4, styles.textFlexBox]}>8000</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Service Tax</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Property Tax</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>Short term capital gains</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPbdRow2, styles.btPbdRow2SpaceBlock]}>
              <Text style={styles.tokenRate}>GST</Text>
              <Text style={[styles.text5, styles.textFlexBox]}>500</Text>
            </View>
            <View style={[styles.btPdSec1Child, styles.btPbdRow2SpaceBlock]} />
          </View>
          <View style={[styles.btPdRowtotal, styles.btPdSec1SpaceBlock]}>
            <Text style={[styles.x, styles.textTypo]}>Total</Text>
            <Text style={[styles.x, styles.textTypo]}>₹ 59,451</Text>
          </View>
        </View>
      </View>
      <View style={[styles.btAction, styles.btActionShadowBox]}>
        <View style={styles.walletBalanceNf}>
          <Text style={styles.balanceAvailable}>Balance Available:</Text>
          <Text style={[styles.text17, styles.textFlexBox]}>₹60,000</Text>
        </View>
        <View style={[styles.btButton, styles.btActionShadowBox]}>
          <Text style={[styles.buyToken, styles.yrsClr]}>Buy Token</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bt2ScrollSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  navbarFlexBox: {
    alignItems: "flex-end",
    justifyContent: "space-between",
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
  yrsClr: {
    color: Color.gray_200,
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
  textTypo: {
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
  },
  agreementFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  andThePosition: {
    top: 1,
    position: "absolute",
  },
  iAgreeToPosition: {
    left: 0,
    position: "absolute",
  },
  btActionShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.black,
  },
  btPbdRow2SpaceBlock: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  btPdSec1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  navbarSpaceBlock: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  btPropImgIcon: {
    width: 133,
    height: 100,
    overflow: "hidden",
  },
  parkViewVillas: {
    textAlign: "left",
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    fontSize: FontSize.tSBTitle_size,
  },
  name: {
    paddingRight: Padding.p_9xs,
    borderBottomWidth: 1,
    borderColor: "#171618",
    borderStyle: "solid",
    flexDirection: "row",
  },
  aundhStreetIndore: {
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
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
  btReturnLinkBorder: {
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "#171618",
  },
  text: {
    fontSize: FontSize.tMBTitle_size,
    textAlign: "left",
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
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
  cardGraphChild: {
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    height: 28,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  text2: {
    fontSize: FontSize.tMBTitle_size,
  },
  yrs1: {
    fontSize: FontSize.tBLabel_size,
  },
  yrs: {
    textAlign: "left",
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
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
    overflow: "hidden",
    alignSelf: "stretch",
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "#171618",
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0.001,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "#171618",
  },
  btPdAgreement1: {
    width: 261,
    height: 33,
    marginLeft: 9,
  },
  btPdAgreement: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  priceDetails: {
    color: Color.black,
    fontSize: FontSize.tMBTitle_size,
    textAlign: "left",
    flex: 1,
  },
  btPdRow1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tokenAmount: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.tSBTitle_size,
    fontWeight: "700",
  },
  text4: {
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    fontSize: FontSize.tSBTitle_size,
  },
  btPbdHead: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tokenRate: {
    fontSize: FontSize.tBBody_size,
    color: Color.black,
    fontFamily: FontFamily.tRBody,
    textAlign: "left",
  },
  text5: {
    fontSize: FontSize.tBBody_size,
    fontFamily: FontFamily.tRBody,
  },
  btPbdRow2: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btPdSec1Child: {
    borderColor: "#000",
    borderTopWidth: 1,
    height: 1,
    borderStyle: "solid",
  },
  btPdRowtotal: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btPriceDetails: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    shadowRadius: 40,
    elevation: 40,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_5xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
  },
  bt2Scroll: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  balanceAvailable: {
    color: Color.black,
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
  },
  text17: {
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
  },
  walletBalanceNf: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  buyToken: {
    fontSize: FontSize.tBBody_size,
    textAlign: "left",
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
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
    height: 99,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_base,
    justifyContent: "flex-end",
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.white,
    alignItems: "center",
  },
  screenBuyToken2: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.grey95,
  },
});

export default ScreenBuyToken2;
