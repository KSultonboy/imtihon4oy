let m = Number(prompt("Oyoqlar sonini kiriting: "));
let n = Number(prompt("O'rdaklar sonini kiriting: "));

if (m % 4 === 0) {
  let a = m / 4;
  a = a + n + 1;
  console.log(a);
} else {
  console.log(-1);
}
