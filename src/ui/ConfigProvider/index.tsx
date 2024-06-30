import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import enUS from 'antd/es/locale/en_US';
import ruRU from 'antd/es/locale/ru_RU';

export type { ConfigProviderProps };

export { enUS, ruRU };

export const ConfigProvider = ({
  children,
  ...restProps
}: ConfigProviderProps) => {
  return (
    <AntdConfigProvider {...restProps}>
      {children}
    </AntdConfigProvider>
  );
};
