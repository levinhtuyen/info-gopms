import { ID } from '../../fixtures/ids';
import { viMessages } from '../../fixtures/languages';
import { BASE_URL } from '../../fixtures/urls';
import { INVALID_VALUE, VALID_VALUE } from '../../fixtures/register';
import { ResponseDto } from '../../../src/store/dtos';

describe('register', () => {
  before(() => {
    cy.visit('/');
    cy.get(`#${ID.registerForm}`).scrollIntoView();
  });

  it('should provide select options properly', () => {
    cy.findByPlaceholderText(viMessages.placeholders.HotelType)
      .get('option')
      .each((option, index) => cy.wrap(option[0]).should('have.value', index === 0 ? '' : index));
  });

  context('input validations', () => {
    it('should show validation error of Accommodation Type', () => {
      cy.findByPlaceholderText(viMessages.placeholders.HotelType).focus();
      cy.findByPlaceholderText(viMessages.placeholders.fullName).focus();
      cy.findByRole('status').should('have.text', 'Loại hình lưu trú là bắt buộc.');

      cy.findByPlaceholderText(viMessages.placeholders.HotelType).select(VALID_VALUE.hotelType);
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of Full Name', () => {
      cy.findByPlaceholderText(viMessages.placeholders.fullName)
        .type(INVALID_VALUE.stringOver100)
        .blur();
      cy.findByRole('status').should('have.text', 'Họ và tên phải nhỏ hơn hoặc bằng 100 ký tự.');

      cy.findByPlaceholderText(viMessages.placeholders.fullName).clear();
      cy.findByRole('status').should('have.text', 'Họ và tên là bắt buộc.');

      cy.findByPlaceholderText(viMessages.placeholders.fullName).type(VALID_VALUE.fullName);
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of Accommodation Name', () => {
      cy.findByPlaceholderText(viMessages.placeholders.hotelName)
        .type(INVALID_VALUE.stringOver100)
        .blur();
      cy.findByRole('status').should(
        'have.text',
        'Tên cơ sở lưu trú phải nhỏ hơn hoặc bằng 100 ký tự.',
      );

      cy.findByPlaceholderText(viMessages.placeholders.hotelName).clear();
      cy.findByRole('status').should('have.text', 'Tên cơ sở lưu trú là bắt buộc.');

      cy.findByPlaceholderText(viMessages.placeholders.hotelName).type(VALID_VALUE.hotelName);
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of hotelPhone', () => {
      cy.findByPlaceholderText(viMessages.placeholders.hotelPhone)
        .type(INVALID_VALUE.shorthotelPhone)
        .blur();
      cy.findByRole('status').should('have.text', viMessages.err.hotelPhoneBetween);

      cy.findByPlaceholderText(viMessages.placeholders.hotelPhone)
        .clear()
        .type(INVALID_VALUE.hotelPhoneWithString)
        .blur();
      cy.findByRole('status').should('have.text', 'Di động phải là số.');

      cy.findByPlaceholderText(viMessages.placeholders.hotelPhone)
        .clear()
        .type(INVALID_VALUE.hotelPhoneStartsWith010)
        .blur();
      cy.findByRole('status').should(
        'have.text',
        `“${INVALID_VALUE.hotelPhoneStartsWith010}” phải bắt đầu bằng giá trị hợp lệ.`,
      );

      cy.findByPlaceholderText(viMessages.placeholders.hotelPhone).clear();
      cy.findByRole('status').should('have.text', 'Di động là bắt buộc.');

      cy.findByPlaceholderText(viMessages.placeholders.hotelPhone)
        .type(VALID_VALUE.hotelPhone)
        .blur();
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of Email', () => {
      cy.findByPlaceholderText(viMessages.placeholders.email)
        .type(INVALID_VALUE.emailWrongFormat)
        .blur();
      cy.findByRole('status').should(
        'have.text',
        `“${INVALID_VALUE.emailWrongFormat}” phải là một địa chỉ email hợp lệ.`,
      );

      cy.findByPlaceholderText(viMessages.placeholders.email)
        .clear()
        .type(INVALID_VALUE.emailOver100)
        .blur();
      cy.findByRole('status').should('have.text', 'Email phải nhỏ hơn hoặc bằng 100 ký tự.');

      cy.findByPlaceholderText(viMessages.placeholders.email)
        .clear()
        .type(VALID_VALUE.email)
        .blur();
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of Website', () => {
      cy.findByPlaceholderText(viMessages.placeholders.hotelWebsite)
        .type(INVALID_VALUE.website)
        .blur();
      cy.findByRole('status').should('have.text', 'Vui lòng nhập đúng định dạng url.');

      cy.findByPlaceholderText(viMessages.placeholders.hotelWebsite)
        .clear()
        .type(INVALID_VALUE.websiteOver100)
        .blur();
      cy.findByRole('status').should(
        'have.text',
        'Hotel Website phải nhỏ hơn hoặc bằng 100 ký tự.',
      );

      cy.findByPlaceholderText(viMessages.placeholders.hotelWebsite)
        .clear()
        .type(VALID_VALUE.website)
        .blur();
      cy.findByRole('status').should('not.exist');
    });

    it('should show validation error of Bussiness Address', () => {
      cy.findByPlaceholderText(viMessages.placeholders.hotelAddress)
        .type(INVALID_VALUE.stringOver100)
        .blur();
      cy.findByRole('status').should(
        'have.text',
        'Địa chỉ đăng ký kinh doanh phải nhỏ hơn hoặc bằng 100 ký tự.',
      );

      cy.findByPlaceholderText(viMessages.placeholders.hotelAddress)
        .clear()
        .type(VALID_VALUE.hotelAddress)
        .blur();
      cy.findByRole('status').should('not.exist');
    });
  });

  context('submit', () => {
    it('should register and show Register Successful Modal', () => {
      cy.intercept(`${BASE_URL}/passport/submitRegistrationForm`, (req) => {
        const resBody: ResponseDto<null> = {
          code: 1,
          data: null,
          error: '',
          message: '',
          timestamp: new Date().getTime(),
        };
        req.reply(resBody);
      }).as('submitRequest');

      cy.get('[data-cy=submit-register-form]').click();

      cy.wait('@submitRequest');

      cy.get('[data-cy=register-success-modal]')
        .should('be.visible')
        .and('contain.text', viMessages.registered)
        .and('contain.text', viMessages.registeredModalHeading)
        .and('contain.text', viMessages.registeredModalParagraph);
    });

    it('should close Register Successful Modal', () => {
      cy.get('[data-cy=register-success-modal-close-button]').click();

      cy.get('[data-cy=register-success-modal]').should('not.be.visible');
    });
  });
});
