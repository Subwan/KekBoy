import { OverrideToken } from 'antd/lib/theme/interface';

import cssVars from '@assets/variables.module.scss';

export const BUTTON_CONFIG: OverrideToken['Button'] = {
  ghostBg: cssVars.colorDarker,
  defaultHoverBorderColor: cssVars.colorMainOrange,
  borderColorDisabled: cssVars.colorOrange3,
  colorBorder: cssVars.colorDarker,
};
