module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c9f5dd9e2df25da97d64535b13f49e50'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'oH1/Qkrc8UCzL4sNm7XsQA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'CtiwhV4qufRzLKE1HkQnSQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
