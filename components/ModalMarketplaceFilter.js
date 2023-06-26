import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const ModalMarketplaceFilter = ({ onClose }) => {
  return (
    <View style={styles.modalMarketplaceFilter}>
      <View style={[styles.mfoHeader, styles.mfoFlexBox]}>
        <Text style={[styles.mfoHeading, styles.resetTypo]}>Filter</Text>
        <Image
          style={styles.cancelIcon}
          resizeMode="cover"
          source={require("../assets/cancel2.png")}
        />
      </View>
      <View style={styles.mfoSpaceBlock}>
        <Text style={styles.mfoSubheading}>Property Type</Text>
        <View style={styles.mfoFilter}>
          <View style={[styles.filter1, styles.filterBorder1]}>
            <Text style={styles.periodTypo}>Residential</Text>
          </View>
          <View style={[styles.filter2, styles.filterSpaceBlock1]}>
            <Text style={styles.periodTypo}>Commercial</Text>
          </View>
          <View style={[styles.filter3, styles.filterBorder]}>
            <Text style={styles.periodTypo}>Hospitality</Text>
          </View>
          <View style={[styles.filter3, styles.filterBorder]}>
            <Text style={styles.periodTypo}>Mixed Use</Text>
          </View>
        </View>
      </View>
      <View style={styles.mfoSpaceBlock}>
        <Text style={styles.mfoSubheading}>Listing</Text>
        <View style={styles.mfoFilter}>
          <View style={[styles.filter11, styles.filterBorder]}>
            <Text style={styles.periodTypo}>Newly listed</Text>
          </View>
          <View style={[styles.filter21, styles.filterSpaceBlock]}>
            <Text style={styles.periodTypo}>Fully funded</Text>
          </View>
          <View style={[styles.filter21, styles.filterSpaceBlock]}>
            <Text style={styles.periodTypo}>Resale</Text>
          </View>
        </View>
      </View>
      <View style={styles.mfoSpaceBlock}>
        <Text style={styles.mfoSubheading}>Minimum Investment</Text>
        <View style={styles.mfoPriceBarGraph}>
          <View style={[styles.priceBarGraph, styles.mfoActionSpaceBlock]}>
            <View style={styles.priceBar1} />
            <View style={[styles.priceBar11, styles.priceLayout]} />
            <View style={[styles.priceBar12, styles.priceLayout]} />
            <View style={[styles.priceBar13, styles.priceLayout]} />
            <View style={[styles.priceBar12, styles.priceLayout]} />
            <View style={[styles.priceBar15, styles.priceLayout]} />
            <View style={[styles.priceBar13, styles.priceLayout]} />
            <View style={[styles.priceBar17, styles.priceLayout]} />
            <View style={[styles.priceBar13, styles.priceLayout]} />
            <View style={[styles.priceBar19, styles.priceLayout]} />
            <View style={[styles.priceBar17, styles.priceLayout]} />
            <View style={[styles.priceBar19, styles.priceLayout]} />
            <View style={[styles.priceBar11, styles.priceLayout]} />
            <View style={[styles.priceBar11, styles.priceLayout]} />
          </View>
          <View style={[styles.priceGraph, styles.priceSpaceBlock]}>
            <View style={styles.frame}>
              <View style={styles.frameChild} />
            </View>
            <Image
              style={styles.priceGraphChild}
              resizeMode="cover"
              source={require("../assets/ellipse-686.png")}
            />
          </View>
          <View style={[styles.mafoPriceTags, styles.priceSpaceBlock]}>
            <Text style={styles.kTypo}>₹10k</Text>
            <Text style={[styles.k1, styles.kTypo]}>₹15k</Text>
            <Text style={[styles.k1, styles.kTypo]}>₹18k</Text>
            <Text style={[styles.k1, styles.kTypo]}>₹20k</Text>
          </View>
          <View style={styles.mfoSelectedPrice}>
            <Text style={styles.text}>₹17,000</Text>
          </View>
        </View>
      </View>
      <View style={styles.mfoSpaceBlock}>
        <Text style={styles.mfoSubheading}>Minimum hold period</Text>
        <View style={styles.mfoFilter}>
          <View style={styles.mfoHoldingTag}>
            <Image
              style={styles.mfoHoldingTagChild}
              resizeMode="cover"
              source={require("../assets/ellipse-684.png")}
            />
            <Text style={[styles.period, styles.periodTypo]}>0-2 years</Text>
          </View>
          <View style={[styles.mfoHoldingTag1, styles.filterSpaceBlock]}>
            <Image
              style={styles.mfoHoldingTagChild}
              resizeMode="cover"
              source={require("../assets/ellipse-684.png")}
            />
            <Text style={[styles.period, styles.periodTypo]}>2-5 years</Text>
          </View>
          <View style={[styles.mfoHoldingTag1, styles.filterSpaceBlock]}>
            <Image
              style={styles.mfoHoldingTagChild}
              resizeMode="cover"
              source={require("../assets/ellipse-684.png")}
            />
            <Text
              style={[styles.period, styles.periodTypo]}
            >{`> 5 years`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.mfoSpaceBlock}>
        <Text style={styles.mfoSubheading}>Risk profile</Text>
        <View style={styles.mfoFilter}>
          <View style={[styles.filter11, styles.filterBorder]}>
            <Text style={styles.periodTypo}>Low</Text>
          </View>
          <View style={[styles.filter33, styles.filterSpaceBlock]}>
            <Text style={styles.periodTypo}>Medium</Text>
          </View>
          <View style={[styles.filter21, styles.filterSpaceBlock]}>
            <Text style={styles.periodTypo}>High</Text>
          </View>
        </View>
      </View>
      <View style={[styles.mfoAction, styles.mfoActionSpaceBlock]}>
        <View style={[styles.buttonNonhighlight, styles.buttonShadowBox]}>
          <Text style={[styles.reset, styles.resetTypo]}>Reset</Text>
        </View>
        <View style={[styles.button, styles.buttonShadowBox]}>
          <Text style={[styles.reset, styles.resetTypo]}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mfoFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  resetTypo: {
    color: Color.gray_200,
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
  },
  filterBorder1: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: "#2874ae",
    borderStyle: "solid",
    backgroundColor: Color.blue900,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  filterSpaceBlock1: {
    marginLeft: 8,
    flexDirection: "row",
  },
  filterBorder: {
    borderColor: "#8f8c93",
    backgroundColor: Color.grey95,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  filterSpaceBlock: {
    marginLeft: 12,
    flexDirection: "row",
  },
  mfoActionSpaceBlock: {
    paddingVertical: 0,
    flexDirection: "row",
  },
  priceLayout: {
    marginLeft: 6,
    width: 10,
    backgroundColor: Color.grey6,
    borderRadius: Border.br_11xs,
  },
  priceSpaceBlock: {
    marginTop: -4,
    flexDirection: "row",
  },
  kTypo: {
    height: 12,
    width: 26,
    display: "flex",
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
    color: Color.gray_200,
    alignItems: "center",
  },
  periodTypo: {
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
    color: Color.gray_200,
  },
  buttonShadowBox: {
    padding: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
  },
  mfoHeading: {
    flex: 1,
    fontSize: FontSize.tMBTitle_size,
    textAlign: "center",
  },
  cancelIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  mfoHeader: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  mfoSubheading: {
    fontSize: FontSize.tSBTitle_size,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
  },
  filter1: {
    flexDirection: "row",
  },
  filter2: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: "#2874ae",
    borderStyle: "solid",
    backgroundColor: Color.blue900,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  filter3: {
    marginLeft: 8,
    flexDirection: "row",
  },
  mfoFilter: {
    paddingVertical: Padding.p_9xs,
    marginTop: 12,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  mfoSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  filter11: {
    flexDirection: "row",
  },
  filter21: {
    borderColor: "#8f8c93",
    backgroundColor: Color.grey95,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  priceBar1: {
    height: 10,
    width: 10,
    backgroundColor: Color.grey6,
    borderRadius: Border.br_11xs,
  },
  priceBar11: {
    height: 10,
  },
  priceBar12: {
    height: 24,
  },
  priceBar13: {
    height: 44,
  },
  priceBar15: {
    height: 56,
  },
  priceBar17: {
    height: 29,
  },
  priceBar19: {
    height: 16,
  },
  priceBarGraph: {
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
  },
  frameChild: {
    width: 136,
    height: 4,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_8xs,
  },
  frame: {
    zIndex: 0,
    borderRadius: Border.br_8xs,
    width: 242,
    backgroundColor: Color.grey6,
    justifyContent: "center",
    overflow: "hidden",
  },
  priceGraphChild: {
    position: "absolute",
    top: 0,
    left: 132,
    width: 9,
    zIndex: 1,
    height: 9,
  },
  priceGraph: {
    height: 9,
    width: 242,
    marginTop: -4,
    alignItems: "center",
  },
  k1: {
    marginLeft: 47,
  },
  mafoPriceTags: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  text: {
    color: Color.white,
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
  },
  mfoSelectedPrice: {
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gray_200,
    marginTop: -4,
    paddingVertical: 0,
    flexDirection: "row",
  },
  mfoPriceBarGraph: {
    paddingVertical: 1,
    paddingHorizontal: Padding.p_3xs,
    marginTop: 12,
    alignItems: "center",
  },
  mfoHoldingTagChild: {
    width: 15,
    height: 15,
  },
  period: {
    marginLeft: 5,
  },
  mfoHoldingTag: {
    flexDirection: "row",
    alignItems: "center",
  },
  mfoHoldingTag1: {
    alignItems: "center",
  },
  filter33: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderColor: "#2874ae",
    borderStyle: "solid",
    backgroundColor: Color.blue900,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  reset: {
    fontSize: FontSize.tBBody_size,
    textAlign: "left",
  },
  buttonNonhighlight: {
    borderColor: "#ffde46",
    borderWidth: 2,
    backgroundColor: Color.grey95,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
  },
  button: {
    backgroundColor: Color.yellow500,
  },
  mfoAction: {
    paddingHorizontal: Padding.p_17xl,
    marginTop: 24,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalMarketplaceFilter: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    width: 335,
    padding: Padding.p_5xl,
    maxWidth: "100%",
    maxHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ModalMarketplaceFilter;
