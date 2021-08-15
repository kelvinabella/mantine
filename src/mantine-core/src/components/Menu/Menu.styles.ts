import { createMemoStyles, MantineTheme } from '../../theme';

interface MenuStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  arrow: ({ theme }: MenuStyles) => ({
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  }),
});