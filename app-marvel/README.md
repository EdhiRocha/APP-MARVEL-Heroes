# MyHero - Angular App Starter

## 1. Passos para começar

### Clonando o Repositório

`git clone https://github.com/EdhiRocha/APP-MARVEL-Heroes.git`

### Instalando as Dependências

`npm install`

### Inicializando o Servidor

`ng serve` ou `npm start`

### API MARVEL
Para utilizar a API Marvel é necessário realizar um breve cadastro para Obter as chaves de acesso.
O cadastro está disponível no seguinte endereço: https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount

### Public Key
chave pública obtida após a realização do cadastro no link acima é enviada em todas as requisições à API

##Parâmetro
apiKey = bf920f76754fad6a89e27e314c6d9df4

## Private Key
chave privada utilizada em conjunto com public key para a formação do Hash

## TimeStamp 
Identificador utilizado em conjunto com a public key e a private key para a geração do hash
## Parâmetro 
ts=1123123123

## Hash
Chave no formato MD5 gerada a partir da combinação do TimeStamp, Public Key e Private Key
## Parâmetro
hash="e3042fd9de12505a615813668c40b32c"

### Exemplo URL chamada
http://gateway.marvel.com/v1/public/characters&ts=1123123123&apiKey=aa9b37d3d33f7c7a3722314ce01afd32&hash=e3042fd9de12505a615813668c40b32c

## Créditos
Todas as imagens usadas na aplicação são disponibilizadas pela Marvel através da API 
https://developer.marvel.com/docs