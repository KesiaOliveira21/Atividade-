const verificarIdade = (idade) => {
    if (idade < 18) {
      console.log("Menor de idade");
    } else if (idade >= 65) {
      console.log("Idosa");
    } else {
      console.log("Maior de idade");
    }
  };
  
  // Teste
  verificarIdade(70);
  