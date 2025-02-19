const produtosTecnologia = [
  {
    id: 1,
    nome: "Smartphone Samsung Galaxy S23",
    categoria: "Celulares",
    preco: 4999.99,
    marca: "Samsung",
    especificacoes: {
      tela: "6.1 polegadas",
      processador: "Exynos 2200",
      armazenamento: "128GB",
      camera: "50MP"
    }
  },
  {
    id: 2,
    nome: "Notebook Dell XPS 13",
    categoria: "Notebooks",
    preco: 7499.00,
    marca: "Dell",
    especificacoes: {
      tela: "13.4 polegadas",
      processador: "Intel Core i7",
      armazenamento: "512GB SSD",
      memoria: "16GB"
    }
  },
  {
    id: 3,
    nome: "Fones de Ouvido Sony WH-1000XM5",
    categoria: "Áudio",
    preco: 2299.00,
    marca: "Sony",
    especificacoes: {
      tipo: "Over-ear",
      conectividade: "Bluetooth",
      autonomia: "30 horas",
      recursos: "Cancelamento de ruído"
    }
  },
  {
    id: 4,
    nome: "Smartwatch Apple Watch Series 8",
    categoria: "Wearables",
    preco: 3899.00,
    marca: "Apple",
    especificacoes: {
      tela: "1.9 polegadas",
      sistema: "watchOS",
      conectividade: "Wi-Fi, Bluetooth",
      recursos: "Monitoramento de saúde, ECG"
    }
  },
  {
    id: 5,
    nome: "Placa de Vídeo Nvidia RTX 4080",
    categoria: "Componentes",
    preco: 13999.00,
    marca: "Nvidia",
    especificacoes: {
      memoria: "16GB GDDR6X",
      conexao: "PCIe 4.0",
      resolucao_max: "8K",
      tecnologias: "DLSS 3, Ray Tracing"
    }
  }
];

let tbody = document.querySelector("tbody");
let body = document.querySelector("body");
function renderList(produtosTecnologia) {
 
  for (let i = 0; i < produtosTecnologia.length; i++) {
    //Coloca o + antes do = na linha abaixo pra não sobrescrever e sim somar
    tbody.innerHTML += `
      <tr>
        <td>${produtosTecnologia[i].id}</td>
        <td>${produtosTecnologia[i].nome}</td>
        <td>${produtosTecnologia[i].categoria}</td>
        <td>${produtosTecnologia[i].preco}</td>
        <td>${produtosTecnologia[i].marca}</td>
      </tr>
    `


  }
}
renderList(produtosTecnologia);
function renderModal(){
  //o create Element vai 
  let div = document.createElement("div");
  div.classList.add("modal-overlay");
  div.innerHTML = `
  <div id="createModal" class="modal-content">
<form>
  <div class="form-group">
      <input type="text" class="form-control" id="inputId"  placeholder="Digite seu nome">
  </div>
  <div class="form-group">
      <input type="text" class="form-control" id="inputNome" placeholder="Digite seu nome">
  </div>
  <div class="form-group">
      <input type="text" class="form-control" id="inputCategoria" placeholder="Digite seu tipo">
  </div>
  <div class="form-group">
      <input type="text" class="form-control" id="inputPreco" placeholder="Digite sua marca">
  </div>
  <div class="form-group">
      <input type="text" class="form-control" id="inputMarca" placeholder="Digite o volume">
  </div>
  <button type="button" onclick="cadastrarProdutos()" class="btn btn-primary">Enviar</button>
  <button type="button" onclick="removerModalCreate()" class="btn btn-primary">Remover</button>
</form>
</div>
  `
  //appendChild adiciona um filho ao elemento pai (esse pai no caso é o body) - vai adicionar esse codigo que a gente escreveu no body
body.appendChild(div);
}

// função para remover a modal
function removerModalCreate(){
  let modal = document.querySelector(".modal-overlay");
  body.removeChild(modal);
}

function cadastrarProdutos(){
  let id = document.querySelector("#inputId").value;
  let nome = document.querySelector("#inputNome").value;
  let categoria = document.querySelector("#inputCategoria").value;
  let preco = document.querySelector("#inputPreco").value;
  let marca = document.querySelector("#inputMarca").value;

  produtosTecnologia.push({
    //o primeiro parametro é a chave e a segunda é dizendo que o let id que eu criei lá em cima corresponde a ele
    id: produtosTecnologia.leght +1,
    nome: nome,
    categoria: categoria,
    preco: preco,
    marca: marca
  })
//chamar a funçao que vai renderizar a lista
tbody.innerHTML = "";
renderList(produtosTecnologia);
removerModalCreate();
}

function editarProdutos(){
  let id = document.querySelector("#inputId").value;
  let nome = document.querySelector("#inputNome").value;
  let categoria = document.querySelector("#inputCategoria").value;  
  let preco = document.querySelector("#inputPreco").value;
  let marca = document.querySelector("#inputMarca").value;

//findIndex procura o id
  let index = produtosTecnologia.findIndex( () => ());

  produtosTecnologia[index] = ({
    id: id,
    nome: nome,
    categoria: categoria,
    preco: preco,
    marca: marca
  })

}

