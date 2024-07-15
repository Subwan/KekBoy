import React from 'react';
import { FloatButton as AntdFloatButton, FloatButtonProps } from 'antd';
import cn from 'classnames';

import styles from './styles.module.scss';

export type { FloatButtonProps };

export const FloatButton: React.FC<FloatButtonProps> = (props) => {
  return (
    <AntdFloatButton {...props} className={cn(styles.floatButton, props.className)} />
  );
};
