import React, {useMemo} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Color, FontFamily, Border, FontSize, Padding} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const PropertyViewCard = ({
  projectName,
  locationName,
  projectType,
  fundingPercentage,
  returnPercentage,
  projectCost,
  propMarginTop,
}) => {
  const propertyCardStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View
      style={[styles.propertyCard, styles.propertyFlexBox1, propertyCardStyle]}>
      <Image
        style={[styles.propertyImageIcon, styles.propertyFlexBox1]}
        resizeMode="cover"
        source={require('../assets/propertyimage1.png')}
      />
      <View style={styles.propertyDetailContainer}>
        <View style={[styles.propertyDetail, styles.propertyFlexBox]}>
          <View style={styles.propertyInfo}>
            <View>
              <View style={styles.propertyTitle}>
                <Text style={[styles.parkViewVillas, styles.textTypo]}>
                  {projectName}
                </Text>
              </View>
              <Text style={styles.fundedTypo}>{locationName}</Text>
            </View>
            <View style={styles.type}>
              <Text style={styles.residential}>{projectType}</Text>
            </View>
          </View>
          <Image
            style={styles.knowMoreIcon}
            resizeMode="cover"
            source={require('../assets/knowmore.png')}
          />
        </View>
        <View style={[styles.propertyStatus, styles.propertyFlexBox]}>
          <View>
            <View style={styles.slider}>
              <View style={styles.base} />
              <View style={styles.progress}>
                <View style={[styles.progressBase, styles.pointMarkerBg]} />
                <View style={[styles.pointMarker, styles.pointMarkerBg]} />
              </View>
            </View>
            <Text style={[styles.funded, styles.fundedTypo]}>
              {fundingPercentage}
            </Text>
          </View>
          <View style={styles.propertyInfo}>
            <View>
              <Text style={styles.fundedTypo}>Current Return</Text>
              <Text style={[styles.text, styles.textTypo]}>
                {returnPercentage}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.cost}>
              <Text style={styles.fundedTypo}>Project Cost</Text>
              <Text style={[styles.text, styles.textTypo]}>{projectCost}</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.addToWishlist}
        resizeMode="cover"
        source={require('../assets/add-to-wishlist.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  propertyFlexBox1: {
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  propertyFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  textTypo: {
    textAlign: 'left',
    color: Color.gray_200,
    fontFamily: FontFamily.tBLabel,
    fontWeight: '700',
  },
  pointMarkerBg: {
    backgroundColor: Color.blue600,
    borderRadius: Border.br_11xs,
  },
  fundedTypo: {
    fontFamily: FontFamily.tRBody,
    fontSize: FontSize.tSLabel_size,
    textAlign: 'left',
    color: Color.gray_200,
  },
  propertyImageIcon: {
    maxWidth: '100%',
    height: 245,
    width: '100%',
    zIndex: 0,
  },
  parkViewVillas: {
    fontSize: FontSize.tSBTitle_size,
  },
  propertyTitle: {
    borderStyle: 'solid',
    borderColor: '#909090',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  residential: {
    fontWeight: '600',
    fontFamily: FontFamily.tSLabel,
    color: Color.gray_100,
    fontSize: FontSize.tSLabel_size,
    textAlign: 'left',
  },
  type: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.blue900,
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    marginLeft: 10,
    flexDirection: 'row',
  },
  propertyInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  knowMoreIcon: {
    width: 13,
    height: 13,
  },
  propertyDetail: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  base: {
    top: 4,
    backgroundColor: Color.grey8,
    height: 3,
    borderRadius: Border.br_11xs,
    left: 0,
    position: 'absolute',
    width: 124,
  },
  progressBase: {
    width: 69,
    height: 3,
  },
  pointMarker: {
    width: 3,
    height: 11,
  },
  progress: {
    top: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slider: {
    height: 11,
    width: 124,
  },
  funded: {
    marginTop: 2,
  },
  text: {
    fontSize: FontSize.tBLabel_size,
    marginTop: 3,
  },
  divider: {
    backgroundColor: Color.blue800,
    width: 1,
    height: 34,
    marginLeft: 10,
  },
  cost: {
    marginLeft: 10,
  },
  propertyStatus: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  propertyDetailContainer: {
    backgroundColor: Color.white,
    padding: Padding.p_xs,
    zIndex: 1,
    alignSelf: 'stretch',
  },
  addToWishlist: {
    top: 15,
    right: 11,
    width: 18,
    height: 22,
    zIndex: 2,
    position: 'absolute',
  },
  propertyCard: {
    borderRadius: Border.br_5xl,
    shadowColor: 'rgba(0, 0, 0, 0.18)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    alignItems: 'flex-end',
  },
});

export default PropertyViewCard;
