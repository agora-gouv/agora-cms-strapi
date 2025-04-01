module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'auto',
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
        endpoint: env('AWS_ENDPOINT'),
      },
    },
  },
});
