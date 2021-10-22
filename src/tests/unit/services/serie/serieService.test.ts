import SerieService from '@/services/serie/serieService';

describe('serieService', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call the API', async () => {
    // GIVEN
    const searchInput = 'ha';

    // WHEN
    const series = await SerieService.getByName(searchInput);

    // THEN
    expect(series.total).toBe(118);
  });

  it('should send an error', async () => {
    // GIVEN
    const searchInput = '';

    // WHEN
    try {
      await SerieService.getByName(searchInput);
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (e: any) {
      // THEN
      expect(e.message).toMatch('SerieService.getByName error');
    }
  });
});
