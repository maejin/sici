const express = require("express");
//const cors = require("cors");

const PORT = 3006; // 사용할 포트 번호
const mysql = require("mysql2"); // 'mysql2' 모듈 사용
//const bodyParser = require("body-parser");

const app = express();
//app.use(cors()); // 모든 요청에 대해 CORS를 허용

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "", // 데이터베이스 호스트 주소
  user: "", // 데이터베이스 사용자 이름
  password: "", // 사용자 비밀번호
  database: "", // 접속하려는 데이터베이스 이름
  port: 3306, // MySQL 포트 번호
});



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get("/todoData", (req, res) => {
    const sqlQuery = "SELECT * FROM todoData;";
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    });
  });
  
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
  });
