import { Serie } from '@/models/serie';
import axios, { AxiosResponse } from 'axios';
import { SERIEURL } from '../const/url';

class SerieService {
  async getByName(name: string): Promise<Serie> {
    try {
      const response: AxiosResponse<Serie> = await axios.get(SERIEURL + name);
      return response.data;
    } catch (err) {
      throw new Error('SerieService.getByName error:' + err);
    }
  }
}
export default new SerieService();
