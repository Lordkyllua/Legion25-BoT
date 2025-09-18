const { rotateStatus } = require("../utils/state");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);
    rotateStatus(client);
  }
};
