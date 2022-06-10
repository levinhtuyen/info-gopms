module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          // Script parser for `<script>`
          js: 'espree',

          // Script parser for `<script lang="ts">`
          ts: '@typescript-eslint/parser',

          // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
          // and vue interpolations (e.g. `{{variable}}`).
          // If not specified, the parser determined by `<script lang ="...">` is used.
          '<template>': 'espree',
        },
      },
    },
  ],
  rules: { 'vue/multi-word-component-names': ['off'] },
};
