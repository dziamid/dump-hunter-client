import * as React from 'react';
import { Currency } from '../../types';

const path = require('path');
type CurrencyIcons = {[key in Currency]: any};

declare const require: NodeRequire & { context: any };

const context = require.context('./icons', false, /\.(svg|png|jpg|jpeg)$/);
const icons: Partial<CurrencyIcons> = {};

context.keys().forEach((key: string) => {
  const name = path.basename(key, path.extname(key));
  icons[name] = context(key);
});

export interface IconProps {
  name: Currency;
  width?: number;
  height?: number;
}

export const CurrencyIcon = ({name, width = 23, height = 23}: IconProps) => {
  if (typeof (icons[name]) === 'string') {
    return <img src={icons[name]} width={width} height={height}/>;
  } else if (typeof(icons[name]) === 'object') {
    const SvgIcon = icons[name].default;
    return <SvgIcon width={width} height={height}/>;
  } else {
    throw `Could not resolve icon ${name}`;
  }
};
