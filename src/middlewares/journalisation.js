module.exports = (config, { strapi })=> {
  return async (context, next) => {
    const isContentManagerUrl = context.request.url.includes("/content-manager/collection-types/");
    const isUserLogged = context.request.header.authorization;
    const isEditRequest = context.request.method === "POST" || context.request.method === "PUT";

    if (isContentManagerUrl && isUserLogged && isEditRequest) {
      const token = context.request.header.authorization;
      const userId = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).id;
      strapi.log.info(`user with id '${userId}' edits the content '${context.request.url}' with method '${context.request.method}'`);
    }

    await next()
  };
};
