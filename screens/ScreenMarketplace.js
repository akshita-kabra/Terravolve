import React, {useState, useCallback} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopBarContainer from '../components/TopBarContainer';
import ModalMarketplaceFilter from '../components/ModalMarketplaceFilter';
import ModalMarketplaceSort from '../components/ModalMarketplaceSort';
import ModalMarketplaceCompare from '../components/ModalMarketplaceCompare';
import FeaturedPropertyCardView from '../components/FeaturedPropertyCardView';
import PropertyViewCard from '../components/PropertyViewCard';
import {Padding, Color, FontSize, FontFamily, Border} from '../GlobalStyles';

const ScreenMarketplace = () => {
  const [filterIconVisible, setFilterIconVisible] = useState(false);
  const [sortIconVisible, setSortIconVisible] = useState(false);
  const [compareButtonVisible, setCompareButtonVisible] = useState(false);

  const openFilterIcon = useCallback(() => {
    setFilterIconVisible(true);
  }, []);

  const closeFilterIcon = useCallback(() => {
    setFilterIconVisible(false);
  }, []);

  const openSortIcon = useCallback(() => {
    setSortIconVisible(true);
  }, []);

  const closeSortIcon = useCallback(() => {
    setSortIconVisible(false);
  }, []);

  const openCompareButton = useCallback(() => {
    setCompareButtonVisible(true);
  }, []);

  const closeCompareButton = useCallback(() => {
    setCompareButtonVisible(false);
  }, []);

  return (
    <>
      <View style={styles.screenMarketplace}>
        <View style={styles.marketplaceScroll}>
          <StatusBar
            style={styles.searchFlexBox}
            barStyle="default"
            translucent={true}
          />
          <TopBarContainer
            logoId={require('../assets/logo.png')}
            pageNameId="Marketplace"
          />
          <LinearGradient
            style={[styles.marketplaceCard, styles.compareLayoutFlexBox]}
            locations={[0, 0.61, 1]}
            colors={['#ffe367', 'rgba(255, 246, 204, 0.65)', '#ffefaa']}
            useAngle={true}
            angle={127.2}>
            <View>
              <Text style={[styles.portfolioValue1, styles.textFlexBox]}>
                Portfolio value
              </Text>
              <View style={styles.parent}>
                <Text style={[styles.text, styles.textFlexBox]}>₹ 25,000</Text>
                <Image
                  style={styles.upIcon}
                  resizeMode="cover"
                  source={require('../assets/up.png')}
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.walletBalance}>
              <Text style={[styles.portfolioValue1, styles.textFlexBox]}>
                Wallet balance
              </Text>
              <Text style={[styles.text, styles.textFlexBox]}>₹ 15,000</Text>
            </View>
          </LinearGradient>
          <View style={[styles.search, styles.searchFlexBox]}>
            <View style={styles.searchBar}>
              <Image
                style={styles.searchIcon}
                resizeMode="cover"
                source={require('../assets/search.png')}
              />
              <Text style={[styles.value, styles.valueTypo]}>
                Search information
              </Text>
            </View>
            <View style={styles.right}>
              <Pressable style={styles.filter} onPress={openFilterIcon}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require('../assets/filter.png')}
                />
              </Pressable>
              <Pressable style={styles.sort} onPress={openSortIcon}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require('../assets/sort.png')}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.filters}>
            <View style={[styles.residentialFilter, styles.commercialBorder]}>
              <Text style={[styles.residential, styles.compareTypo]}>
                Residential
              </Text>
            </View>
            <View style={[styles.ongoingFunding, styles.commercialBorder]}>
              <Text style={[styles.residential, styles.compareTypo]}>
                Ongoing Funding
              </Text>
            </View>
            <View style={[styles.commercial, styles.commercialBorder]}>
              <Text style={[styles.residential, styles.compareTypo]}>
                Commercial
              </Text>
            </View>
            <View style={[styles.commercial, styles.commercialBorder]}>
              <Text style={[styles.residential, styles.compareTypo]}>
                Fully funded
              </Text>
            </View>
          </View>
          <View style={[styles.compareLayout, styles.compareLayoutFlexBox]}>
            <View style={styles.compareProperties}>
              <Pressable
                style={[styles.compareButton, styles.listPosition]}
                onPress={openCompareButton}>
                <Text style={[styles.compare, styles.compareTypo]}>
                  Compare
                </Text>
              </Pressable>
              <View style={[styles.selectedProperties, styles.gridBorder]}>
                <Image
                  style={styles.selectedLayout}
                  resizeMode="cover"
                  source={require('../assets/ellipse-8.png')}
                />
                <Image
                  style={[styles.selectedPropertiesItem, styles.selectedLayout]}
                  resizeMode="cover"
                  source={require('../assets/ellipse-11.png')}
                />
                <Image
                  style={[styles.selectedPropertiesItem, styles.selectedLayout]}
                  resizeMode="cover"
                  source={require('../assets/ellipse-3.png')}
                />
              </View>
            </View>
            <View style={styles.layouts}>
              <View style={[styles.list, styles.listSpaceBlock]}>
                <Image
                  style={styles.layoutListIcon}
                  resizeMode="cover"
                  source={require('../assets/layoutlist.png')}
                />
              </View>
              <View style={[styles.grid, styles.listSpaceBlock]}>
                <Image
                  style={styles.layoutListIcon}
                  resizeMode="cover"
                  source={require('../assets/layoutgrid.png')}
                />
              </View>
            </View>
          </View>
          <View style={styles.featuredProperty}>
            <View style={[styles.heading, styles.searchFlexBox]}>
              <Text style={[styles.featuredProperties, styles.valueTypo]}>
                Featured Properties
              </Text>
              <Image
                style={styles.upIcon1}
                resizeMode="cover"
                source={require('../assets/up1.png')}
              />
            </View>
            <ScrollView
              style={styles.propertyCarousal}
              horizontal="true"
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.propertyCarousalScrollViewContent}>
              <FeaturedPropertyCardView
                propertyName="Park View Villas"
                propertyCost="1200 Cr"
                returnPercentage="11%"
              />
              <FeaturedPropertyCardView
                propertyName="Lake View Villas"
                propertyCost="1000 Cr"
                returnPercentage="14%"
              />
              <FeaturedPropertyCardView
                propertyName="Park View Spa"
                propertyCost="1330 Cr"
                returnPercentage="8 %"
              />
            </ScrollView>
          </View>
          <ScrollView
            style={styles.PropertyViewCard}
            vertical="true"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
              styles.propertyCardContainerScrollViewContent
            }>
            <PropertyViewCard
              projectName="Park View Villas"
              locationName="Aundh Street, Indore"
              projectType="Residential"
              fundingPercentage="40% funded"
              returnPercentage="11%"
              projectCost="1200 Cr"
            />
            <PropertyViewCard
              projectName="Park View Towers"
              locationName="Saket Nagar, Indore"
              projectType="Commercial"
              fundingPercentage="42% funded"
              returnPercentage="13%"
              projectCost="600 Cr"
              propMarginTop={24}
            />
          </ScrollView>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={filterIconVisible}>
        <View style={styles.filterIconOverlay}>
          <Pressable style={styles.filterIconBg} onPress={closeFilterIcon} />
          <ModalMarketplaceFilter onClose={closeFilterIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={sortIconVisible}>
        <View style={styles.sortIconOverlay}>
          <Pressable style={styles.sortIconBg} onPress={closeSortIcon} />
          <ModalMarketplaceSort onClose={closeSortIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={compareButtonVisible}>
        <View style={styles.compareButtonOverlay}>
          <Pressable
            style={styles.compareButtonBg}
            onPress={closeCompareButton}
          />
          <ModalMarketplaceCompare onClose={closeCompareButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  propertyCarousalScrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: Padding.p_base,
    overflow: 'visible',
  },
  propertyCardContainerScrollViewContent: {
    flexDirection: 'column',
    paddingVertical: Padding.p_base,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  searchFlexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  compareLayoutFlexBox: {
    paddingVertical: Padding.p_xs,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  textFlexBox: {
    textAlign: 'left',
    color: Color.gray_200,
  },
  valueTypo: {
    fontSize: FontSize.tSBTitle_size,
    textAlign: 'left',
    fontFamily: FontFamily.tSLabel,
    fontWeight: '600',
  },
  commercialBorder: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_7xs,
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderStyle: 'solid',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  compareTypo: {
    fontSize: FontSize.tSLabel_size,
    textAlign: 'left',
  },
  listPosition: {
    zIndex: 1,
    backgroundColor: Color.gray_200,
    flexDirection: 'row',
  },
  gridBorder: {
    zIndex: 0,
    borderWidth: 0.5,
    backgroundColor: Color.white,
    borderStyle: 'solid',
  },
  selectedLayout: {
    height: 17,
    width: 17,
  },
  listSpaceBlock: {
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_xs,
  },
  portfolioValue1: {
    fontSize: FontSize.tBLabel_size,
    fontFamily: FontFamily.tSLabel,
    fontWeight: '600',
  },
  text: {
    fontSize: FontSize.tBHeadline_size,
    fontWeight: '700',
    fontFamily: FontFamily.tBLabel,
  },
  upIcon: {
    width: 18,
    marginLeft: 7,
    height: 18,
  },
  parent: {
    width: 119,
    height: 33,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: Color.gray_200,
  },
  walletBalance: {
    alignItems: 'flex-end',
  },
  marketplaceCard: {
    borderRadius: Border.br_5xl,
    borderColor: '#ffefaa',
    backgroundColor: Color.cardGradient,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: Padding.p_xs,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: Padding.p_5xl,
  },
  searchIcon: {
    width: 21,
    height: 21,
  },
  value: {
    color: Color.grey6,
    marginLeft: 12,
  },
  searchBar: {
    borderColor: '#2e2c30',
    width: 248,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  filterIconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  filter: {
    width: 23,
    height: 21,
  },
  sortIconOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  sortIconBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  sort: {
    marginLeft: 20,
    height: 20,
    width: 22,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    paddingTop: Padding.p_5xl,
    alignItems: 'center',
  },
  residential: {
    color: Color.gray_200,
    fontSize: FontSize.tSLabel_size,
    fontFamily: FontFamily.tSLabel,
    fontWeight: '600',
  },
  residentialFilter: {
    borderColor: '#2874ae',
    backgroundColor: Color.blue900,
    paddingHorizontal: Padding.p_7xs,
  },
  ongoingFunding: {
    borderColor: '#2874ae',
    backgroundColor: Color.blue900,
    paddingHorizontal: Padding.p_7xs,
    marginLeft: 12,
  },
  commercial: {
    borderColor: '#aaa8ae',
    marginLeft: 12,
    backgroundColor: Color.grey95,
  },
  filters: {
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_9xs,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  compareButtonOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 113, 113, 0.3)',
  },
  compareButtonBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  compare: {
    color: Color.white,
    fontFamily: FontFamily.tSLabel,
    fontWeight: '600',
  },
  compareButton: {
    paddingVertical: Padding.p_9xs,
    zIndex: 1,
    borderColor: '#454248',
    paddingHorizontal: Padding.p_7xs,
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  selectedPropertiesItem: {
    marginLeft: 6,
  },
  selectedProperties: {
    paddingLeft: 32,
    paddingTop: Padding.p_10xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_10xs,
    marginLeft: -25,
    borderColor: '#454248',
    zIndex: 0,
    borderRadius: Border.br_3xs,
    flexDirection: 'row',
  },
  compareProperties: {
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
  },
  layoutListIcon: {
    width: 15,
    height: 15,
  },
  list: {
    zIndex: 1,
    backgroundColor: Color.gray_200,
    flexDirection: 'row',
  },
  grid: {
    borderColor: '#747178',
    width: 46,
    justifyContent: 'center',
    marginLeft: -20,
    zIndex: 0,
    borderWidth: 0.5,
    backgroundColor: Color.white,
    borderStyle: 'solid',
    alignItems: 'flex-end',
  },
  layouts: {
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
  },
  compareLayout: {
    paddingHorizontal: 0,
  },
  featuredProperties: {
    color: Color.gray_100,
  },
  upIcon1: {
    width: 22,
    height: 18,
  },
  heading: {
    height: 20,
    alignItems: 'center',
  },
  propertyCarousal: {
    width: '100%',
    overflow: 'visible',
    marginTop: Padding.p_base,
  },
  featuredProperty: {
    alignSelf: 'stretch',
    overflow: 'visible',
  },
  propertyCardContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },
  marketplaceScroll: {
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: 'stretch',
    overflow: 'visible',
  },
  screenMarketplace: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    backgroundColor: Color.grey95,
    overflow: 'visible',
  },
});

export default ScreenMarketplace;
