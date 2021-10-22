import SearchBar from '@/components/search/searchBar.vue';
import { Serie } from '@/models/serie';
import { SERIEURL } from '@/services/const/url';
import SerieService from '@/services/serie/serieService';
import { SERIE } from '@/tests/mock/serie.stub';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

/* eslint-disable  @typescript-eslint/no-explicit-any */
let wrapper: VueWrapper<any>;
let getByNameSpy: jest.SpyInstance<Promise<Serie>>;

describe('SearchBar', () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchBar);
    mockedAxios.get.mockResolvedValue({ data: SERIE });
    getByNameSpy = jest.spyOn(SerieService, 'getByName');
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not call the serieService when data is correct', async () => {
    // GIVEN
    const searchInput = 't';

    // WHEN
    wrapper.setData({ search: searchInput });
    await wrapper.vm.$forceUpdate();

    // THEN
    expect(wrapper.exists()).toBeTruthy();
    expect(axios.get).not.toHaveBeenCalledWith(SERIEURL + searchInput);
    expect(getByNameSpy).toHaveBeenCalledTimes(0);
  });

  it('should call the serieService when data is correct', async () => {
    // GIVEN
    const searchInput = 'ta';

    // WHEN
    wrapper.setData({ search: searchInput });
    await wrapper.vm.$forceUpdate();

    // THEN
    expect(wrapper.exists()).toBeTruthy();
    expect(axios.get).toHaveBeenCalledWith(SERIEURL + searchInput);
    expect(getByNameSpy).toHaveBeenCalledTimes(1);
  });
});
