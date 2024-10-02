let original = [10, 20, 30, 40, 50]
let inverso =(original.length);

for (let i = 0; i < original.length; i++) {
    inverso[i] = original[original.length - 1 - i]
    console.log (inverso)
}
