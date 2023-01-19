import axios, { AxiosRequestConfig } from 'axios';

/**
 * apiManager 구현하여 api 호출 중복 처리
 */
const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: { client_id: process.env.REACT_APP_TWITCH_CLIENT_ID },
};

export const apiInstance = axios.create(axiosConfig);
