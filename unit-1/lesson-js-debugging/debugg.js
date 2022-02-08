var app = app || {}

app.func9 = function(){
  debugger
  console.log("inside function9")
  console.log("The end")
}

app.func8 = function(){
  debugger
  console.log("inside function8")
  setTimeout( function() {
    app.func9()
  },0)
}

app.func7 = function(){
  debugger
  console.log("inside function7")
  setTimeout(function(){
    app.func8()
  }, 1000)
}

app.func5 = function(){
  debugger
  console.log("inside function5")
  app.func6()
}

app.func6 = function(){
  debugger
  console.log("inside function6")
  setTimeout(function(){
    app.func7()
  }, 1000)
}

app.func3 = function(){
  debugger
  console.log("inside function3")
  app.func4()
}

app.func4 = function(){ console.log("inside function4")
  debugger
  setTimeout(function(){
    app.func5()
  }, 1000)
}

app.func2 = function(){
  debugger
  console.log ("inside function2")
  app.func3()
}

app.func1 = function(){
  debugger
  console.log("inside function1")
  app.func2()
}

app.initialize = function(){
  debugger
  console.log("Starting")
  app.func1()
}

document.addEventListener("DOMContentLoaded", function(event) {app.initialize()})
