const { getOptions } = require("loader-utils");
const validateOptions = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    test: {
      type: "string"
    }
  }
};

module.exports = function(source) {
  const options = getOptions(this);

  console.log(source);

  validateOptions(schema, options, "Example Loader");

  return source;
};
