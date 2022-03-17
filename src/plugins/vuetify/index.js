import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import preset from './default-preset/preset'
import fonts from "../../styles/styles.scss";

Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  preset,
  fonts,
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    options: {
      customProperties: true,
      variations: false,
    },
  },
})
