import SerieDetail from '@/components/details/serieDetail.vue';
import { SERIE_CONTENTS } from '@/tests/mock/contents.stub';
import { SERIE_DETAIL } from '@/tests/mock/detail.stub';
import { SERIE_DATA } from '@/tests/mock/serieData.stub';
import { TITLE } from '@/tests/mock/title.stub';
import { shallowMount, VueWrapper } from '@vue/test-utils';

jest.mock('axios');

/* eslint-disable  @typescript-eslint/no-explicit-any */
let wrapper: VueWrapper<any>;

describe('SerieDetail => methods', () => {
  beforeEach(() => {
    window.localStorage.setItem(JSON.stringify(SERIE_DATA), 'serieData');
    wrapper = shallowMount(SerieDetail, {
      props: {
        detaillink: TITLE,
      },
      data: () => {
        return {
          serieData: SERIE_CONTENTS,
        };
      },
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getPitch should return pitch when content is a serie', async () => {
    // GIVEN
    const contents = SERIE_DETAIL.contents;

    // WHEN
    const pitch = wrapper.vm.getPitch(contents);

    // THEN
    if (SERIE_DETAIL.contents.seasons?.length) {
      expect(pitch).toBe(SERIE_DETAIL.contents.seasons[0].pitch);
    }
  });
});
