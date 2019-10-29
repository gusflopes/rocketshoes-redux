# Entendendo funcionamento do REDUX

1- Página vai chamar uma action (ex. addToCartRequest)

2- Actions são as funções para diparar um '(... ver termo ...), que serão ouvidas por um `Middleware/Saga` ou diretamente `Reducer` (ex. '@cart/ADD_REQUEST)

3- Sagas usando o `export default all([takeLatest()` vai definir quais (... actions? ...) ele vai ouvir e, se for uma das hipóteses, vai disparar (... ver termo ...) no lugar.
    (Ex: Vai ouvir @cart/ADD_REQUEST, executar função addToCart, e se der certo, chamar a action `addToCartSuccess`)

4- A action vai disparar novamente um (... Termo? ...) para `Sagas` ou `Reducer` (Ex. nesse caso vai disparar agora `@cart/ADD_SUCCESS`)

5- O reducer vai expor um `switch` para filtrar as actions que vai ouvir e, em seguida, disparar uma alteração no state. (Ex. `case @cart/ADD_SUCCESS` -> vai alterar state usando o `immer`)


## FLUXO

Function chamadada na página -> function exposta nas **Actions** dispara *algo* -> **Saga/Middleware** intercepta se estiver dentre as exportadas; executa uma regra de negócio; chama uma function das **Actions** -> Action dispara *algo* -> Não havendo interceptação pelo *Saga/Middleware*, vai chegar ao **Reducer** -> **Reducer** vai promover a alteração no state.
