/* eslint-disable no-restricted-syntax */
import queryString from 'query-string';

import { ENDPOINT } from '@renderer/constants/endpoint';

const apiUrlCreator = (
  baseUrl: string,
  url: keyof typeof ENDPOINT,
  query?:
    | {
        [key: string]: string | number | boolean | null | undefined;
      }
    | FormData,
  param?: { [key: string]: string | number | boolean | null | undefined },
) => {
  let urlString = url.toString();
  if (query) {
    urlString += '?';
    const queryConvert = queryString.stringify(query, { encode: true });
    urlString += queryConvert;
  }
  if (param) {
    urlString = urlString.replace(/:([a-zA-Z0-9_]+)/g, (match, p1) => {
      const found = param[p1];
      if (found) {
        return found.toString();
      }
      throw new Error(`${p1} is not found in param`);
    });
  }
  return `${baseUrl}${urlString}`;
};

export default apiUrlCreator;
