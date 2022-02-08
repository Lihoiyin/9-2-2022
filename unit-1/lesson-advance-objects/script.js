const monkey = {
  name : 'den',
  species : 'red monkey',
  foodsEaten : [],
}

function Monkey(name,species) {
  this.name2 = name
  this.species2 = species
  this.foodEaten2 = []

  Object.defineProperties(this, {
    name:{
      get name(){
        return name2
      }
    },
    species:{
      get species(){
        return species2
      }
    },
    addFood:{
      set foodEaten2(food){
        foodEaten2.push(food)
      }
    },
  })
}
monkey.foodsEaten.push('apple')
console.log(monkey)

const ben = new Monkey('ben', 'blue monkey')
console.log(ben)
ben.foodEaten2.push('bun')
console.log(ben)

const ken = new Monkey('ken', 'green monkey')
console.log(ken)
ken.foodEaten2.push('banana')
console.log(ken)
