const mysql = require('serverless-mysql')({
    config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});
  
exports.handler = async () => {
    let results = await mysql.query('SELECT * FROM category');

    await mysql.end();

    mysql.quit();
    
    const response = [];

    for (const row of results) {
        const category = {
            category_id: row.category_id,
            name: row.name,
        };
        response.push(category);
    }

    return {
        statusCode: 200,
        body: response
    };
}
