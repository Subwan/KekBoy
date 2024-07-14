import React from 'react';
import { ConfigProvider, Menu as AntdMenu, MenuItemProps, MenuProps } from 'antd';
import { createStyles } from 'antd-style';

import cssVars from './styles.module.scss';

export type { MenuProps, MenuItemProps };

export const Menu = (props: MenuProps) => {
  return (
    <BaseProvider>
      <AntdMenu {...props} />
    </BaseProvider>
  );
};

function BaseProvider(props: React.PropsWithChildren) {
  const { menu } = React.useContext(ConfigProvider.ConfigContext);
  const { styles, cx } = useStyle();

  return (
    <ConfigProvider menu={{ className: cx(menu?.className, styles.base) }}>
      {props.children}
    </ConfigProvider>
  );
}

function useStyle() {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefix = getPrefixCls('menu');

  return createStyles(({ css }) => ({
    base: css`
      justify-content: center;
      position: relative;
      gap: 20%;
      margin: 0 ${cssVars.varSidesMargin};
      border: none;
      background: transparent;
      z-index: 3;

      &:before {
        content: none;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        border-bottom: 1px solid ${cssVars.colorMenu};
        border-left: 1px solid ${cssVars.colorMenu};
        border-right: 1px solid ${cssVars.colorMenu};
        z-index: 3; // чтобы быть выше анимаций
      }

      .${prefix}-item {
        z-index: 4;
        box-sizing: border-box;
        border: 1px solid transparent; // Без этого прыгает элемент при выборе из-за относительного расположения

        &:after {
          content: none !important;
        }
      }

      .${prefix}-item-selected, .${prefix}-item-active {
        border: 1px solid ${cssVars.colorMenu};
        z-index: 4;
      }
    `,
  }))();
}
