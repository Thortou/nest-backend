import { Point } from 'geojson';
export interface AddressGeocoding {
  lat: string;
  long: string;
  province_id: number;
  location: Point;
}
export interface ResultAddressGeocoding {
  resultAddress(input): Promise<AddressGeocoding>;
}