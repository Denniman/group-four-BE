import app from './server.js';
import databaseConnection from './database/index.js';

const port = process.env.PORT || 8800;


databaseConnection.getConnect()



export const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

