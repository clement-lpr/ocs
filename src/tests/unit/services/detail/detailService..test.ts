import DetailService from '@/services/detail/detailService';
import { TITLE } from '@/tests/mock/title.stub';

describe('detailService', () => {
  it('should call the API', async () => {
    // GIVEN
    const searchInput = TITLE;

    // WHEN
    const detail = await DetailService.getByDetaillink(
      searchInput.type,
      searchInput.value
    );

    // THEN
    expect(detail.contents.id).toBe('PSTHEHANDMAW0123458');
  });

  it('should send an error with wrong input', async () => {
    // GIVEN

    // WHEN
    try {
      await DetailService.getByDetaillink('', '');
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (e: any) {
      // THEN
      expect(e.message).toMatch('DetailService.getByDetaillink error');
    }
  });
});
