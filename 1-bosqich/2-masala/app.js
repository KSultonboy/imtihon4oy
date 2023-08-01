let n = +prompt("chipta raqamini kiriting");

let a = n % 1000;
let b = a % 10;
let c = Math.floor(a / 100);
let g = Math.floor(a / 10);
let k = g % 10;
let h = b + c + k;
let l = Math.floor(n / 1000);
let y = l % 10;
let t = Math.floor(l / 100);
let o = Math.floor(l / 10);
let p = o % 10;
let r = y + t + p;
if (r === h) {
  alert("yes");
} else alert("no");
