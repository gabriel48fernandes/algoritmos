let original = [10, 20, 30, 40, 50]
let inverso = []

for (let i = 0; i < original.length; i++) {
    inverso[original.length - 1 - i]= original[i]
  }
  console.log (inverso)
