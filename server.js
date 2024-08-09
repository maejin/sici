const express = require("express");
const cors = require("cors");

const PORT = 3006; // 사용할 포트 번호
const mysql = require("mysql2"); // 'mysql2' 모듈 사용
//const bodyParser = require("body-parser");

const app = express();
//app.use(cors()); // 모든 요청에 대해 CORS를 허용

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "sic77.cafe24app.com", // 데이터베이스 호스트 주소
  user: "heehye1", // 데이터베이스 사용자 이름
  password: "gnlgnldhd@@", // 사용자 비밀번호
  database: "heehye1", // 접속하려는 데이터베이스 이름
  port: 3306, // MySQL 포트 번호
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


app.get("/api/todoData", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    const sqlQuery = "SELECT * FROM todoData";

    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});