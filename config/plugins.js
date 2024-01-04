module.exports = {
  //
  graphql: {
    enabled: true,

    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.example.com",
        port: 587,
        auth: {
          user: "ahtisham.adroitix@gmail.com",
          pass: "SMTP_PASSWORD",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "ahtisham.adroitix@gmail.com",
        defaultReplyTo: "ahtisham.adroitix@gmail.com",
      },
    },
  },
  "apollo-sandbox": {
    enabled: true,
  },
};
