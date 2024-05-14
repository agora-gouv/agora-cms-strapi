import AuthLogo from "./extensions/agora-logo.svg";
import favicon from "./extensions/agora-favicon.ico";

const config = {
  locales: ['fr', 'en'],
  auth: {
    logo: AuthLogo,
  },
  menu: {
    logo: AuthLogo,
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
