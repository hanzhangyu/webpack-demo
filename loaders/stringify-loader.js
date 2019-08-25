/**
 * wrap with "
 * @param {string} content
 * @returns {string}
 */
function stringifyLoader(content) {
  return JSON.stringify(content);
}

module.exports = stringifyLoader;