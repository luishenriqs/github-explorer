# Introduction

Teste Técnico criando um buscador para o Github

# PARA EXECUTAR O PROJETO

## TECNOLOGIAS UTILIZADAS

- ReactJS, React-dom, React-router-dom, Axios, Styled-components, Typescript

## CLONE O PROJETO DO REPOSITÓRIO

https://github.com/luishenriqs/github-explorer

## INSTALAÇÃO DOS PACOTES

- Abra o terminal dentro da pasta do projeto e execute o comando yarn.

## INICIALIZAÇÃO DO PROJETO

- NO NAVEGADOR - Em um terminal aberto no diretório do projeto execute o script "yarn start"

# FUNCIONALIDADES

## PÁGINA INICIAL (DASHBOARD)

- Digite o nome de um usuário do github e click no botão "Pesquisar"

Essa ação deverá exibir na tela a lista de repositórios públicos do usuário informado
Cada repositório exibido em tela é um elemento clicável, ao ser acionado navegará para a página "Branches"

Ao cliclar no botão "Pesquisar" será exibido um erro caso o campo de input esteja vazio ou tenha sido inserido um valor inválido para pesquisa

## PÁGINA BRANCHES

- Esta página exibe de forma automática todas as branches do repositório escolhido.

Cada branche exibida em tela é um elemento clicável, ao ser acionado navegará para a página "Commits"

## PÁGINA COMMITS

- Esta página exibe de forma automática todos os commits da branche escolhida.
