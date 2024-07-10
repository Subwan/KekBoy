import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import enUS from 'antd/es/locale/en_US';
import ruRU from 'antd/es/locale/ru_RU';

import { MENU_CONFIG } from './componentsConfig';

export type { ConfigProviderProps };

export { enUS, ruRU };

export const ConfigProvider = ({
  children,
  ...restProps
}: ConfigProviderProps) => {
  const theme: ConfigProviderProps['theme'] = {
    hashed: false,
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
