import { defineStore } from 'pinia';
import { api } from '@/api';
import type { ResponseDto } from './dtos';
import type { AxiosError } from 'axios';

export interface IHotelType {
  sn: number;
  name: string;
  memo: string | null;
}

export interface IState {
  isRegistered: boolean;
  hotelTypes: IHotelType[] | null;
  apiErr: string | null;
}

interface IRegisterBody {
  website?: string | undefined;
  hotelAddress: string;
  hotelTypeSn: number;
  hotelName: string;
  fullName: string;
  email: string;
  phone: string;
}

export const useRegisterStore = defineStore('register-store', {
  state: (): IState => ({
    isRegistered: false,
    hotelTypes: null,
    apiErr: null,
  }),
  actions: {
    async getHotelTypes() {
      try {
        const { data } = await api.get<ResponseDto<IHotelType[]>>('/appendix/getHotelTypeList');
        if (data.code !== 1) return;
        this.$state.hotelTypes = data.data;
      } catch (err: any) {
        this.$state.apiErr = err.response.data ?? 'Something went wrong.';
      }
    },
    async register(body: IRegisterBody) {
      try {
        const { data } = await api.post<ResponseDto<null>>(
          '/passport/submitRegistrationForm',
          body,
        );
        if (data.code !== 1) {
          this.$state.apiErr = data.error[0].message;
          return false;
        }
        this.$state.isRegistered = true;
        this.$state.apiErr = null;
        return true;
      } catch (err) {
        const message = (err as AxiosError<ResponseDto<null>>).response?.data.error[0].message;
        this.$state.apiErr = message ?? 'Something went wrong.';
        return false;
      }
    },
  },
});
