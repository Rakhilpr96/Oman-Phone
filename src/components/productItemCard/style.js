import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const Styles = StyleSheet.create({
  itemCardContainer: {
    height: 200,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  itemImageStyle: {
    width: 80,
    height: undefined,
    aspectRatio: 3 / 4,
    resizeMode: 'contain',
  },
  itemNameStyle: {
    marginHorizontal: 20,
  },
  priceTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.red,
  },
  mrpTextStyle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  storageTextContainer: {
    position: 'absolute',
    top: 70,
    right: '10%',
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingVertical: 3,
    elevation: 5,
  },
  storageTextStyle: {
    fontSize: 14,
    color: colors.red,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 75,
    left: '10%',
    backgroundColor: colors.orange,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  ratingTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Styles;
