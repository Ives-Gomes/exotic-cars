import { AxiosResponse } from 'axios';

import api from '@services/api.config';

interface ICars {
  getCars: () => Promise<AxiosResponse>;
}

const CarsMethods = (): ICars => {
  async function getCars(): Promise<AxiosResponse> {
    return api.get('/cars');
  }

  return { getCars };
};

export default CarsMethods;
