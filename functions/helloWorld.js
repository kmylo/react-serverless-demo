exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World",
    }),
  };
};

/* 
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World!",
    }),
  });
}; 
*/
