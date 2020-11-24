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
                {
                  // patient profile - store products
                  path: 'basic',
                  icon: 'smile',
                  name: 'Order Details',
                  component: './basic',
                },
                {
                  name: 'Patient Orders',
                  icon: 'smile',
                  path: '/account/OrderDetails',
                  // component: './account/PatientOrders',
              },
              ],
            },
            {
              path: '/profile',
              name: 'profile',
              icon: 'profile',
              routes: [
                // {
                //   path: '/',
                //   redirect: '/profile/basic',
                // },
                // {
                //   // patient profile - store products
                //   name: 'basic',
                //   icon: 'smile',
                //   path: '/profile/basic',
                //   component: './profile/basic',
                // },
                {
                  name: 'advanced',
                  icon: 'smile',
                  path: '/profile/advanced',
                  component: './profile/advanced',
                },
              ],
            },
            {
              path: 'projects',
              icon: 'form',
              name: 'Library',
              component: './projects',
              // routes: [
                // {
                //   name: '',
                //   icon: 'smile',
                //   path: '/list/search/projects',
                //   // component: './list/search/projects',
                // },
                // {
                //   // product details
                //   name: 'advanced-form',
                //   icon: 'smile',
                //   path: '/form/advanced-form',
                //   component: './form/advanced-form',
                // },
                // {
                //   name: 'step-form',
                //   icon: 'smile',
                //   path: '/form/step-form',
                //   component: './form/step-form',
                // }
              // ],
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
                  // product details
                  name: 'advanced-form',
                  icon: 'smile',
                  path: '/form/advanced-form',
                  component: './form/advanced-form',
                },
                {
                  name: 'step-form',
                  icon: 'smile',
                  path: '/form/step-form',
                  component: './form/step-form',
                }
              ],
            },
            {
              path: '/list',
              icon: 'table',
              name: 'list',
              routes: [
                    {
                      
                      name: 'applications',
                      icon: 'smile',
                      path: '/list/search/applications',
                      component: './list/search/applications',
                    },
                
                {
                  // store orders
                  name: 'table-list',
                  icon: 'smile',
                  path: '/list/table-list',
                  component: './list/table-list',
                },
                
                {
                  // product page
                  name: 'basic-list',
                  icon: 'smile',
                  path: '.list/basic-list',
                  component: './list/basic-list',
                },
                
                
              ],
            },
            {
                  // store page
                  name: 'Store Page',
                  icon: 'shopping',
                  path: '/card-list',
                  component: './card-list',
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
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
