const config = {
    // 服务器数据库
    dataBase: {
        DATABASE: process.env.DB_NAME,
        USERNAME: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST,
        PORT: 3306, // 容器内部默认端口号-不用管
        multipleStatements: true //允许一次执行多条sql
    }
}

module.exports = config