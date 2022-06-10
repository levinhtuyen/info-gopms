<template>
  <section class="container mx-auto py-20" :id="ID.registerForm">
    <h3 class="mb-16 text-center text-3xl md:text-4xl font-extrabold">
      {{ t('registerNow') }}
    </h3>
    <form class="grid gap-11 mx-auto" @submit="onSubmit">
      <ul class="grid gap-8">
        <li class="grid gap-7 md:grid-cols-2">
          <div>
            <label :for="NAME.hotelTypeSn">{{ t('hotelType') }} *</label>
            <select
              v-model="hotelTypeSnValue"
              :id="NAME.hotelTypeSn"
              :name="NAME.hotelTypeSn"
              :data-selected="!!hotelTypeSnValue"
              :data-error="!!hotelTypeSnErrMsg"
            >
              <option :value="undefined" disabled selected hidden>
                {{ t('placeholders.HotelType') }}
              </option>
              <option
                v-for="{ sn, name } in hotelTypes"
                :key="sn"
                :value="sn"
                class="text-gray-900"
              >
                {{ name }}
              </option>
            </select>
            <p role="alert">{{ hotelTypeSnErrMsg }}</p>
          </div>
          <div>
            <label :for="NAME.fullName">{{ t('fullName') }} *</label>
            <input
              v-model="fullNameValue"
              :id="NAME.fullName"
              :name="NAME.fullName"
              :placeholder="t('placeholders.fullName')"
              :data-error="!!fullNameErrMsg"
            />
            <p role="alert">{{ fullNameErrMsg }}</p>
          </div>
        </li>
        <li class="grid gap-7 md:grid-cols-2">
          <div>
            <label :for="NAME.hotelName">{{ t('hotelName') }} *</label>
            <input
              v-model="hotelNameValue"
              :id="NAME.hotelName"
              :name="NAME.hotelName"
              :placeholder="t('placeholders.hotelName')"
              :data-error="!!hotelNameErrMsg"
            />
            <p role="alert">{{ hotelNameErrMsg }}</p>
          </div>
          <div>
            <label :for="NAME.phone">{{ t('hotelPhone') }} *</label>
            <input
              :value="phoneValue"
              @input="allowOnlyNumbers"
              :id="NAME.phone"
              :name="NAME.phone"
              :placeholder="t('placeholders.hotelPhone')"
              :data-error="!!phoneErrMsg"
            />
            <p role="alert">{{ phoneErrMsg }}</p>
          </div>
        </li>
        <li class="grid gap-7 md:grid-cols-2">
          <div>
            <label :for="NAME.email">{{ t('email') }} *</label>
            <input
              v-model="emailValue"
              :id="NAME.email"
              :name="NAME.email"
              :placeholder="t('placeholders.email')"
              :data-error="!!emailErrMsg || isEmailAlreadyExistsErr"
            />
            <p role="alert">
              {{
                isEmailAlreadyExistsErr
                  ? t('err.alreadyExists', { name: values.email })
                  : emailErrMsg
              }}
            </p>
          </div>
          <div>
            <label :for="NAME.website">{{ t('website') }}</label>
            <input
              v-model="websiteValue"
              :id="NAME.website"
              :name="NAME.website"
              :placeholder="t('placeholders.website')"
              :data-error="!!websiteErrMsg"
            />
            <p role="alert">{{ websiteErrMsg }}</p>
          </div>
        </li>
        <li class="">
          <div>
            <label :for="NAME.hotelAddress">{{ t('hotelAddress') }} *</label>
            <input
              v-model="hotelAddressValue"
              :id="NAME.hotelAddress"
              :name="NAME.hotelAddress"
              :placeholder="t('placeholders.hotelAddress')"
              :data-error="!!hotelAddressErrMsg"
            />
            <p v-show="hotelAddressErrMsg" role="alert">{{ hotelAddressErrMsg }}</p>
          </div>
        </li>
      </ul>
      <div class="mx-auto">
        <CustomButton
          :text="t('submit')"
          type="submit"
          data-cy="submit-register-form"
          color="primary"
          size="md"
          :isDisabled="!meta.valid"
          :isLoading="isSubmitting"
        />
      </div>
    </form>
    <div class="mt-7 text-center">
      <p role="alert" v-show="!isEmailAlreadyExistsErr && apiErr">{{ apiErr }}</p>
    </div>
    <Teleport to="body">
      <RegisterSuccessModal v-model:isModalOpen="isModalOpen" />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import RegisterSuccessModal from '@/components/Modal/RegisterSuccessModal.vue';
import CustomButton from '@/components/UI/Button.vue';
import { ID } from '@/constants/ids';
import { useI18n } from '@/plugins/i18n';
import { useRegisterStore } from '@/store/register';
import { toFormValidator } from '@vee-validate/zod';
import { storeToRefs } from 'pinia';
import { useField, useForm } from 'vee-validate';
import { computed, onMounted, ref } from 'vue';
import type { ZodLiteral, ZodNumber, ZodObject, ZodOptional, ZodString, ZodUnion } from 'zod';
import { z } from 'zod';

