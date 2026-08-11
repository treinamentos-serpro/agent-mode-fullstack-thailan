# Construa aplicações fullstack com o modo agent do GitHub Copilot

<!-- ![](../../actions/workflows/0-start-course.yml/badge.svg?branch=main) -->
<img src="https://github.com/user-attachments/assets/1b3ea5df-f18d-4ed8-9ae6-f96dc1861818" alt="octofit-tracker" width="300"/>

_Construa uma aplicação com o modo agent do GitHub Copilot em menos de uma hora._

## Bem-vindo

As pessoas adoram como o GitHub Copilot as ajuda a escrever código mais rápido e com menos erros.
Mas e se o GitHub pudesse criar uma aplicação multi-camadas com apresentação e APIs baseadas em requisitos escritos em linguagem natural?
Neste exercício, iremos usar o modo agent do GitHub Copilot para criar uma aplicação completa.

- **Para quem é**: Desenvolvedores intermediários familiarizados com GitHub Copilot, GitHub básico e desenvolvimento web básico
- **O que você vai aprender**: Apresentaremos o modo agent do GitHub Copilot e como usá-lo para desenvolvimento de aplicações.
- **O que você vai construir**: Você usará o modo agent do GitHub Copilot para criar uma aplicação de fitness como professor de educação física de uma escola.
- **Pré-requisitos**: Exercício de Habilidades: <a href="https://github.com/skills/getting-started-with-github-copilot">Começando com GitHub Copilot</a>.
- **Duração**: Este curso leva menos de uma hora para ser concluído.

Neste exercício, você irá:

1. Inicializar um ambiente de desenvolvimento pré-configurado para criar uma aplicação multi-camadas.
2. Fazer prompts no GitHub Copilot Chat e selecionar a aba edit e escolher o modo agent no menu suspenso edit/agent.
3. Neste exercício utilizaremos principalmente o LLM padrão mais recente.
4. Experimentar outros modelos LLM para ver diferentes saídas.
5. Para cada etapa, abra uma nova sessão do Copilot Chat clicando no ícone de mais `+` no painel do Copilot Chat.

## API de Produtos

Esta aplicação contém um backend simples em Node.js que expõe um endpoint de produtos mockados.

### Estrutura do projeto

- `app/backend/app.js` - servidor Express com rota `GET /products`
- `app/backend/package.json` - dependências e script de inicialização

### Sobre a API

O endpoint `GET /products` retorna um array de produtos com a seguinte estrutura:

- `id` (número)
- `title` (string)
- `price` (número)

Exemplo de resposta:

```json
[
  { "id": 1, "title": "Produto A", "price": 19.9 },
  { "id": 2, "title": "Produto B", "price": 29.9 },
  { "id": 3, "title": "Produto C", "price": 39.9 }
]
```

### Como rodar

No diretório `app/backend`, execute:

```bash
npm install
npm start
```

O servidor será iniciado em `http://localhost:3000`.

Em seguida, acesse:

```bash
http://localhost:3000/products
```

### Pré-requisitos

- Node.js instalado

---

### Observação

O backend usa Express e CORS para permitir requisições de qualquer origem.
