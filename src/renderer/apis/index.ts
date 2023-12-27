import axios, { Method } from 'axios';

import { RDCommon } from '@renderer/@types/apis/RequestData';
import { RECommon } from '@renderer/@types/apis/RequestError';
import { API_URL } from '@renderer/configs';
import { ENDPOINT } from '@renderer/constants/endpoint';
import apiUrlCreator from '@renderer/utils/apiUrlCreator';

export async function callApi<
  TData extends RDCommon,
  TResponse,
  TError extends RECommon,
>({
  method = 'GET',
  baseUrl = API_URL,
  url,
  data,
  isAuth = true,
  isRefreshingToken = false,
}: {
  method?: Method;
  baseUrl?: string;
  url: keyof typeof ENDPOINT;
  data: TData;
  timeLeft?: number;
  isAuth?: boolean;
  requestTimeout?: number;
  isRefreshingToken?: boolean;
}): Promise<{
  data?: TResponse;
  error?: TError | any;
}> {
  try {
    const response = await axios({
      method,
      data: data.body,
      url: apiUrlCreator(baseUrl ?? '', url, data.query, data.param),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.data.ec && response.data.ec !== 0) {
      return { error: response.data };
    }
    return { data: response.data };
  } catch (error) {
    return { error };
  }
}
