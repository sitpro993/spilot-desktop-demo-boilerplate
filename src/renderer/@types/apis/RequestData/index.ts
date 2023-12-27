export type RDCommon = {
  body?: {
    [key: string]: any;
  };
  query?:
    | {
        [key: string]: any;
      }
    | FormData;
  param?: {
    [key: string]: any;
  };
};
