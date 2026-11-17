import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import js from '@eslint/js'

export default defineConfigWithVueTs(
  { ignores: ['dist/**'] },
  js.configs.recommended,
  pluginVue.configs['flat/vue2-essential'],
  vueTsConfigs.recommended
)
