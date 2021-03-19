// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/qyc/Documents/qyc/antd-pro-Qyc/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user/login",
            "name": "login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/layouts/SecurityLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/layouts/BasicLayout'), loading: LoadingComponent}),
            "Routes": [
              "src/pages/Authorized"
            ],
            "authority": [
              "admin",
              "user"
            ],
            "routes": [
              {
                "path": "/home",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/home'), loading: LoadingComponent}),
                "name": "首页",
                "exact": true
              },
              {
                "path": "/form",
                "name": "表单页",
                "routes": [
                  {
                    "path": "/form",
                    "redirect": "/form/basic-form",
                    "exact": true
                  },
                  {
                    "name": "basic-form",
                    "icon": "smile",
                    "path": "/form/basic-form",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/form/basic-form'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "step-form",
                    "icon": "smile",
                    "path": "/form/step-form",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/form/step-form'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "advanced-form",
                    "icon": "smile",
                    "path": "/form/advanced-form",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/form/advanced-form'), loading: LoadingComponent}),
                    "exact": true
                  }
                ]
              },
              {
                "path": "/list",
                "name": "表格组件",
                "routes": [
                  {
                    "path": "/list/search",
                    "name": "search-list",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/search'), loading: LoadingComponent}),
                    "routes": [
                      {
                        "path": "/list/search",
                        "redirect": "/list/search/articles",
                        "exact": true
                      },
                      {
                        "name": "articles",
                        "icon": "smile",
                        "path": "/list/search/articles",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/search/articles'), loading: LoadingComponent}),
                        "exact": true
                      },
                      {
                        "name": "projects",
                        "icon": "smile",
                        "path": "/list/search/projects",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/search/projects'), loading: LoadingComponent}),
                        "exact": true
                      },
                      {
                        "name": "applications",
                        "icon": "smile",
                        "path": "/list/search/applications",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/search/applications'), loading: LoadingComponent}),
                        "exact": true
                      }
                    ]
                  },
                  {
                    "path": "/list",
                    "redirect": "/list/table-list",
                    "exact": true
                  },
                  {
                    "name": "table-list",
                    "icon": "smile",
                    "path": "/list/table-list",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/table-list'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "basic-list",
                    "icon": "smile",
                    "path": "/list/basic-list",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/basic-list'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "card-list",
                    "icon": "smile",
                    "path": "/list/card-list",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/list/card-list'), loading: LoadingComponent}),
                    "exact": true
                  }
                ]
              },
              {
                "path": "/profile",
                "name": "用户中心",
                "routes": [
                  {
                    "name": "basic",
                    "icon": "smile",
                    "path": "/profile/basic",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/profile/basic'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "path": "/profile",
                    "redirect": "/profile/basic",
                    "exact": true
                  },
                  {
                    "name": "advanced",
                    "icon": "smile",
                    "path": "/profile/advanced",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/profile/advanced'), loading: LoadingComponent}),
                    "exact": true
                  }
                ]
              },
              {
                "path": "/system",
                "name": "标签页",
                "routes": [
                  {
                    "name": "操作管理",
                    "icon": "icon-edit",
                    "path": "/system/operation-log",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__operation-log' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/system/operation-log'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "path": "/system",
                    "redirect": "/system/operation-log",
                    "exact": true
                  },
                  {
                    "name": "二级菜单",
                    "icon": "icon-key",
                    "path": "/system/auth-manage",
                    "routes": [
                      {
                        "path": "/system/auth-manage",
                        "redirect": "/system/auth-manage/operator",
                        "exact": true
                      },
                      {
                        "name": "授权管理",
                        "path": "/system/auth-manage/operator",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__auth-manage__operator' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/system/auth-manage/operator'), loading: LoadingComponent}),
                        "exact": true
                      },
                      {
                        "name": "二级标签",
                        "path": "/system/auth-manage/role",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__auth-manage__role' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/system/auth-manage/role'), loading: LoadingComponent}),
                        "exact": true
                      },
                      {
                        "name": "权限管理",
                        "path": "/system/auth-manage/authority",
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__auth-manage__authority' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/system/auth-manage/authority'), loading: LoadingComponent}),
                        "exact": true
                      },
                      {
                        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/404'), loading: LoadingComponent}),
                        "exact": true
                      }
                    ]
                  }
                ]
              },
              {
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/404'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/404",
            "name": "404",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'/Users/qyc/Documents/qyc/antd-pro-Qyc/src/pages/exception/404'), loading: LoadingComponent}),
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
