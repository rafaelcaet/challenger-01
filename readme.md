# Challenger - 01

## Descrição

API desenvolvida para um comparador de preços que identifica produtos similares entre diferentes supermercados, mesmo quando os nomes dos produtos apresentam pequenas variações.

## Bibliotecas Utilizadas

- **Fastify**
- **@fastify/cors**: habilitar CORS
- **Natural**: lib para processamento de linguagem natural

## Estrutura de Dados

O arquivo `src/database/data01.json` possui os dados dos produtos com a seguinte estrutura:

```json
[
  {
    "id": number,
    "title": string,
    "supermarket": string,
    "price": number
  }
]

```

## Endpoints

### GET /item/list

Retorna todos os produtos agrupados por "similaridade".

**Resposta**

```json
[
  {
    "category": string,
    "count": number,
    "products": [
      {
        "id": number,
        "title": string,
        "supermarket": string,
        "price": number
      }
    ]
  }
]
```

## Solução abordada

### Algoritmo de Comparação

O projeto utiliza três funções principais para realizar o agrupamento de produtos similares:

1. **formatTitle** (`src/utils/formatTitle.ts`)
   - Normaliza os títulos dos produtos
   - Remove pontuações e espaços extras
   - Converte para minúsculas

2. **calcMatchTitle** (`src/utils/calcMatchTitle.ts`)
   - Utiliza a lib Natural para tokenização
   - Compara palavras entre dois títulos
   - Considera produtos similares quando há 80% de correspondência

3. **readData** (`src/utils/readFile.ts`)
   - Realiza a leitura do arquivo JSON
   - Retorna os dados parseados para processamento

### Lógica de Agrupamento

O serviço (`src/services/categoryService.ts`) implementa a seguinte lógica:

1. Cria um mapa de categorias
2. Para cada produto:
   - Normaliza o título
   - Compara com categorias existentes
   - Agrupa em categoria existente se houver similaridade
   - Cria nova categoria se não encontrar correspondência

## Estrutura do Projeto

```
src/
  ├── controllers/     # Controladores da aplicação
  ├── database/        # Arquivo JSON com dados
  ├── helpers/         # Helpers para tratamento de erros
  ├── routes/          # Definição das rotas
  ├── services/        # Lógica de negócio
  ├── types/          # Tipos TypeScript
  ├── utils/          # Funções utilitárias
  └── server.ts       # Arquivo principal
```

## Para rodar o Projeto

Basta executar o comando abaixo para instalar as dependencias

### Clone o repositorio

```bash
git clone https://github.com/rafaelcaet/challenger-01.git
```

### Instale as dependencias

- utilizando NPM:

```bash
npm install
```

- utilizando YARN:

```bash
yarn
```

### Rode o Projeto

- utilizando NPM

```bash
npm run start
```

- utilizando YARN:

```bash
yarn start
```
