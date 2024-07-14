import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import enUS from 'antd/es/locale/en_US';
import ruRU from 'antd/es/locale/ru_RU';

import { MENU_CONFIG } from './componentsConfig';

import cssVars from './styles.module.scss';

export type { ConfigProviderProps };

export { enUS, ruRU };

export const ConfigProvider = ({ children, ...restProps }: ConfigProviderProps) => {
  const theme: ConfigProviderProps['theme'] = {
    hashed: false,
    token: {
      colorTextBase: cssVars.colorOrange2,
      colorLink: cssVars.colorMainOrange,
      colorPrimary: cssVars.colorMainOrange,
      colorBgBase: 'transparent',
    },
    components: {
      Menu: MENU_CONFIG,
    },
  };

  return (
    <AntdConfigProvider {...restProps} theme={theme}>
      {children}
    </AntdConfigProvider>
  );
};
