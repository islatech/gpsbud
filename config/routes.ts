export default [
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
              name: 'Patient',
              icon: 'user',
              path: '/account',
              routes: [
                {
                  name: 'Settings',
                  icon: 'smile',
                  path: '/account/settings',
                  component: './account/settings',
              },
              {
                name: 'Orders',
                icon: 'smile',
                path: '/account/orders',
                component: './account/orders',
                },
                {
                  // patient profile - store products
                  path: 'basic',
                  icon: 'smile',
                  name: 'Details',
                  component: './account/basic',
                },
                {
                  name: 'center',
                  icon: 'smile',
                  path: '/account/center',
                  component: './account/center',
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
            path: '/form',
            icon: 'user',
            name: 'Caregiver',
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
                name: 'Products',
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
                name: 'Store',
                icon: 'shopping',
                path: '/card-list',
                component: './card-list',
              },
              {
                name: 'Checkout',
                icon: 'wallet',
                path: '/step-form',
                component: './step-form',
              },
              {
                name: 'Summary',
                icon: 'form',
                path: '/workplace',
                component: './workplace',
            },
            {
              path: 'projects',
              icon: 'book',
              name: 'Library',
              component: './projects',
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
];
