import React, { PropsWithChildren, useContext } from 'react';
import { Button as AntdButton, ButtonProps, ConfigProvider } from 'antd';
import { createStyles } from 'antd-style';

export type { ButtonProps };

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <BaseProvider>
      <AntdButton {...props} />
    </BaseProvider>
  );
};

function BaseProvider(props: PropsWithChildren) {
  const { menu } = useContext(ConfigProvider.ConfigContext);
  const { styles, cx } = useStyle();

  return (
    <ConfigProvider button={{ className: cx(menu?.className, styles.base) }}>
      {props.children}
    </ConfigProvider>
  );
}

function useStyle() {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefix = getPrefixCls('btn');

  return createStyles(({ css }) => ({
    base: css`
      ${prefix} {
        // TODO для будущей анимации цвета текста внутри
      }
    `,
  }))();
}
