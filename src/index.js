import sequelize from './db/database.js';
import app from './app.js';

const PORT = process.env.PORT || '8080';

// start server
sequelize.sync().then((client) =>
  app.listen(PORT, () => {
    console.log(`🚀 Server is running from http://localhost:${PORT}`);
  }),
);
