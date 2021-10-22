import SerieList from '@/components/search/serieList.vue';
import { SERIE } from '@/tests/mock/serie.stub';
import { shallowMount, VueWrapper } from '@vue/test-utils';

/* eslint-disable  @typescript-eslint/no-explicit-any */
let wrapper: VueWrapper<any>;

describe('SearchList', () => {
  beforeEach(() => {
    wrapper = shallowMount(SerieList);
  });

  it('should display a list of details when the searchlist is filled', async () => {
    // GIVEN

    // WHEN
    wrapper.setProps({ searchList: SERIE });
    await wrapper.vm.$forceUpdate();

    // THEN
    expect(wrapper.vm.list).toEqual(SERIE.contents);
  });

  it('should return en empty list when searchlist length is inferior to 1', async () => {
    // GIVEN

    // WHEN
    wrapper.setProps({ searchList: [] });
    await wrapper.vm.$forceUpdate();

    // THEN
    expect(wrapper.vm.list).toHaveLength(0);
  });
});

// describe('SearchList local storage', () => {
//   beforeEach(() => {
//     wrapper = shallowMount(SerieList);
//   });
//   it('should clear the localstorage', () => {
//     // GIVEN

//     // WHEN
//     // const removeItem = jest.spyOn(LocalStorageUtil, 'removeData');
//     jest.spyOn(window.localStorage.__proto__, 'removeItem');

//     // THEN
//     expect(window.localStorage.removeItem).toHaveBeenCalled();
//   });
// });
