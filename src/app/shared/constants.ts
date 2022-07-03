export class Constants {
  static defaultPageSize = 10;
  static defaultPageSizeOptions = [5, 10, 25, 50];
  static isEmpty(object: any) {
    for (const property in object) {
      return false;
    }
    return true;
  }
}
