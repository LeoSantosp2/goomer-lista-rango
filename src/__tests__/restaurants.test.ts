import knex from '../config/knex';

import restaurantsController from '../controllers/restaurants-controller';

jest.mock('../config/knex');

const request = {
  body: {
    restaurantName: 'Mc Donalds',
    restaurantAddress: 'Rua Barbosa Silva N°775',
    openingHours:
      'De Segunda a Sexta-feira das 09H às 21H e de Sabádo a Domingo das 11H às 21H',
    restaurantPhoto: 'Logo mc-donalds',
  },

  params: {
    id: '123',
  },
};

const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe('Restaurants Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show all restaurants', async () => {
    await restaurantsController.index(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
  });

  it('should show a restaurant', async () => {
    await restaurantsController.store(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
  });

  it('should register a restaurant', async () => {
    await restaurantsController.store(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.body).toStrictEqual({
      restaurantName: 'Mc Donalds',
      restaurantAddress: 'Rua Barbosa Silva N°775',
      openingHours:
        'De Segunda a Sexta-feira das 09H às 21H e de Sabádo a Domingo das 11H às 21H',
      restaurantPhoto: 'Logo mc-donalds',
    });
    expect(response.status).toHaveBeenCalledWith(200);
  });

  it('should update a restaurant', async () => {
    await restaurantsController.update(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.body).toStrictEqual({
      restaurantName: 'Mc Donalds',
      restaurantAddress: 'Rua Barbosa Silva N°775',
      openingHours:
        'De Segunda a Sexta-feira das 09H às 21H e de Sabádo a Domingo das 11H às 21H',
      restaurantPhoto: 'Logo mc-donalds',
    });
    expect(request.params.id).toBe('123');
  });

  it('should delete a restaurant', async () => {
    await restaurantsController.delete(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
  });
});
