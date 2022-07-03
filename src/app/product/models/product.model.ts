import { BaseModal } from "src/app/shared/models/base-model.model";

export class Product extends BaseModal {
  price: number;
  description: string;
  name: string;
  imageUrl: string;
  status: true;
  category: string;
}
