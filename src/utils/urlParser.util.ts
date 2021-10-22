class UrlParserUtil {
  getUrlElementByIndex(detailLink: string, index: number): string {
    const link = detailLink.split('/');
    return link[index] ? link[index] : '';
  }
}
export default new UrlParserUtil();
