import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const ModalMarketplaceSort = ({ onClose }) => {
  return (
    <View style={styles.modalMarketplaceSort}>
      <View style={[styles.msoSortHeader, styles.msoFlexBox]}>
        <Text style={[styles.mfoHeading, styles.resetTypo]}>Sort</Text>
        <Image
          style={styles.cancelIcon}
          resizeMode="cover"
          source={require("../assets/cancel1.png")}
        />
      </View>
      <View style={[styles.msoSortType, styles.msoSpaceBlock]}>
        <View style={styles.msoSortReturn}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Return
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.msoSortReturn1}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Growth
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.msoSortReturn1}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Token Size
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.msoSortReturn1}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Timeline
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.msoSortReturn1}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Project cost
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.msoSortReturn1}>
          <Text style={[styles.msoSubheading, styles.highToLowTypo]}>
            Project size
          </Text>
          <View style={[styles.msoFilter, styles.msoSpaceBlock1]}>
            <View style={[styles.sel, styles.selSpaceBlock]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                High to Low
              </Text>
            </View>
            <View style={[styles.unsel, styles.unselBg]}>
              <Text style={[styles.highToLow, styles.highToLowTypo]}>
                Low to high
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.msoAction, styles.msoSpaceBlock]}>
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
  msoFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  resetTypo: {
    fontFamily: FontFamily.tBLabel,
    fontWeight: "700",
    color: Color.gray_200,
  },
  msoSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  highToLowTypo: {
    fontFamily: FontFamily.tSLabel,
    fontWeight: "600",
    textAlign: "left",
  },
  msoSpaceBlock1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
  },
  selSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  unselBg: {
    backgroundColor: Color.grey95,
    borderStyle: "solid",
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
    color: Color.gray_200,
  },
  cancelIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  msoSortHeader: {
    alignSelf: "stretch",
  },
  msoSubheading: {
    fontSize: FontSize.tSBTitle_size,
    color: Color.gray_100,
    textAlign: "left",
  },
  highToLow: {
    fontSize: FontSize.tSLabel_size,
    textAlign: "left",
    color: Color.gray_200,
  },
  sel: {
    backgroundColor: Color.blue900,
    borderColor: "#2874ae",
    borderStyle: "solid",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_xs,
  },
  unsel: {
    borderColor: "#8f8c93",
    marginLeft: 12,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 1,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.grey95,
  },
  msoFilter: {
    marginTop: 12,
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  msoSortReturn: {
    alignSelf: "stretch",
  },
  msoSortReturn1: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  msoSortType: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
  },
  reset: {
    fontSize: FontSize.tBBody_size,
    textAlign: "left",
    color: Color.gray_200,
  },
  buttonNonhighlight: {
    borderColor: "#ffde46",
    borderWidth: 2,
    backgroundColor: Color.grey95,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: Color.yellow500,
  },
  msoAction: {
    paddingHorizontal: Padding.p_17xl,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  modalMarketplaceSort: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    width: 334,
    padding: Padding.p_5xl,
    justifyContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default ModalMarketplaceSort;
