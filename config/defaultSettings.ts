import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
  infoColor: string;

};


const proSettings: DefaultSettings = {
  navTheme: 'dark',
  primaryColor: '#FFC20E',
  infoColor: "#fff",
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
};

export type { DefaultSettings };

export default proSettings;

/*
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#FFC20E',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
 menu: {
    locale: true,
  },
  title: 'GPSBud',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
*/