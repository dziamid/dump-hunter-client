import * as React from 'react';
import { CurrencyCode } from '../../types';

const path = require('path');
type CurrencyIcons = {[key in CurrencyCode]: any};

declare const require: NodeRequire & { context: any };

const context = require.context('./icons', false, /\.(svg|png|jpg|jpeg)$/);
const icons: Partial<CurrencyIcons> = {};

context.keys().forEach((key: string) => {
  const code = path.basename(key, path.extname(key)).toUpperCase()
  icons[code] = context(key);
});

export interface IconProps {
  code: CurrencyCode;
  width?: number;
  height?: number;
}

export const CurrencyIcon = ({code, width = 23, height = 23}: IconProps) => {
  if (typeof (icons[code]) === 'string') {
    return <img src={icons[code]} width={width} height={height}/>;
  } else if (typeof(icons[code]) === 'object') {
    const SvgIcon = icons[code].default;
    return <SvgIcon width={width} height={height}/>;
  } else {
    throw `Could not resolve icon ${code}`;
  }
};
