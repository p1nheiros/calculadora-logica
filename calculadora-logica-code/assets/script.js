function conjuncao(p, q) {
    return p && q;
  }
  
  function disjuncao(p, q) {
    return p || q;
  }
  
  function condicional(p, q) {
    return !p || q;
  }
  
  function getPropositionValue(prop) {
    const selectElement = document.getElementById(prop);
    return selectElement.value === "verdadeiro";
  }
  
  function gerarTabelaVerdade(conectivo) {
    const tabela = [];
  
    for (let A = 0; A <= 1; A++) {
      for (let B = 0; B <= 1; B++) {
        let resultado;
        switch (conectivo) {
          case "conjuncao":
            resultado = conjuncao(A, B);
            break;
          case "disjuncao":
            resultado = disjuncao(A, B);
            break;
          case "condicional":
            resultado = condicional(A, B);
            break;
          default:
            console.log("Conectivo inválido.");
            return;
        }
        tabela.push({ A, B, resultado });
      }
    }
  
    return tabela;
  }
  
  function montarTabelaHTML(tabela) {
    const tableElement = document.createElement("table");
    const thead = tableElement.createTHead();
    const tbody = tableElement.createTBody();
    const headerRow = thead.insertRow();
    headerRow.innerHTML = "<th>A</th><th>B</th><th>Resultado</th>";
  
    tabela.forEach(({ A, B, resultado }) => {
      const row = tbody.insertRow();
      row.innerHTML = `<td>${A ? "Verdadeiro" : "Falso"}</td><td>${B ? "Verdadeiro" : "Falso"}</td><td>${resultado ? "Verdadeiro" : "Falso"}</td>`;
    });
  
    return tableElement;
  }
  
  function calcularResultado() {
    const A = getPropositionValue("A");
    const B = getPropositionValue("B");
  
    const conectivo = document.getElementById("conectivo").value;
  
    let resultado;
    switch (conectivo) {
      case "conjuncao":
        resultado = conjuncao(A, B);
        break;
      case "disjuncao":
        resultado = disjuncao(A, B);
        break;
      case "condicional":
        resultado = condicional(A, B);
        break;
      default:
        console.log("Conectivo inválido.");
        return;
    }
  
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = `O resultado da operação ${conectivo.toUpperCase()} é: ${resultado ? "Verdadeiro" : "Falso"}`;
  
    const tabelaVerdade = gerarTabelaVerdade(conectivo);
    const tabelaElement = montarTabelaHTML(tabelaVerdade);
  
    const tabelaVerdadeElement = document.getElementById("tabela-verdade");
    tabelaVerdadeElement.innerHTML = "";
    tabelaVerdadeElement.appendChild(tabelaElement);
  }
  