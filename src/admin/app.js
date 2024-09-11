import LogoProd from "./extensions/agora-logo-prod.svg";
import LogoDev from "./extensions/agora-logo-dev.png";
import favicon from "./extensions/agora-favicon.ico";

const config = {
  locales: ['fr', 'en'],
  auth: {
    logo: process.env.STRAPI_ADMIN_ENV === 'production' ? LogoProd : LogoDev,
  },
  menu: {
    logo: process.env.STRAPI_ADMIN_ENV === 'production' ? LogoProd : LogoDev,
  },
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
