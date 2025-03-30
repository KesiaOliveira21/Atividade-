const manipularArray = (arr) => {
    arr.push(60);
    console.log("Array com 60 adicionado:", arr);
    arr.shift();
    console.log("Array com primeiro número removido:", arr);
    console.log("Maior número:", Math.max(...arr));
    console.log("Menor número:", Math.min(...arr));
  };
  
  manipularArray([10, 20, 30, 40, 50]);
  