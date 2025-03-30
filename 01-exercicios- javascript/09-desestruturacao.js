const manipularLivro = (livro) => {
    const { titulo, autor } = livro;
    console.log(`Título: ${titulo}, Autor: ${autor}`);
  };
  
  const livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };
  

  manipularLivro(livro);
  