// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
                {
                  name: 'account',
              icon: 'user',
              path: '/account',
              routes: [
                  {
                    name: 'center',
                    icon: 'smile',
                    path: '/account/center',
                    component: './account/center',
                  },
                  {
                    name: 'settings',
                    icon: 'smile',
                    path: '/account/settings',
                    component: './account/settings',
                },
              ],
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'profile',
              routes: [
                {
                  path: '/',
                  redirect: '/profile/basic',
                },
                {
                  name: 'basic',
                  icon: 'smile',
                  path: '/profile/basic',
                  component: './profile/basic',
                },
                {
                  name: 'advanced',
                  icon: 'smile',
                  path: '/profile/advanced',
                  component: './profile/advanced',
                },
              ],
            },
            {
              path: '/form',
              icon: 'form',
              name: 'form',
              routes: [
                {
                  path: '/',
                  redirect: '/form/basic-form',
                },
                {
                  name: 'basic-form',
                  icon: 'smile',
                  path: '/form/basic-form',
                  component: './form/basic-form',
                },
                {
                  name: 'advanced-form',
                  icon: 'smile',
                  path: '/form/advanced-form',
                  component: './form/advanced-form',
                },
              ],
            },
            {
              path: '/list',
              icon: 'table',
              name: 'list',
              routes: [
                    {
                      name: 'Library',
                      icon: 'smile',
                      path: '/list/search/projects',
                      component: './list/search/projects',
                    },
                    {
                      
                      name: 'applications',
                      icon: 'smile',
                      path: '/list/search/applications',
                      component: './list/search/applications',
                    },
                {
                  path: '/',
                  redirect: '/list/table-list',
                },
                {
                  // store orders
                  name: 'table-list',
                  icon: 'smile',
                  path: '/list/table-list',
                  component: './list/table-list',
                },
                {
                  // store products
                  name: 'card-list',
                  icon: 'smile',
                  path: '/list/card-list',
                  component: './list/card-list',
                },
              ],
            },
            // {
            //   name: 'result',
            //   icon: 'CheckCircleOutlined',
            //   path: '/result',
            //   routes: [
            //     {
            //       path: '/',
            //       redirect: '/result/success',
            //     },
            //     {
            //       name: 'success',
            //       icon: 'smile',
            //       path: '/result/success',
            //       component: './result/success',
            //     },
            //     {
            //       name: 'fail',
            //       icon: 'smile',
            //       path: '/result/fail',
            //       component: './result/fail',
            //     },
            //   ],
            // },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    'info-color': "#F0F0F0"
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
