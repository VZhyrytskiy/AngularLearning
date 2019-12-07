import { OrderByPipe } from './order-by.pipe';
import { SortService } from '../../core/services/sort.service';

describe('OrderBy pipe', () => {

  const sortService = new SortService();
  const pipe = new OrderByPipe(sortService);

  const test = [
    { name: '111' },
    { name: '222' }
  ];


  it('should order by descending by default', () => {

    const result = pipe.transform(test, 'name');

    expect(result[0].name).toBe('222');
    expect(result[1].name).toBe('111');
  });
});
