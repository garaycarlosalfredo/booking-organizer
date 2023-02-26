const { URL_USERS } = process.env;

const userRequest = async (_, values, event, context) => {
  const {
    lambdaContext: { postRequest },
  } = event;
  const res = await postRequest(URL_USERS, {});
  console.log(`${res} ${typeof res}`, res.data.message);
  return res.data.message;
};

module.exports = {
  userRequest,
};
