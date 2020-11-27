// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/meiacevedo/GitHub/gpsbud/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/meiacevedo/GitHub/gpsbud/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/meiacevedo/GitHub/gpsbud/src/layouts/UserLayout'), loading: LoadingComponent}),
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
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/meiacevedo/GitHub/gpsbud/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "name": "Patient",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "name": "Settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/account/settings'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "Orders",
                "icon": "smile",
                "path": "/account/patients-orders",
                "exact": true
              },
              {
                "path": "/account/basic",
                "icon": "smile",
                "name": "Details",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__basic' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/account/basic'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/account/center'), loading: LoadingComponent}),
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
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/profile/advanced'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/form",
            "icon": "user",
            "name": "Caregiver",
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
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/form/basic-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "Products",
                "icon": "smile",
                "path": "/form/advanced-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/form/advanced-form'), loading: LoadingComponent}),
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
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/list/search/applications'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "table-list",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "basic-list",
                "icon": "smile",
                "path": "/list/.list/basic-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/list/basic-list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "Store",
            "icon": "shopping",
            "path": "/card-list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__card-list' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/card-list'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "Checkout",
            "icon": "wallet",
            "path": "/step-form",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__step-form' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/step-form'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "Summary",
            "icon": "form",
            "path": "/workplace",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__workplace' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/workplace'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/projects",
            "icon": "book",
            "name": "Library",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__projects' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/projects'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/meiacevedo/GitHub/gpsbud/src/pages/404'), loading: LoadingComponent}),
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
