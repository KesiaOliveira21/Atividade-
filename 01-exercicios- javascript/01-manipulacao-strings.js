const manipularString = (str, letraAntiga, letraNova) => {
    console.log("Maiúsculas:", str.toUpperCase());
    console.log("Minúsculas:", str.toLowerCase());
    console.log("Invertida:", str.split('').reverse().join(''));
    console.log("Substituída:", str.replaceAll(letraAntiga, letraNova));
  };
  
  // Teste
  manipularString("Exemplo de string", "e", "a");
  