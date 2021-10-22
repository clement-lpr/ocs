import { SerieData } from '@/models/serieData';

class LocalStorageUtil {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  storeData(data: SerieData | string | any, key: string) {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }
    const item = localStorage.getItem(key);

    if (!item) {
      return;
    }
    return JSON.parse(item);
  }

  removeData(key: string) {
    if (!window.localStorage || !window.JSON || !key) {
      return;
    }
    localStorage.removeItem(key);
  }
}
export default new LocalStorageUtil();
