## Prova de Algoritmos e Lógica de Programação

No arquivo `src/livros.txt` existe um conjunto de livros. Cada linha do arquivo possui os dados de um livro contendo: Disciplina, Título, Autor, Editora e Ano. Os dados estão delimitados pelo `$`.

A função `txtToArray`, que está no arquivo `src/loadLivros.js`, lê o arquivo `src/livros.txt` e retorna um array de objetos no formato JSON, a seguir tem-se o primeiro elemento do array retornado: 
```
{
  "disciplina": "Algoritmos e Lógica de Programação",
  "titulo": "Algoritmos",
  "autor": "CORMEN, T. H. et al.",
  "editora": "Campus",
  "ano": "2012"
}
```
Para testar o exemplo1:
```
npm run exemplo1
```

O arquivo `src/exemplo2.js` possui o código para ler os parâmetros passados pela linha de comando. Por exemplo o comando `npm run exemplo2 Maria` pegará o parâmetro _Maria_.
Para testar utilize:
```
npm run exemplo2
npm run exemplo2 "Design Digital"
```

O arquivo `src/exemplo3.js` possui o código para verificar se exite o _termo_ em uma string.
```
npm run exemplo3
```

Observação:
- Deverá ser utilizadas as estruturas de repetição `for` ou `while` para percorrer os elementos do array, ou seja, não será permitido usar `forEach`, `map` e `filter` para iterar sobre os elementos do array.

#### Exercício 1 (2,5 pts.)
Codificar um programa que recebe pela linha de comando o nome de uma disciplina e lista todos os livros dessa disciplina.

1o teste:
```
npm run um
```
Resposta:
```
É necessário fornecer o nome da disciplina
```
2o teste:
```
npm run um "Design Digital"
```
Resposta:
```
Disciplina: Design Digital
Título: Sintaxe da linguagem visual
Autores: DONDIS, D. A.
Editora: Martins Fontes
Ano: 2015

Disciplina: Design Digital
Título: Gestalt do Objeto: sistema de leitura visual da forma
Autores: GOMES FILHO, J.
Editora: Escrituras
Ano: 2013

Disciplina: Design Digital
Título: Usabilidade na Web: projetando websites com qualidade
Autores: NILSEN, J; LORANGER, H.
Editora: Elsevier
Ano: 2007

Disciplina: Design Digital
Título: Estudo Dirigido de Coreldraw X5 Em Português
Autores: PRIMO, L.
Editora: Érica
Ano: 2010

Disciplina: Design Digital
Título: Estudo Dirigido de Adobe Photoshop Cs5 Em Português- Para Windows
Autores: PRIMO, L.
Editora: Érica
Ano: 2011
```
3o teste:
```
npm run um "Programação"
```
Resposta:
```
Não existem livros da disciplina Programação
```


#### Exercício 2 (2,5 pts.)
Codificar um programa que recebe pela linha de comando o nome de um livro e lista todas as disciplinas que utilizam esse livro.

1o teste:
```
npm run dois
```
Resposta:
```
É necessário fornecer o título do livro
```
2o teste:
```
npm run dois "Git: Guia prático"
```
Resposta:
```
Disciplina: Algoritmos e Lógica de Programação
Disciplina: Desenvolvimento Web I
Disciplina: Técnicas de Programação I
Disciplina: Integração e Entrega Contínua
Disciplina: Laboratório de Desenvolvimento Web
Disciplina: Laboratório de Desenvolvimento Multiplataforma
```
3o teste:
```
npm run dois "Programação"
```
Resposta:
```
Não existem disciplinas que utilizam o livro Programação
```


#### Exercício 3 (2,5 pts.)
Codificar um programa que recebe pela linha de comando parte do nome de autor e lista todas os livros desse autor.

1o teste:
```
npm run tres
```
Resposta:
```
É necessário fornecer o nome do autor
```
2o teste:
```
npm run tres "POWERS"
```
Resposta:
```
Título: Aprendendo JavaScript
Autores: POWERS, S.
Editora: Novatec
Ano: 2010

Título: Aprendendo Node: Usando JavaScript no Servidor
Autores: POWERS, S.
Editora: Novatec
Ano: 2017
```
3o teste:
```
npm run tres "JOÃO"
```
Resposta:
```
Não existem livros do autor JOÃO
```


#### Exercício 4 (2,5 pts.)
Codificar um programa que imprime na tela os dados do livro que possui o título mais extenso.

Teste:
```
npm run quatro
```
Resposta:
```
Título: Aprendendo Padrões de Projeto em Python: Tire Proveito da Eficácia dos Padrões de Projeto (design Patterns) em Python Para Resolver Problemas do Mundo Real em Arquitetura e Design de Software
Autores: GIRIDHAR, C.
Editora: Novatec
Ano: 2016
```

