import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mujazs: [
      {
        id: 1,
        name: ' سيدنا محمد (صلى الله عليه و سلم) بن عبد الله بن عبد المطلب',
        country: 'المملكة العربية السعودية',
        level: 1,
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 2,
        name: 'عبدالله بن مسعود',
        country: 'المملكة العربية السعودية',
        level: 2,
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 3,
        name: 'زر بن حبيش بن حباشة اﻷسدي',
        country: 'المملكة العربية السعودية',
        level: 3,
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 4,
        name: 'عاصم بن أبي النجود بهدلة الكوفي',
        country: 'المملكة العربية السعودية',
        level: 4,
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
      {
        id: 5,
        name: 'حفص بن أبي النجود الكوفي',
        country: 'المملكة العربية السعودية',
        level: 5,
        sex: 'ذكر',
        notes: 'لا يوجد',
      },
    ],
    countryOptions: [
      'الجزائر',
      'دولة الإمارات العربية المتحدة',
      'عمان',
      'مصر',
      'فلسطين',
      'البحرين',
      'قطر',
      'الكويت',
      'لبنان',
      'ليبيا',
      'موريتانيا',
      'المغرب',
      'العربية السعودية',
      'السودان',
      'تونس',
      'تركيا',
      'سوريا',
      'اليمن',
      'العراق',
      'ايران',
      'الاردن',
    ],
    generationOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    genderOptions: ['ذكر', 'أنثى'],
    ijazahDoc: '',
  },
  mutations: {
    uploadIjazahDoc(state, doc) {
      state.ijazahDoc = doc
    },
  },
  actions: {},
  modules: {},
})
