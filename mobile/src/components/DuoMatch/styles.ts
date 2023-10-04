import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 311,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,

  },
  label: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    marginTop: 24,
    marginBottom: 8,
  },
  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 32,
  },
  discord: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
  },
});