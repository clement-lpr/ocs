import Player from '@/components/player/player.vue';
import shakaUtil from '@/utils/shaka.util';
import { shallowMount, VueWrapper } from '@vue/test-utils';

/* eslint-disable  @typescript-eslint/no-explicit-any */
let wrapper: VueWrapper<any>;

describe('Player click on homepage', () => {
  beforeEach(() => {
    wrapper = shallowMount(Player, {
      props: {
        licenseServer: 'https://widevine-proxy.appspot.com/proxy',
        manifestUrl:
          'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        posterUrl: '',
      },
    });
  });
  it('should hide the posterImage onClick', async () => {
    // GIVEN

    // WHEN
    wrapper.find('#playButton').trigger('click');

    // THEN
    expect(wrapper.vm.isVideoDisplayed).toEqual(true);
    expect(wrapper.find('#posterImage')).toBeDefined;
  });

  it('should start the shakkaplayer onClick', async () => {
    // GIVEN
    const shakkaSpy = jest.spyOn(shakaUtil, 'loadPlayer');

    // WHEN
    wrapper.find('#playButton').trigger('click');

    // THEN
    expect(shakkaSpy).toHaveBeenCalled();
  });
});
