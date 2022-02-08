const fizzbuzz = () => {
  for (let i=1; i<=101 ;i++){
    if (i%3 ===0 && i%5 === 0){
      console.log("fizzbuzz")
    }else if (i%3 === 0){
      console.log('fizz')
    }else if (i%5 === 0){
      console.log('buzz')
    }else {
      console.log(i)
    }
  }
}
fizzbuzz();
u = "i'm a Boy"
console.log(u.toLowerCase())
