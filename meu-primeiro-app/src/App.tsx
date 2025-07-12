import React from "react";
import Mensagem from "./Mensagem";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";
import Topo from "./Topo";
import Meio from "./Meio";
import Base from "./Base";

// Define um componente funcional chamado App

function App() {
  // declaração das variaveis
  const nome = "Breno";
  const anoNascimento = 2001;

  // Função que retorna uma acao.
  function executarAcao() {
    alert('Função chamada com sucesso!')
  }

  // Função que retorna um paragrafo
  function carregaMensagem () {
    return <p>Texto gerado pela função</p>
  } 

  // retorna o que será carregado na tela (JSX)
  return (
    <div>
      {/* Título principal do aplicativo */}
      <h1> Meu primeiro app React </h1>
      <p>
        Olá, o meu nome é {nome} e nasci no ano de {anoNascimento}.{" "}
      </p>

      {/* Usa um comando reutilizavel */}
      <Mensagem />

      {/* Chama a função carregaMensagem p/ mostrar a mensagem da função */}
      <h1> Exemplo da função de mensagem</h1>

      {carregaMensagem()}
      
      {/* Ordem da hierarquia da página */}
      <Cabecalho />
      <Conteudo />
      <Rodape />

      {/* BOtão com função de click */}
      <button onClick={() => alert("Botão clicado com sucesso.")}>
        Clique aqui
      </button>

      {/* BOtao que chama a funcao ao ser clicado */}
      <button onClick={executarAcao}>
      Executa a função
      </button>

      {/* Chama as funcoes de Topo, Meio e Base */}
      <Topo />
      <Meio />
      <Base />
    </div>








  );
}

// Exporta  o componente App para que ele possa ser usado em main.tsx
export default App;
