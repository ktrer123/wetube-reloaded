import express from "express";
// node_module 에서 express를 import해옴 (npm, nodejs가)

const PORT = 4000;

const app = express();
// application을 만들기 : application이 어떻게 반응할지 작성

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
// middleware : 중간 소프트웨어 / req와 res사이, response가 일어나기 전에 실행되는 controller
// next()를 호출하면 다음 함수가 자동으로 호출됨.
// get함수로 콘트롤.

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};
//express의 route handler에는 req(resquest), res(respond) 두 가지 object가 있음.
// get request가 들어오면 express가 req,res object를 넣어줌
// res.end() : respond를 끝내는 함수, res.send() : 홈페이지에 메세지를 보내는 함수
app.use(logger);
app.use(privateMiddleware);
// 모든 url에도 적용되는 middleware를 만들 수 있게 해줌
// get모다 먼저 와야 모든url에서 정상 작동함
app.get("/", handleHome);
app.get("/protected", handleProtected);
// 누군가 "/"페이지를 get request하면(브라우저를 통해), 함수들을 callback 해줌
// gossipMiddleware : middleware, gossipMiddleware의 next함수 : handleHome

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
// 외부 접속을 listem할 수 있게 만들어줌 : 외부에 개방
