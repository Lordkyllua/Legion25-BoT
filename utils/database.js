let points = {};
let allowedRoles = {};

module.exports = {
  addPoints(id, amount) {
    if (!points[id]) points[id] = 0;
    points[id] += amount;
  },
  getPoints(id) {
    return points[id] || 0;
  },
  getRanking() {
    return Object.entries(points)
      .map(([id, pts]) => ({ id, points: pts }))
      .sort((a, b) => b.points - a.points)
      .slice(0, 10);
  },
  setAllowedRoles(guildId, roles) {
    allowedRoles[guildId] = roles;
  },
  getAllowedRoles(guildId) {
    return allowedRoles[guildId] || [];
  }
};
