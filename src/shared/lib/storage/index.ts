import { parseValue } from '../../utils';

export interface StorageKey {
  access_token: string;
  selected_role: string;
  unique_device_identifier: string;
  device_client_type: string;
  roles: string[];
}

function get<K extends keyof StorageKey>(
  key: K,
  defaultValue?: StorageKey[K],
): StorageKey[K] | undefined {
  return parseValue(localStorage.getItem(key) ?? '', defaultValue);
}

function set<K extends keyof StorageKey>(key: K, value: StorageKey[K]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const storage = {
  get,
  set,
};
