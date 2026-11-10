import axios, { type InternalAxiosRequestConfig } from 'axios';
import { storage } from '../storage';
import type { CustomAxiosInstance } from './types';

export const apiClient = axios.create({
  baseURL: "http://localhost:8080"
}) as CustomAxiosInstance;

apiClient.interceptors.request.use(withAccessToken)

export function withAccessToken(config: InternalAxiosRequestConfig) {
  const accessToken = storage.get('access_token');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}
