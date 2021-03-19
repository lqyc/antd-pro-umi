
export interface TabModel {
  title?: string,
  path?: string
}

export const getTabsList = (key: string) => {
  let newKey = key
  if (key.includes('?')) {
    // eslint-disable-next-line prefer-destructuring
    newKey = key.split('?')[0];
  }
  const tab: TabModel = {}
  
  switch (newKey) {
    case '/system/operation-log':
      tab.title = '操作管理'
      tab.path =newKey
      break;
    case '/system/auth-manage/role':
      tab.title = '二级标签'
      tab.path =newKey
      break;
    case '/system/auth-manage/operator':
      tab.title = '授权管理'
      tab.path =newKey
      break;
    case '/system/auth-manage/authority':
      tab.title = '权限管理'
      tab.path =newKey
      break;
    default :
      break;
  }
  return tab;
}
