# Projeto de Automação de Testes com Cypress

Este projeto contém um conjunto de testes automatizados utilizando Cypress para validar o e-commerce Luma
validando os seguintes cenários:

1. Cadastro de usuário
2. Login
3. Adicionar produto ao carrinho
4. Finalização de compra

## Pré-requisitos

Certifique-se de que você tenha os seguintes softwares instalados na sua máquina:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)
- [Cypress](https://www.cypress.io/) (a instalação será feita via npm)

## Instalação

1. **Descompactar o Arquivo**

   Extraia o arquivo zipado em uma pasta de sua preferência.

2. **Abrir o Terminal**

   Abra o terminal (Prompt de Comando, PowerShell, Terminal no MacOS ou Linux) e navegue até a pasta onde o projeto foi extraído.

3. **Instalar Dependências**

   Execute o comando abaixo no terminal para instalar todas as dependências do projeto:

   > npm install

# Executar os Testes

Existem duas maneiras principais de executar os testes do Cypress: em modo interativo ou em modo headless.

1. **Modo Interativo**
   Para abrir o Cypress em modo interativo, onde você pode visualizar os testes sendo executados no navegador, execute no terminal:
   > npx cypress open

Isso abrirá a interface do Cypress. Selecione o teste que deseja executar e ele será executado no navegador configurado.

2. **Modo Headless**
   Para executar todos os testes em modo headless (sem interface gráfica), execute no terminal:
   > npx cypress run

Os resultados dos testes serão exibidos no terminal.

# Estrutura do Projeto

Este projeto segue o padrão Page Object Pattern para organização de arquivos. A estrutura das pastas é a seguinte:

cypress/fixtures: Arquivos de dados estáticos usados nos testes.
cypress/e2e: Contém os arquivos de teste.
cypress/support: Arquivos de suporte e customizações globais.
cypress/support/page_objects: Contém os arquivos de Page Objects que encapsulam a interação com os elementos da página.

# Obrigado por usar este projeto de automação de testes com Cypress!
