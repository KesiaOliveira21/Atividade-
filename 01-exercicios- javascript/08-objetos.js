const manipularObjeto = (obj) => {
    obj.profissao = "Desenvolvedor";
    console.log("Objeto com nova propriedade:", obj);
    delete obj.cidade;
    console.log("Objeto com propriedade removida:", obj);
    console.log("Propriedades do objeto:", Object.keys(obj));
  };
  
  manipularObjeto({ nome: "Carlos", idade: 28, cidade: "São Paulo" });
  