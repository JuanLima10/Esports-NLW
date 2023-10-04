import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 74,
    marginBottom: 48,
  },
  inputSearch:{
    width: '92%',
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,
    marginLeft: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    backgroundColor: '#00000075',
  },
  carousel: {
    marginTop: 32,
    paddingLeft: 16,
  },
});