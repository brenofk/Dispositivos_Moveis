# Meu Primeiro App React com TypeScript (Vite)

Este repositório contém a implementação de exercícios introdutórios de React utilizando **Vite** e **TypeScript**.

O objetivo do projeto é praticar os fundamentos do React, como estrutura de componentes, uso de JSX, manipulação de eventos, funções de renderização e organização da hierarquia da interface.

## Conteúdo do Projeto

O projeto está dividido em etapas numeradas, cada uma focando em um conceito específico:

### 1. Estrutura do Projeto e Comentários
- Projeto criado com Vite e TypeScript.
- O arquivo `App.tsx` possui comentários explicativos em cada linha de código.

### 2. JSX com Template Expressions
- Declaração das variáveis `nome` e `anoNascimento`.
- Exibição da mensagem com template JSX:  
  `"Olá, meu nome é Breno e nasci em 2001."`

### 3. Criação e Importação de Componente
- Componente `Mensagem.tsx` criado com o texto:  
  `"Este é um componente reutilizável."`
- Importado e utilizado dentro de `App.tsx`.

### 4. Hierarquia de Componentes
- Componentes criados: `Cabecalho.tsx`, `Conteudo.tsx` e `Rodape.tsx`.
- Cada um com seu texto correspondente.
- Usados em `App.tsx` na ordem correta para formar a página.

### 5. Evento de Clique com Função Inline
- Botão com texto `"Mostrar Alerta"`.
- Ao clicar, exibe o alerta: `"Você clicou no botão!"`.

### 6. Evento de Clique com Função Externa
- Botão com texto `"Executar Ação"`.
- Ao clicar, chama a função `executarAcao` que imprime no console: `"Função chamada com sucesso."`

### 7. Função de Renderização
- Criada a função `renderizarMensagem` que retorna:  
  `"Texto gerado por uma função de renderização."`
- Utilizada dentro do JSX principal.

### 8. Layout com Múltiplos Componentes
- Componentes criados: `Topo.tsx`, `Meio.tsx`, `Base.tsx`.
- Organizados dentro de `App.tsx` formando a estrutura completa da página.

---

## 🚀 Como executar o projeto

1. Instale as dependências:

```bash
npm install