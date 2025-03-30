const manipularStrings = (arr) => {
    console.log("Maiúsculas:", arr.map(str => str.toUpperCase()));
    console.log("Filtrando com 'A':", arr.filter(str => str.startsWith("A")));
    console.log("Comprimento das strings:", arr.map(str => str.length));
  };
  
  
  manipularStrings(["Maçã", "Banana", "Abacaxi", "Laranja"]);
  