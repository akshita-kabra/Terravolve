import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const ModalMarketplaceCompare = ({ onClose }) => {
  return (
    <View style={[styles.modalMarketplaceCompare, styles.imageIconLayout]}>
      <View style={[styles.mcoCompareHeader, styles.mcoFlexBox]}>
        <Text style={styles.mcoHeading}>Compare</Text>
        <Image
          style={styles.cancelIcon}
          resizeMode="cover"
          source={require("../assets/cancel.png")}
        />
      </View>
      <View style={[styles.mcoCompareList, styles.mcoSpaceBlock]}>
        <View style={[styles.mcoProperty, styles.buttonFlexBox]}>
          <View style={styles.mcoFlexBox}>
            <Image
              style={styles.imageIconLayout}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
            <Text style={styles.arcCityTypo}>Park View Villa</Text>
          </View>
          <Image
            style={styles.cancelSmallIcon}
            resizeMode="cover"
            source={require("../assets/cancelsmall.png")}
          />
        </View>
        <View style={[styles.mcoProperty, styles.buttonFlexBox]}>
          <View style={styles.mcoFlexBox}>
            <Image
              style={styles.imageIconLayout}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
            <Text style={[styles.arcCity, styles.arcCityTypo]}>ARC City</Text>
          </View>
          <Image
            style={styles.cancelSmallIcon}
            resizeMode="cover"
            source={require("../assets/cancelsmall1.png")}
          />
        </View>
        <View style={[styles.mcoProperty, styles.buttonFlexBox]}>
          <View style={styles.mcoFlexBox}>
            <Image
              style={styles.imageIconLayout}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            />
            <Text style={styles.arcCityTypo}>Tatvam Villas</Text>
          </View>
          <Image
            style={styles.cancelSmallIcon}
            resizeMode="cover"
            source={require("../assets/cancelsmall.png")}
          />
        </View>
      </View>
      <View style={[styles.mcoAction, styles.mcoSpaceBlock]}>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={styles.compare}>Compare</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mcoFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  mcoSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  arcCityTypo: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: FontSize.tBBody_size,
    color: Color.gray_200,
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
  },
  mcoHeading: {
    fontSize: FontSize.tMBTitle_size,
    textAlign: "center",
    color: Color.gray_200,
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    flex: 1,
  },
  cancelIcon: {
    width: 14,
    height: 14,
  },
  mcoCompareHeader: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cancelSmallIcon: {
    width: 12,
    height: 12,
  },
  mcoProperty: {
    borderStyle: "solid",
    borderColor: "#5c5960",
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
  },
  arcCity: {
    display: "flex",
    width: 58,
    alignItems: "center",
  },
  mcoCompareList: {
    justifyContent: "center",
  },
  compare: {
    textAlign: "left",
    fontSize: FontSize.tBBody_size,
    color: Color.gray_200,
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.yellow500,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
  },
  mcoAction: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  modalMarketplaceCompare: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    width: 335,
    height: 354,
    padding: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalMarketplaceCompare;
