// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "name": "Patients Account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "name": "Profile Settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/account/settings'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "Patient Orders",
                "icon": "smile",
                "path": "/account/account/patients-orders",
                "exact": true
              },
              {
                "path": "/account/basic",
                "icon": "smile",
                "name": "Order Details",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__basic' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/account/basic'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/account/center'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/profile",
            "name": "profile",
            "icon": "profile",
            "routes": [
              {
                "name": "advanced",
                "icon": "smile",
                "path": "/profile/advanced",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/profile/advanced'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/form",
            "icon": "user",
            "name": "Caregivers Account",
            "routes": [
              {
                "path": "/",
                "redirect": "/form/basic-form",
                "exact": true
              },
              {
                "name": "basic-form",
                "icon": "smile",
                "path": "/form/basic-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/form/basic-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "Store Products",
                "icon": "smile",
                "path": "/form/advanced-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/form/advanced-form'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "icon": "table",
            "name": "list",
            "routes": [
              {
                "name": "applications",
                "icon": "smile",
                "path": "/list/search/applications",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/search/applications'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "table-list",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "basic-list",
                "icon": "smile",
                "path": "/list/.list/basic-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/basic-list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "Store Page",
            "icon": "shopping",
            "path": "/card-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__card-list' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/card-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "Checkout",
            "icon": "wallet",
            "path": "/step-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__step-form' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/step-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "Order Summary",
            "icon": "form",
            "path": "/workplace",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__workplace' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/workplace'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/projects",
            "icon": "book",
            "name": "Library",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__projects' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/projects'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
