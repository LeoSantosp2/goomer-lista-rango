import knex from '../config/knex';

import discountsController from '../controllers/discounts-controller';

jest.mock('../config/knex');

const request = {
  body: {
    discountDescription: 'Description',
    discountPercent: 0.05,
    weekDays: '5, 6',
    startHour: '08:00:00',
    endHour: '20:00:00',
  },

  params: {
    id: '123',
  },

  query: {
    product_id: '12345',
  },
};

const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe('Discounts Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should register one discount', async () => {
    await discountsController.store(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
    expect(request.body).toStrictEqual({
      discountDescription: 'Description',
      discountPercent: 0.05,
      weekDays: '5, 6',
      startHour: '08:00:00',
      endHour: '20:00:00',
    });
  });

  it('should update a discount', async () => {
    await discountsController.update(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.body).toStrictEqual({
      discountDescription: 'Description',
      discountPercent: 0.05,
      weekDays: '5, 6',
      startHour: '08:00:00',
      endHour: '20:00:00',
    });
    expect(request.params.id).toBe('123');
  });

  it('should delete a discount', async () => {
    await discountsController.delete(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
  });
});
