import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'

import Section from '@/components/Section.vue'

describe('Section', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Section)
    expect(wrapper).toBeTruthy()
  })
})