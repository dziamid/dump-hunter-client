export interface CurrencyChange {
  name: string; // BTC_LSK
  price: number; // 0.00068002, e.g. 1 LSK to 1 BTC ratio1
  change: number; // -0.03242697 percent of price change over the last 24h
}

export enum CurrencyCode {
  AMP = 'AMP',
  ARDR = 'ARDR',
  BCH = 'BCH',
  BCN = 'BCN',
  BCY = 'BCY',
  BELA = 'BELA',
  BLK = 'BLK',
  BTCD = 'BTCD',
  BTM = 'BTM',
  BTS = 'BTS',
  BURST = 'BURST',
  CLAM = 'CLAM',
  CVC = 'CVC',
  DASH = 'DASH',
  DCR = 'DCR',
  DGB = 'DGB',
  DOGE = 'DOGE',
  EMC2 = 'EMC2',
  ETC = 'ETC',
  ETH = 'ETH',
  EXP = 'EXP',
  FCT = 'FCT',
  FLDC = 'FLDC',
  FLO = 'FLO',
  GAME = 'GAME',
  GAS = 'GAS',
  GNO = 'GNO',
  GNT = 'GNT',
  GRC = 'GRC',
  HUC = 'HUC',
  LBC = 'LBC',
  LSK = 'LSK',
  LTC = 'LTC',
  MAID = 'MAID',
  NAV = 'NAV',
  NEOS = 'NEOS',
  NMC = 'NMC',
  NXC = 'NXC',
  NXT = 'NXT',
  OMG = 'OMG',
  OMNI = 'OMNI',
  PASC = 'PASC',
  PINK = 'PINK',
  POT = 'POT',
  PPC = 'PPC',
  RADS = 'RADS',
  REP = 'REP',
  RIC = 'RIC',
  SBD = 'SBD',
  SC = 'SC',
  STEEM = 'STEEM',
  STORJ = 'STORJ',
  STR = 'STR',
  STRAT = 'STRAT',
  SYS = 'SYS',
  VIA = 'VIA',
  VRC = 'VRC',
  VTC = 'VTC',
  XBC = 'XBC',
  XCP = 'XCP',
  XEM = 'XEM',
  XMR = 'XMR',
  XPM = 'XPM',
  XRP = 'XRP',
  XVC = 'XVC',
  ZEC = 'ZEC',
  ZRX = 'ZRX',
}