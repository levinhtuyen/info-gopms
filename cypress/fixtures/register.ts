export const VALID_VALUE = {
  hotelAddress: 'Testing province, gopms, vietnam',
  hotelName: 'Test accommodation',
  hotelType: 'Hotel',
  email: 'test@email.com',
  fullName: 'Test user',
  hotelPhone: '0932155223',
  website: 'https://go2joy.vn/en-vn',
};

export const INVALID_VALUE = {
  stringOver100:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis pretium purus, eget volutpat massa.',
  emailOver100:
    'LoremipsumdolorsitametconsecteturadipiscingelitNullamquispretiumpurusegetvolutpatmassa@Loremipsum.com',
  emailWrongFormat: 'not@really-email',
  hotelPhoneWithString: '09-434-2345',
  hotelPhoneStartsWith010: '01012341234',
  shorthotelPhone: '093',
  website: 'http//go2joy.vn/en-vn',
  websiteOver100:
    'https://go2joy.vn/en-vn/LoremipsumdolorsitametconsecteturadipiscingelitNullamquispretiumpurusegetvolutpatmassa',
};
