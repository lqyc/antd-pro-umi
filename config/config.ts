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
  history: {
    type: 'browser'
    // type: 'hash'
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  fastRefresh: {}, // 快速刷新
  publicPath: '/assets/',
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
              path: '/user/login',
              name: 'login',
              component: './user/login',
            },
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
          component: '../layouts/SecurityLayout',
          routes: [
            {
              path: '/',
              component: '../layouts/BasicLayout',
              Routes: ['src/pages/Authorized'],
              authority: ['admin', 'user'],
              routes: [
                {
                  path: '/home',
                  component: './home',
                  name: '首页'
                },
                {
                  path: '/form',
                  name: '表单页',
                  routes: [
                    {
                      path: '/form',
                      redirect: '/form/basic-form',
                    },
                    {
                      name: 'basic-form',
                      icon: 'smile',
                      path: '/form/basic-form',
                      component: './form/basic-form',
                    },
                    {
                      name: 'step-form',
                      icon: 'smile',
                      path: '/form/step-form',
                      component: './form/step-form',
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
                  name: '表格组件',
                  routes: [
                    {
                      path: '/list/search',
                      name: 'search-list',
                      component: './list/search',
                      routes: [
                        {
                          path: '/list/search',
                          redirect: '/list/search/articles',
                        },
                        {
                          name: 'articles',
                          icon: 'smile',
                          path: '/list/search/articles',
                          component: './list/search/articles',
                        },
                        {
                          name: 'projects',
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
                      ],
                    },
                    {
                      path: '/list',
                      redirect: '/list/table-list',
                    },
                    {
                      name: 'table-list',
                      icon: 'smile',
                      path: '/list/table-list',
                      component: './list/table-list',
                    },
                    {
                      name: 'basic-list',
                      icon: 'smile',
                      path: '/list/basic-list',
                      component: './list/basic-list',
                    },
                    {
                      name: 'card-list',
                      icon: 'smile',
                      path: '/list/card-list',
                      component: './list/card-list',
                    },
                  ],
                },
                {
                  path: '/profile',
                  name: '用户中心',
                  routes: [
                    {
                      name: 'basic',
                      icon: 'smile',
                      path: '/profile/basic',
                      component: './profile/basic'
                    },
                    {
                      path: '/profile',
                      redirect: '/profile/basic',
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
                  path: '/system',
                  name: '标签页',
                  routes: [
                    {
                      name: '操作管理',
                      icon: 'icon-edit',
                      path: '/system/operation-log',
                      component: './system/operation-log'
                    },
                    {
                      path: '/system',
                      redirect: '/system/operation-log',
                    },
                    {
                      name: '二级菜单',
                      icon: 'icon-key',
                      path: '/system/auth-manage',
                      routes: [
                        {
                          path: '/system/auth-manage',
                          redirect: '/system/auth-manage/operator',
                        },
                        {
                          name: '授权管理',
                          path: '/system/auth-manage/operator',
                          component: './system/auth-manage/operator',
                        },
                        {
                          name: '二级标签',
                          path: '/system/auth-manage/role',
                          component: './system/auth-manage/role',
                        },
                        {
                          name: '权限管理',
                          path: '/system/auth-manage/authority',
                          component: './system/auth-manage/authority',
                        },
                        {
                          component: '404'
                        }
                      ]
                    },
                  ],
                },
                {
                  component: '404',
                },
              ],
            },
            {
              path: '/404',
              name: '404',
              component: './exception/404',
            },
          ]
        }
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
