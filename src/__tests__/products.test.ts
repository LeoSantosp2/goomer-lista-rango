import knex from '../config/knex';

import productsController from '../controllers/products-controller';

jest.mock('../config/knex');

const request = {
  body: {
    productName: 'Batata Frita',
    productPrice: 5.3,
    productCategory: 'Frituras',
    productPhoto: 'potato-photo',
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

describe('Products Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show all products', async () => {
    await productsController.index(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.query.product_id).toBe('12345');
  });

  it('should show one product', async () => {
    await productsController.show(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(2);
    expect(request.query.product_id).toBe('12345');
  });

  it('should register one product', async () => {
    await productsController.store(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
    expect(request.body).toStrictEqual({
      productName: 'Batata Frita',
      productPrice: 5.3,
      productCategory: 'Frituras',
      productPhoto: 'potato-photo',
    });
  });

  it('should update a product', async () => {
    await productsController.update(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.body).toStrictEqual({
      productName: 'Batata Frita',
      productPrice: 5.3,
      productCategory: 'Frituras',
      productPhoto: 'potato-photo',
    });
    expect(request.params.id).toBe('123');
  });

  it('should delete a product', async () => {
    await productsController.delete(request, response);

    expect(knex.raw).toHaveBeenCalledTimes(1);
    expect(request.params.id).toBe('123');
  });
});
