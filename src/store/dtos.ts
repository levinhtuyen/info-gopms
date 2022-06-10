export interface ResponseDto<D = any> {
  code: number;
  message: string;
  error: {
    code: number;
    message: string;
  }[];
  data: D | null;
  timestamp: number;
}

export interface IRegisterInput {
  accommodation_type: string;
  applicant_name: string;
  accommodation_name: string;
  hotelPhone: string;
  num_of_rooms: string;
  email: string;
  business_address: string;
  receiving_marketing: boolean;
}
