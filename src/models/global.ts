import type { Reducer, Effect } from 'umi';
import { history } from 'umi';
import type { NoticeIconData } from '@/components/NoticeIcon';
import { queryNotices } from '@/services/user';
import type { ConnectState } from './connect.d';
import { GLOBAL } from "./const";

export type GlobalModelRoute = {
  currentRoutes: RoutesItem[];
};

export type RoutesItem = {
  title: string;
  key: string;
  map?: any
} 

export type NoticeItem = {
  id: string;
  type: string;
  status: string;
} & NoticeIconData;

export type GlobalModelState = {
  collapsed: boolean;
  notices: NoticeItem[];
  currentRoutes: RoutesItem[]
};

export type GlobalModelType = {
  namespace: string;
  state: GlobalModelState;
  effects: {
    fetchNotices: Effect;
    clearNotices: Effect;
    changeNoticeReadState: Effect;
    changeTagPage: Effect;
    clearTagPage: Effect;
    removeCurrentTag: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
    saveNotices: Reducer<GlobalModelState>;
    saveClearedNotices: Reducer<GlobalModelState>;
    changeCurrentTagPage:Reducer<GlobalModelState>;
    clearCurrentTagPages: Reducer<GlobalModelState>;
    removeCurrentTagPages: Reducer<GlobalModelState>;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: GLOBAL,

  state: {
    collapsed: false,
    notices: [],
    currentRoutes: []
  },

  effects: {
    // 改变标签页
    *changeTagPage({ payload }, { put, select }) {
        if (payload) {
          yield put({
            type: 'changeCurrentTagPage',
            payload: payload,
          });
        }
    },
    // 清空标签页路由
    *clearTagPage({ payload },{ put, select }) {
      // console.log('clearTagPage标签页')
      yield put({
        type: 'clearCurrentTagPages'
      });
    },
    *removeCurrentTag({ payload },{ put, select }) {
      let current: Array<any> = yield select((state: ConnectState) => state.global.currentRoutes);
      if (current.length > 1) {
        // 当前跳转索引
        let currentIndex = 0;
        current.forEach((pane:any,i:number)=>{
          if (pane.path == payload.currentPath) currentIndex = i
        })
        currentIndex = currentIndex == 0 ? currentIndex+1:currentIndex-1

        if (payload.currentTab == payload.currentPath) {      
          history.push(current[currentIndex].path);
        }
        // 删除非当前页的标签页
        current = current.filter(i=>i.path !== payload.currentTab)
        yield put({
          type: 'removeCurrentTagPages',
          payload: current
        });
      } else {
        history.push('/home');
      }
    },
    *fetchNotices(_, { call, put, select }) {
      const data = yield call(queryNotices);
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount: number = yield select(
        (state: ConnectState) => state.global.notices.filter((item) => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: data.length,
          unreadCount,
        },
      });
    },
    *clearNotices({ payload }, { put, select }) {
      yield put({
        type: 'saveClearedNotices',
        payload,
      });
      const count: number = yield select((state: ConnectState) => state.global.notices.length);
      const unreadCount: number = yield select(
        (state: ConnectState) => state.global.notices.filter((item) => !item.read).length,
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: count,
          unreadCount,
        },
      });
    },
    *changeNoticeReadState({ payload }, { put, select }) {
      const notices: NoticeItem[] = yield select((state: ConnectState) =>
        state.global.notices.map((item) => {
          const notice = { ...item };
          if (notice.id === payload) {
            notice.read = true;
          }
          return notice;
        }),
      );

      yield put({
        type: 'saveNotices',
        payload: notices,
      });

      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: notices.length,
          unreadCount: notices.filter((item) => !item.read).length,
        },
      });
    },
  },

  reducers: {
    // 改变当前标签页
    changeCurrentTagPage(state= { notices: [], collapsed: true,currentRoutes:[] },{ payload }): GlobalModelState{
      let _currentRoutes:Array<any> = state.currentRoutes.concat(payload)
      // 路由去重
       let obj:object ={}
       _currentRoutes=_currentRoutes.reduce(function(item, next){
        obj[next.path]?'':obj[next.path] =true && item.push(next)
        return item
       },[])
      //  console.log('当前路由--',_currentRoutes)
      return {
        ...state,
        currentRoutes: _currentRoutes
      };
    },
    // 关闭当前标签页
    removeCurrentTagPages(state= { notices: [], collapsed: true,currentRoutes:[] }, { payload }): GlobalModelState {
      return {
        ...state,
        currentRoutes: payload
      };
    },
    // 清空标签页路由
    clearCurrentTagPages(state= { notices: [], collapsed: true,currentRoutes:[] }): GlobalModelState {
      return {
        ...state,
        currentRoutes: []
      };
    },
    changeLayoutCollapsed(state = { notices: [], collapsed: true, currentRoutes:[] }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state = { notices: [], collapsed: true,currentRoutes:[] }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: false,
        notices: payload
      };
    },
    saveClearedNotices(state = { notices: [], collapsed: true,currentRoutes:[] }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: false,
        notices: state.notices.filter((item): boolean => item.type !== payload),
      };
    },
  },
};

export default GlobalModel;
