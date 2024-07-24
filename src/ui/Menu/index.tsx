import React, { PropsWithChildren, useContext } from 'react';
import { Menu as AntdMenu, MenuItemProps, MenuProps } from 'antd';
import { createStyles } from 'antd-style';

import { ConfigProvider } from '../ConfigProvider';

import cssVars from '@assets/variables.module.scss';

export type { MenuProps, MenuItemProps };

export const Menu: React.FC<MenuProps> = (props) => {
  return (
    <BaseProvider>
      <AntdMenu {...props} />
    </BaseProvider>
  );
};

function BaseProvider(props: PropsWithChildren) {
  const { menu } = useContext(ConfigProvider.ConfigContext);
  const { styles, cx } = useStyle();

  return (
    <ConfigProvider menu={{ className: cx(menu?.className, styles.base) }}>
      {props.children}
    </ConfigProvider>
  );
}

function useStyle() {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefix = getPrefixCls('menu');

  return createStyles(({ css }) => ({
    base: css`
      --list-gap: calc((100vw - ${cssVars.varSidesMargin} * 2) * 20 / 100);
      justify-content: center;
      position: relative;
      margin: 0 ${cssVars.varSidesMargin};
      border: none;
      background: transparent;
      z-index: 3;

      &:before {
        content: '';
        display: block;
        flex-grow: 1;
        height: calc(46px / 2);
        border-bottom: 1px solid ${cssVars.colorMenu};
        border-left: 1px solid ${cssVars.colorMenu};
        z-index: 3; // чтобы быть выше анимаций
      }

      &:after {
        content: '';
        order: 3;
        display: block;
        flex-grow: 1;
        height: calc(46px / 2);
        border-bottom: 1px solid ${cssVars.colorMenu};
        border-right: 1px solid ${cssVars.colorMenu};
        z-index: 3; // чтобы быть выше анимаций
      }

      .${prefix}-item {
        z-index: 4;
        box-sizing: border-box;
        border: 1px solid transparent; // Без этого прыгает элемент при выборе из-за относительного расположения

        &:first-child {
          &:after {
            content: none !important;
          }
        }
      }

      .${prefix}-item + .${prefix}-item {
        margin-left: var(--list-gap);

        &:after {
          content: '' !important;
          position: absolute;
          top: 50%;
          bottom: unset !important;
          left: unset !important;
          right: 100% !important;
          display: block;
          width: var(--list-gap);
          transform: translateY(-50%);
          height: 1px;
          background-color: ${cssVars.colorMenu};
          border-width: 0 !important;
          z-index: 3; // чтобы быть выше анимаций
        }
      }

      .${prefix}-item-selected, .${prefix}-item-active {
        border: 1px solid ${cssVars.colorMenu};
        z-index: 4;
      }
    `,
  }))();
}
