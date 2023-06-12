import type { AxiosPromise } from 'axios';
import apiClient from '../http-common';


const BASE_URL = '/create/photo/order';

class order {
	createOrderPhoto = (data: {}) => {
		return apiClient.post(BASE_URL, data); //'order/photo'
	};

}

const OrdersBuilder = new order();

export default OrdersBuilder;
