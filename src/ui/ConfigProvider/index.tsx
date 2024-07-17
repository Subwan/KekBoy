import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import enUS from 'antd/es/locale/en_US';
import ruRU from 'antd/es/locale/ru_RU';

import { BUTTON_CONFIG, MENU_CONFIG } from './componentsConfig';

import cssVars from '@assets/variables.module.scss';

export type { ConfigProviderProps };

export { enUS, ruRU };

export const ConfigProvider = ({ children, ...restProps }: ConfigProviderProps) => {
  const theme: ConfigProviderProps['theme'] = {
    hashed: false,
    token: {
      colorTextBase: cssVars.colorMainOrange,
      colorLink: cssVars.colorMainOrange,
      colorPrimary: cssVars.colorMainOrange,
      colorBgBase: 'transparent',
      borderRadius: 0,
    },
    components: {
      Menu: MENU_CONFIG,
      Button: BUTTON_CONFIG,
    },
  };

  return (
    <AntdConfigProvider {...restProps} theme={theme}>
      {children}
    </AntdConfigProvider>
  );
};

ConfigProvider.ConfigContext = AntdConfigProvider.ConfigContext;
