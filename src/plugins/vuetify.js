import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        default: "#999999",
        primary: "#3a5dee",
        secondary: "#9C27B0",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#00CAE3",
        success: "#4CAF50",
        warning: "#FB8C00",
        filters: "#FAFBFC",
        hover: "#F6F6F6",
        preloader: "#1976D2",
        cardColor: "#ffffff",
        expandList: "#464646",
        selected: "#EEEEEE",
        head: "#4A76A8",
        trNotActiveText: "#cccccc",
        trNotActiveBackground: "#EEEEEE",
        background: "#EEEEEE"
      },
      dark: {
        default: "#272727",
        primary: "#3a5dee",
        secondary: "#9C27B0",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#00CAE3",
        success: "#4CAF50",
        warning: "#FB8C00",
        filters: "#FAFBFC",
        hover: "#616161",
        preloader: "#1976D2",
        cardColor: "#1E1E1E",
        expandList: "#1e1e1e",
        selected: "#DAE2E8",
        head: "#4A76A8",
        trNotActiveText: "#cccccc",
        trNotActiveBackground: "#EEEEEE",
        background: "#121212"
      }
    }
  }
});
