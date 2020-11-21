// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
const { REACT_APP_ENV } = process.env;

const { pwa } = defaultSettings;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  pwa: pwa,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    // 'info-color': "#F0F0F0"
    // 'uccess-color': '@green-6',
    // 'error-color':  '@red-5;',
    // 'highlight-color': '@red-5',
    // 'warning-color': ' @gold-6;',
    // 'normal-color': '#d9d9d9',
    // 'white': '#ff',
    // 'black': "#000"
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
