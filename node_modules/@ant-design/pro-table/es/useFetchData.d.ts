import type { RequestData, UseFetchProps, UseFetchDataAction } from './typing';
declare const useFetchData: <T extends RequestData<any>>(getData: ((params?: {
    pageSize: number;
    current: number;
} | undefined) => Promise<T>) | undefined, defaultData: any[] | undefined, options: UseFetchProps) => UseFetchDataAction;
export default useFetchData;
