import {
    Inject,
    Injectable,
    NotFoundException,
    Provider,
  } from '@nestjs/common';
  import * as Client from '@google/maps';
  import { promisify } from 'util';
  import { LOCATION_KEY } from './inject.keys';
import { ResultAddressGeocoding } from '../port/location.port';
  @Injectable()
  export class LocationService implements ResultAddressGeocoding {
    private googleMapsClient: Client;
  
    constructor(
    //   @Inject(READ_PROVINCES_REPOSITORY)
    //   private readonly _provinceRepository: IReadProvinceRepository,
    ) {
      this.googleMapsClient = new Client.createClient({
        key: 'AIzaSyARlwwctYcKsHNnEci4mDrR9ICgwx7K9SA',
      });
    }
    async resultAddress(input): Promise<any> {
      const reverseGeocodePromise = promisify(
        this.googleMapsClient.reverseGeocode,
      );
      const response = await reverseGeocodePromise({
        latlng: [input.lat, input.long],
      });
  
      if (response.json.results && response.json.results.length > 0) {
        const resu = response.json.results[1].address_components;
  
        const filteredObjects = resu.filter((component) =>
          component.types.includes('administrative_area_level_1'),
        );
        const provincenameObject = filteredObjects[0].long_name;
        //check compare ProvinceName in DB and compare google maps
        // const province = await this._provinceRepository.getOnebyProvinceName(
        //   provincenameObject,
        // );
        // if (!province) throw new NotFoundException();
        // input.province_id = province.id;
        return filteredObjects;
      }
    }
  }
  export const LocationServiceProvider: Provider = {
    provide: LOCATION_KEY,
    useClass: LocationService,
  };
  