enum NAME {
  hotelAddress = 'hotelAddress',
  hotelTypeSn = 'hotelTypeSn',
  hotelName = 'hotelName',
  fullName = 'fullName',
  website = 'website',
  email = 'email',
  phone = 'phone',
}

type TSchema = {
  [NAME.hotelAddress]: ZodString;
  [NAME.hotelTypeSn]: ZodNumber;
  [NAME.hotelName]: ZodString;
  [NAME.fullName]: ZodString;
  [NAME.website]: ZodUnion<[ZodOptional<ZodString>, ZodLiteral<''>]>;
  [NAME.email]: ZodString;
  [NAME.phone]: ZodString;
};

type TValues = z.infer<ZodObject<TSchema>>;

const { t } = useI18n();
const registerStore = useRegisterStore();
const { hotelTypes, apiErr } = storeToRefs(registerStore);

const isEmailAlreadyExistsErr = computed(() => {
  if (!apiErr.value) return false;
  const isAlreadyExist = apiErr.value.endsWith('already exists');
  const { success: isEmailContained } = z.string().email().safeParse(apiErr.value.split(' ')[0]);
  return isAlreadyExist && isEmailContained;
});

const isModalOpen = ref(false);

onMounted(async () => {
  await registerStore.getHotelTypes();
});

const validationSchema = computed(() =>
  toFormValidator(
    z.object<TSchema>({
      hotelAddress: z
        .string({ required_error: t('err.required', { name: t('hotelAddress') }) })
        .nonempty(t('err.required', { name: t('hotelAddress') }))
        .max(100, t('err.maxLength', { name: t('hotelAddress'), max: 100 })),
      hotelTypeSn: z
        .number({ required_error: t('err.required', { name: t('hotelType') }) })
        .positive(),
      hotelName: z
        .string({ required_error: t('err.required', { name: t('hotelName') }) })
        .nonempty(t('err.required', { name: t('hotelName') }))
        .max(100, t('err.maxLength', { name: t('hotelName'), max: 100 })),
      fullName: z
        .string({ required_error: t('err.required', { name: t('fullName') }) })
        .nonempty(t('err.required', { name: t('fullName') }))
        .min(1, t('err.stringLength', { min: 1, max: 50 }))
        .max(50, t('err.stringLength', { min: 1, max: 50 })),
      website: z
        .string()
        .max(100, t('err.maxLength', { name: t('website'), max: 100 }))
        .optional()
        .or(z.literal('')),
      email: z
        .string({ required_error: t('err.required', { name: t('email') }) })
        .email(t('err.invalidEmail'))
        .nonempty(t('err.required', { name: t('email') }))
        .max(100, t('err.maxLength', { name: t('email'), max: 100 })),
      phone: z
        .string({ required_error: t('err.required', { name: t('hotelPhone') }) })
        .min(8, t('err.hotelPhoneBetween'))
        .max(12, t('err.hotelPhoneBetween'))
        .regex(/^84|^03|^07|^08|^09/, t('err.invalidPhone'))
        .nonempty(t('err.required', { name: t('hotelPhone') })),
    }),
  ),
);

const { handleSubmit, isSubmitting, values, meta } = useForm<TValues>({
  validationSchema,
});

const { value: hotelAddressValue, errorMessage: hotelAddressErrMsg } = useField<string>(
  NAME.hotelAddress,
);
const { value: hotelTypeSnValue, errorMessage: hotelTypeSnErrMsg } = useField<number>(
  NAME.hotelTypeSn,
);
const { value: hotelNameValue, errorMessage: hotelNameErrMsg } = useField<string>(NAME.hotelName);
const { value: fullNameValue, errorMessage: fullNameErrMsg } = useField<string>(NAME.fullName);
const { value: websiteValue, errorMessage: websiteErrMsg } = useField<string>(NAME.website);
const { value: phoneValue, errorMessage: phoneErrMsg } = useField<string>(NAME.phone);
const { value: emailValue, errorMessage: emailErrMsg } = useField<string>(NAME.email);

const onSubmit = handleSubmit(async (values) => {
  const success = await registerStore.register(values);
  if (!success) return;
  isModalOpen.value = true;
});

const allowOnlyNumbers = (event: Event) => {
  const input = event.target as HTMLInputElement;

  if (isNaN(+input.value)) {
    const prevValue = input.value.split('');
    prevValue.pop();
    input.value = prevValue.join('');
    return;
  }

  phoneValue.value = input.value;
};
</script>

<style scoped lang="css">
label {
  @apply mb-4 block;
}

input,
select {
  @apply w-full px-4 py-2 text-xl rounded-md border border-gray-300 outline-none bg-white placeholder-gray-400;
}

input[data-error='true'],
select[data-error='true'] {
  @apply border border-red-600;
}

select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

select[data-selected='false'] {
  @apply text-gray-400;
}

p[role='alert'] {
  @apply text-red-600 text-sm;
}
</style>
