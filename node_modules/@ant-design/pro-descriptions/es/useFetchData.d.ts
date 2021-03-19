export declare type RequestData = {
    data: any;
    success?: boolean;
    [key: string]: any;
};
export declare type UseFetchDataAction<T extends RequestData> = {
    dataSource: T['data'] | T;
    setDataSource: (value: T['data'] | T) => void;
    loading: boolean | undefined;
    reload: () => Promise<void>;
};
declare const useFetchData: <T extends RequestData>(getData: () => Promise<T>, options?: {
    effects?: any[] | undefined;
    manual: boolean;
    loading?: boolean | undefined;
    onLoadingChange?: ((loading?: boolean | undefined) => void) | undefined;
    onRequestError?: ((e: Error) => void) | undefined;
    dataSource?: T["data"] | undefined;
    defaultDataSource?: T["data"] | undefined;
    onDataSourceChange?: ((value: T["data"]) => void) | undefined;
} | undefined) => UseFetchDataAction<T>;
export default useFetchData;
