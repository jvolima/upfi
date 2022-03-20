# Upfi 🔥

## Aplicação de listagem e upload de imagens e gifs 👩‍🚀

## Tecnologias utilizadas 🛠
- React
- Next
- Chakra UI
- Typescript
- React-hook-form
- React-query
- FaunaDB
- ImgBB

## Habilidades desenvolvidas 🚀
- Paginação com o react-query usando o hook useInfinityQuery
- Validação de formulários com o react-hook-form
- Validação das imagens e gifs: verificação do tipo do arquivo, porque a aplicação só deve aceitar png, jpeg e gif, e verificação do tamanho do arquivo, pois o limite é 10MB
- Modal com o Chakra UI

## Como executar a aplicação na sua máquina 💻
- Clonar o repositório e executar ```git clone link_do_repo.git``` em uma pasta de sua preferência
- Acessar a pasta da aplicação e executar ```yarn``` para instalar as dependências da aplicação
- Após isso você precisa criar as variáveis de ambiente (.env.local) da aplicação
- A primeira variável é a da API do FaunaDB, você precisar criar uma database no site do fauna com o nome que você preferir, e depois criar uma collection com o nome ```image```. Após isso você precisa criar uma key para usar na sua API e colocar no arquivo .env.local da seguinte maneira: ```FAUNA_API_KEY=sua_key```
- A outra variável que você precisará criar é a do ImgBB, você terá que se cadastrar no site deles e gerar sua chave nesse link: https://api.imgbb.com. Após gerar sua chave você terá que adiciona-lá no seu .env.local dessa forma: ```NEXT_PUBLIC_IMGBB_API_KEY=sua_key```
- Agora pronto, é só executar ```yarn dev``` que a aplicação estará rodando na sua máquina 🚀

