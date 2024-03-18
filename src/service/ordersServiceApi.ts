import { Orders } from '@/types/types';

class OrdersServiceApi {
  private BASE_URL = 'https://dzencode-test-tasks-rest-api.onrender.com/api';

  fetchOrders(signal: AbortSignal): Promise<Orders> {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/orders`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          throw Error(data.message);
        }
        return data;
      });
  }
}

const ordersServiceApi = new OrdersServiceApi();

export default ordersServiceApi;
