import { Detail } from '@/models/detail';
import axios, { AxiosResponse } from 'axios';
import { DETAILSURL } from '../const/url';

class DetailService {
  async getByDetaillink(type: string, value: string): Promise<Detail> {
    try {
      const response: AxiosResponse<Detail> = await axios.get(
        DETAILSURL + type + '/' + value
      );
      return response.data;
    } catch (err) {
      throw new Error('DetailService.getByDetaillink error:' + err);
    }
  }
}
export default new DetailService();
