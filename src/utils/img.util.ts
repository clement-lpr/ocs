class ImgUtil {
  getImgUrl(baseUrl: string): string {
    return 'https://statics.ocs.fr' + baseUrl;
  }
}
export default new ImgUtil();
