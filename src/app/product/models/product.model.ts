import { BaseModal } from '../../shared/models/base-model.model';
export class Product extends BaseModal {
  price: number;
  description: string;
  name: string;
  imageUrl: string;
  status: false;
  category: string;
}
