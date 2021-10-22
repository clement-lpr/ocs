import { PlayerError } from '@/models/playerError';
class ShakaUtil {
  loadPlayer(
    videoContainer: HTMLElement,
    videoPlayer: HTMLElement,
    licenseServer: string,
    manifestUrl: string
  ) {
    /* eslint-disable  @typescript-eslint/no-var-requires */
    const shaka = require('shaka-player/dist/shaka-player.ui.js');
    const player = new shaka.Player(videoPlayer);
    const ui = new shaka.ui.Overlay(player, videoContainer, videoPlayer);
    ui.getControls();
    player.configure({
      drm: {
        servers: { 'com.widevine.alpha': licenseServer },
      },
    });
    player
      .load(manifestUrl)
      .then(() => {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  private onError(error: PlayerError) {
    console.error('Error code', error.code, 'object', error);
  }
}
export default new ShakaUtil();
