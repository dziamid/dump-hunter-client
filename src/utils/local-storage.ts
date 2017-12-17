const namespace = 'root';

declare const window: Window & {
  isDebugMode: typeof isDebugMode,
  setDebugMode: typeof setDebugMode,
};

const {localStorage} = window;

export const getItem = (key: string, defaultValue?: any) => {
  const stringValue = localStorage.getItem(`${namespace}.${key}`);
  if (stringValue === null) {
    return defaultValue;
  }

  return JSON.parse(stringValue);
};

export const setItem = (key: string, value: any) => {
  return localStorage.setItem(`${namespace}.${key}`, JSON.stringify(value));
};

export const isDebugMode = (type: string | boolean = true) => {
  return getItem('debugMode', false) === type;
};

export const setDebugMode = (value: string | boolean) => setItem('debugMode', value);

Object.assign(window, {
  isDebugMode,
  setDebugMode,
});
