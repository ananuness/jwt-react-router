# ⚛️ React auth com react-router e JWT

<p align="center">
  Essa demo explora a integração da autenticação JWT com React e 
  react-router. Também é abordada a manipulação de rotas públicas, 
  como proteger rotas autenticadas e utilizar a biblioteca axios para 
  fazer solicitações de API com o token de autenticação. 🗝️
</p>
 
<p align="center">
  <a href="#memo-pré-requisitos">Pré-requisitos</a> •
  <a href="#game_die-rodando-a-demo">Rodando a demo</a> •
  <a href="#mag-explicando-o-codigo">Explicando o código</a> •
  <a href="#microscope-fluxo-das-rotas">Fluxo das rotas</a> •
  <a href="#shield-aprimorando-a-segurança">Aprimorando a segurança</a>
</p>

### :memo: Pré-requisitos 

Antes de começar, você vai precisar ter instalado em sua máquina as 
seguintes ferramentas: [Git](https://git-scm.com) e
[Node.js](https://nodejs.org/en/).

### :game_die: Rodando a demo

1. baixe o projeto:

```bash
git clone git@github.com:ananuness/jwt-react-router.git
```

2. após baixar a aplicação, rode os comandos:

```bash
cd jwt-react-router  # indo para a pasta do projeto
npm i                # instalando as dependências
npm run dev          # rodando o projeto no localhost 
```

## :microscope: Fluxo das rotas

1. Assim que você visitar a aplicação na rota padrão (`/`), você verá
o título **Home Page** do array `routesForNotAuthenticatedOnly`.

2. Se você navegar até `/login`, após 3 segundos o processo de login
será simulado. Irá ser setado um token, usando o `updateToken` vindo
do contexto e então haverá o redirecionamento para a rota `/`. Por
estar autenticado, agora será observado o título **User Home Page** do
array `routesForAuthenticatedOnly`.

3. Por fim, se navegar para a página de logout (`/logout`), após 3
segundos, o processo de logout é simulado removendo o token do local
storage chamando a função `updateToken` vazia que é o mesmo que 
`updateToken(null)` e então o usuário será redirecionado para a tela
de login, já que estará deslogado, então poderá acessar a rota sem
problemas.

Esse fluxo demonstra o processo de login e de logout, as transições
entre os estados de autenticado/não autenticado e suas respectivas
rotas de acesso.

## :mag: Explicando o código

#### `/provider/AuthProvider.jsx` 

Em resumo, esse código configura o contexto de autenticação usando a 
*Context API* do React. Ele fornece o `token` de autenticação e a 
função `updateToken` para componentes filhos por meio do contexto. 
Isto também garante que o cabeçalho de autorização padrão no axios 
seja atualizado com o token de autenticação sempre que ele mudar.

#### `/routes/ProtectedRoute.jsx`

O componente ProtectedRoute serve como um guarda para rotas 
autenticadas. Se o usuário não estiver autenticado, ele será 
redirecionado para a página de login. Se ele estiver autenticado, as 
rotas secundárias definidas no componente ProtectedRoute serão 
renderizadas usando o componente `Outlet`. Esse código nos permite 
facilmente proteger rotas específicas e controlar o acesso com base no 
status de autenticação do usuário, proporcionando uma experiência de 
navegação mais segura.

#### `/routes/index.jsx`

Esse componente é o ponto de entrada para as rotas configuradas. Foram 
definidas as rotas públicas (`routesForPublic`), privadas 
(`routesForAuthenticatedOnly`) e as rotas para os usuários não 
autenticados (`routesForNotAuthenticatedOnly`). Por fim, com a função 
`createBrowserRouter()`, recebemos um array para ser feita a 
configuração do fluxo dessas rotas. Observe também que caso o usuário
esteja autenticado, serão mostradas apenas as rotas privadas e 
públicas, já que as outras só fazem sentido para os não logados.

> [Aqui](https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03?utm_source=reactdigest&utm_medium&utm_campaign=1655) 
> você encontra a fonte para o artigo da demo original.

## :shield: Aprimorando a segurança

Existem três opções comuns na hora de armazenar um token JWT nas 
nossas aplicações: *local storage*, *session storage* e *cookies*, mas 
nenhum deles está livre de ataques. 

O local e o session storage são vulneráveis ​​a ataques de script entre 
sites (XSS), nos quais scripts mal-intencionados podem acessar e 
roubar seus tokens. Os cookies são vulneráveis ​​a ataques de 
falsificação de solicitação entre sites (CSRF), em que solicitações 
maliciosas podem usar seus tokens sem o seu consentimento. Para 
atenuar esses riscos.

Para mitigarmos as brechas de segurança que uma aplicação pode ter, 
você deve escolher uma opção de armazenamento adequada ao seu caso de 
uso, usar flags seguras e httpOnly para cookies e implementar medidas 
anti-CSRF.

Para saber mais, achei esse 
[artigo](https://www.linkedin.com/advice/0/how-do-you-secure-jwt-tokens-your-front-end) 
bacana no Linkedin que fala mais sobre boas opções para as aplicações
frontend.

<hr>

<p align="center">
  Feito com 🩵 por
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>
