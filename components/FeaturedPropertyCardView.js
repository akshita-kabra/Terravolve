import * as React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Color, FontSize, FontFamily, Border, Padding} from '../GlobalStyles';

const FeaturedPropertyCardView = ({
  propertyName,
  propertyCost,
  returnPercentage,
}) => {
  return (
    <View style={styles.featuredpropertyCard}>
      <Image
        style={styles.propertyImageIcon}
        resizeMode="cover"
        source={require('../assets/propertyimage.png')}
      />
      <View style={styles.featuredpropertyLabel}>
        <View>
          <Text style={[styles.parkViewVillas, styles.crFlexBox]}>
            {propertyName}
          </Text>
          <View style={styles.slider}>
            <View style={styles.sliderBase}>
              <View style={styles.progress} />
            </View>
          </View>
        </View>
        <View style={styles.costReturn}>
          <View>
            <Text style={[styles.cost1, styles.crFlexBox]}>Cost</Text>
            <Text style={[styles.cr, styles.crFlexBox]}>{propertyCost}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.return}>
            <Text style={[styles.cost1, styles.crFlexBox]}>Return</Text>
            <Text style={[styles.cr, styles.crFlexBox]}>
              {returnPercentage}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  crFlexBox: {
    textAlign: 'left',
    color: Color.gray_200,
  },
  propertyImageIcon: {
    width: 243,
    height: 105,
  },
  parkViewVillas: {
    fontSize: FontSize.tBBody_size,
    fontFamily: FontFamily.tBLabel,
    fontWeight: '700',
    color: Color.gray_200,
  },
  progress: {
    backgroundColor: Color.blue600,
    width: 77,
    height: 3,
    borderRadius: Border.br_11xs,
  },
  sliderBase: {
    backgroundColor: Color.grey8,
    justifyContent: 'center',
    borderRadius: Border.br_11xs,
    width: 103,
    overflow: 'hidden',
  },
  slider: {
    height: 11,
    marginTop: 6,
    width: 103,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cost1: {
    fontSize: FontSize.tSLabel_size,
    fontFamily: FontFamily.tRBody,
  },
  cr: {
    fontSize: FontSize.tBLabel_size,
    marginTop: 3,
    fontFamily: FontFamily.tBLabel,
    fontWeight: '700',
    color: Color.gray_200,
  },
  divider: {
    backgroundColor: Color.gray_200,
    width: 1,
    height: 36,
    marginLeft: 6,
  },
  return: {
    marginLeft: 6,
  },
  costReturn: {
    flexDirection: 'row',
  },
  featuredpropertyLabel: {
    width: 245,
    height: 60,
    padding: Padding.p_xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  featuredpropertyCard: {
    borderRadius: Border.br_5xl,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Color.white,
  },
});

export default FeaturedPropertyCardView;
