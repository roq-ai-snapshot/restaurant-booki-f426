import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  restaurant_id?: string;
}
