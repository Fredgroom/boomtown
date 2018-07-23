const { Pool } = require('pg')

module.exports = function(app) {
  const host = app.get('PG_HOST');
  const user = app.get('PG_USER');
  const password = app.get('PG_PASSWORD');
  const database = app.get('PG_DB');
  const idleTimeoutMillis = 30000;
  const connectionTimeoutMillis = 2000;

  return new Pool({
    host,
    user, 
    password, 
    database, 
    idleTimeoutMillis, 
    connectionTimeoutMillis});
};
