// @ts-nocheck
import { IRoute } from '@umijs/core';
import { AnyAction } from 'redux';
import React from 'react';
import { EffectsCommandMap, SubscriptionAPI } from 'dva';
import { match } from 'react-router-dom';
import { Location, LocationState, History } from 'history';

export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/models/global';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/models/login';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/models/setting';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/models/user';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/account/center/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/account/settings/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/dashboard/analysis/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/dashboard/monitor/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/dashboard/workplace/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/form/advanced-form/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/form/basic-form/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/form/step-form/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/basic-list/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/card-list/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/search/applications/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/search/articles/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/list/search/projects/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/profile/advanced/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/profile/basic/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/user/login/model';
export * from '/Users/xcesiv/work/code/src/github.com/islatech/gpsbud/src/pages/user/register/model';

export interface Action<T = any> {
  type: T
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S;

export type ImmerReducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => void;

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap,
) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export type Subscription = (api: SubscriptionAPI, done: Function) => void | Function;

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    [key: string]: any;
  };
}

/**
 * @type P: Params matched in dynamic routing
 */
export interface ConnectProps<
  P extends { [K in keyof P]?: string } = {},
  S = LocationState,
  T = {}
> {
  dispatch?: Dispatch;
  // https://github.com/umijs/umi/pull/2194
  match?: match<P>;
  location: Location<S> & { query: T };
  history: History;
  route: IRoute;
}

export type RequiredConnectProps<
  P extends { [K in keyof P]?: string } = {},
  S = LocationState,
  T = {}
  > = Required<ConnectProps<P, S, T>>

/**
 * @type T: React props
 * @type U: match props types
 */
export type ConnectRC<
  T = {},
  U = {},
  S = {},
  Q = {}
> = React.ForwardRefRenderFunction<any, T & RequiredConnectProps<U, S, Q>>;
