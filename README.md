# Aplicativo para o hackton

![Logo](https://upload.wikimedia.org/wikipedia/commons/d/d4/Fiap-logo-novo.jpg)

## Aluno


- **Carlos Henrique da Silva Amaral** - RM354431


## Introdução

Esta documentação descreve todas as funcionalidades do sistema desenvolvido como parte do Hackton da Pós-Graduação em Full Stack Development - Turma 1FSDT.

O objetivo deste projeto é fornecer um guia sobre as funcionalidades do aplicativo desenvolvido em **JAVA** e **Angular**, permitindo que o usuário compreenda como navegar pelas telas e utilizar os recursos corretamente.

## Desafios do Projeto

A FIAP propôs o desafio de criar um sistema para auxiliar a educação. Deixando aberto a escolha do tema. Resolvemos utilizar a questão da falta de gestão e interesse dos alunos e também da gestão da biblioteca escolar. Onde na sua grande maioria é gerenciada por um papel de livro.

## Requisitos Funcionais

A aplicação consome os seguintes endpoints REST:

- **GET /api/v1/aluno**: Lista de todas os alunos.
- **GET /api/v1/aluno/{id}**: Leitura de um aluno específico, acessada pelo ID.
- **POST /api/v1/aluno**: Criação de novo aluno.
- **PUT /api/v1/aluno/{id}**: Edição de aluno existentes.
- **GET /api/v1/avaliacao**: Lista de todas os avaliacao.
- **GET /api/v1/avaliacao/{id}**: Leitura de um avaliacao específico, acessada pelo ID.
- **POST /api/v1/avaliacao**: Criação de novo avaliacao.
- **PUT /api/v1/avaliacao/{id}**: Edição de avaliacao existentes.
- **GET /api/v1/bibliotecario**: Lista de todas os bibliotecario.
- **GET /api/v1/bibliotecario/{id}**: Leitura de um bibliotecario específico, acessada pelo ID.
- **POST /api/v1/bibliotecario**: Criação de novo bibliotecario.
- **PUT /api/v1/bibliotecario/{id}**: Edição de bibliotecario existentes.
- **GET /api/v1/livro**: Lista de todas os livro.
- **GET /api/v1/livro/{id}**: Leitura de um livro específico, acessada pelo ID.
- **POST /api/v1/livro**: Criação de novo livro.
- **PUT /api/v1/livro/{id}**: Edição de livro existentes.
- **GET /api/v1/locacao**: Lista de todas os locacao.
- **GET /api/v1/locacao/{id}**: Leitura de um locacao específico, acessada pelo ID.
- **POST /api/v1/locacao**: Criação de novo locacao.
- **PUT /api/v1/locacao/{id}**: Edição de locacao existentes.
- **GET /api/v1/professor**: Lista de todas os professor.
- **GET /api/v1/professor/{id}**: Leitura de um professor específico, acessada pelo ID.
- **POST /api/v1/professor**: Criação de novo professor.
- **PUT /api/v1/professor/{id}**: Edição de professor existentes.


## Requisitos Técnicos

- **Aplicação backend**: Criação de todos os endpoints para executar as funcionalidades.
- **Aplicação frontend**: Implementação de todas as funcionalidades utilizando os endpoints criados no back-end do projeto.
- **Persistência de Dados**: Banco de dados integrado ao back-end para garantir que os dados sejam manipulados e armazenados corretamente.
- **Documentação**: Documentação técnica detalhada do projeto, incluindo setup inicial, arquitetura e uso das funcionalidades.

## Tecnologias Utilizadas

Back-end:
- **JAVA**
- **Spring boot**
- **Spring WEB**
- **Maven**
- **Lombok**
- **JPA**
- **Hibernate**
- **MySql**

As versões dessas tecnologias estão descritas no arquivo `pom.xml` na pasta backend.

Front-end:
- **Angular**
- **Bootstrap**

As versões dessas tecnologias estão descritas no arquivo `package.json` na pasta frontend.

## Setup Inicial

### Requisitos do Sistema

Back-end:

Certifique-se de ter instalado a JDK do JAVA versão `22` ou mais recente.


Front-end:
Certifique-se de ter as seguintes tecnologias instaladas no seu ambiente de desenvolvimento:

- Node.js
- Angular CLI


### Instalação de Dependências

Para instalar as dependências, execute o seguinte comando no terminal, lembrando de estar dentro da pasta `frontend`:

```bash
npm i
```

## Execução do projeto

Para inicializar o projeto basta acessar o projeto e executar o seguinte comando no terminal, lembrando de estar dentro da pasta `frontend`:

```bash
ng server
```


