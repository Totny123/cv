let html = document.querySelector("#text");
let style = document.querySelector("#style");
let string = `/*
 *你好，我是刘俊峰。
 *接下来我要展示一个八卦图是怎么实现的？
 *首先我要准备一个div
**/
#demo{
  width: 400px;
  height: 400px;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
}
/*
 *现在把div变成一个圆
**/
#demo{
  border-radius:50%;
}
/*
 *八卦是阴阳形成的
 *一黑一白
**/
#demo{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 *现在我们给八卦加上魔丸和灵珠(两个圆球)
**/
#demo::after{
  content: "";
  display: block;
  width: 50%;
  height: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  border-radius: 50%;
}
#demo::before{
  content: "";
  display: block;
  width: 50%;
  height: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  border-radius: 50%;
}
/*
 *最后让太极转起来吧！
**/
#demo {
  animation: rotate 5s linear infinite;
}`;
let string2 = ``;
let n = 0;
let delay = 50;
function step() {
  if (n < string.length) {
    if (string[n] === "魔") {
      delay = 5;
    }
    if (string[n] === "\n") {
      string2 += "<br />";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    style.innerHTML = string.substring(0, n + 1);
    html.innerHTML = string2;
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n++;
    setTimeout(() => {
      step();
    }, delay);
  } else {
    return;
  }
}
step();
