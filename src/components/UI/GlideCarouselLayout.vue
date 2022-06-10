<template>
  <div class="lg:px-20">
    <div :class="props.glideClassName">
      <div>
        <div class="glide__track" data-glide-el="track">
          <ul v-show="props.locale === locale" class="glide__slides">
            <li
              class="p-4 rounded-xl border border-primary w-1/3 glide__slide"
              style="height: inherit"
              v-for="(faq, index) in faqs"
              :key="index"
            >
              <h5 class="mb-4 text-xl text-grayScale">Q. {{ faq.question }}</h5>
              <p class="text-base text-gray-800">A. {{ faq.answer }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TLocale, useI18n } from '@/plugins/i18n';

interface IProps {
  glideClassName: string;
  locale: TLocale;
}

const props = defineProps<IProps>();
const { locale } = useI18n();

// This cannot be in i18n because Glidejs does not append its cards dynamically.
const faqs = [
  {
    question:
      props.locale === 'en-US'
        ? 'What makes GoPMS stand apart from other services?'
        : 'Điều gì làm cho GoPMS khác biệt so với các giải pháp khác?',
    answer:
      props.locale === 'en-US'
        ? 'GoPMS is a localized system for small and middle-sized properties with customized services.'
        : 'GoPMS là một hệ thống được phát triển dành riêng cho các khách sạn vừa và nhỏ nội địa với các dịch vụ được thiết kế phù hợp nhất.',
  },
  {
    question:
      props.locale === 'en-US'
        ? 'How do I get my account to have access to GoPMS?'
        : 'Tôi có thể đăng nhập GoPMS bằng cách nào?',
    answer:
      props.locale === 'en-US'
        ? 'We provide the accommodation account after the verification procedures.'
        : 'Chúng tôi cung cấp tài khoản đăng nhập ngay sau khi hoàn thành các bước xác minh.',
  },
  {
    question:
      props.locale === 'en-US'
        ? 'Is there any paid function in GoPMS?'
        : 'GoPMS sẽ có những tính năng trả phí chứ?',
    answer:
      props.locale === 'en-US'
        ? 'No. Currently, all functions of GoPMS provides for free. If there is any update in the future, we will notify you in advance.'
        : 'Không. Hiện tại, mọi tính năng của GoPMS hoàn toàn miễn phí. Đội ngũ chúng tôi sẽ thông báo đến bạn khi có cập nhật mới nhất nhé!',
  },
  {
    question:
      props.locale === 'en-US'
        ? 'What is the GoPMS Contact information?'
        : 'Làm sao để liên hệ đến GoPMS?',
    answer:
      props.locale === 'en-US'
        ? 'You can send an email to info@gopms.io or use Zalo hotline on the website.'
        : 'Xin vui lòng gửi mail đến info@gopms.io hoặc Zalo Hotline được ghi trên website.',
  },
];
</script>
