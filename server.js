const express = require("express");
const cors = require("cors");

const port = 5000; // 사용할 포트 번호
const mysql = require("mysql2"); // 'mysql2' 모듈 사용
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // 모든 요청에 대해 CORS를 허용

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "sic77.cafe24app.com", // 데이터베이스 호스트 주소
  user: "heehye1", // 데이터베이스 사용자 이름
  password: "gnlgnldhd@@", // 사용자 비밀번호
  database: "heehye1", // 접속하려는 데이터베이스 이름
  port: 3306, // MySQL 포트 번호
});

// 데이터베이스 연결
connection.connect((error) => {
  if (error) {
    return console.error("데이터베이스 연결 실패:", error);
  }
  console.log("데이터베이스에 성공적으로 연결됨");
});

// 데이터베이스 쿼리 실행 예제
app.get("/hello", (req, res) => {
  connection.query("SELECT VERSION()", (error, results, fields) => {
    if (error) {
      return res.send("쿼리 실행 실패: " + error.message);
    }
    res.send("데이터베이스 서버 버전: " + results[0]["VERSION()"]);
  });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});