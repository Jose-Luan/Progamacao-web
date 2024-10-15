const API_URL = "https://viacep.com.br/ws/{cep}/json/";

const cep = document.getElementById("cep");
const button = document.getElementById("btn-consultar");
const result = document.getElementById("result");

function validarCEP(cep) {  
    const cepLimpo = cep.replace(/\D/g, '');
    return /^[0-9]{8}$/.test(cepLimpo);
}

button.addEventListener("click", () => {
    const cepValue = cep.value;

    if (!validarCEP(cepValue)) {
        result.innerHTML = "CEP inválido. Por favor, insira um CEP válido com 8 dígitos.";
        return;
    }

    const url = API_URL.replace("{cep}", cepValue.replace(/\D/g, ''));

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                result.innerHTML = "CEP não encontrado";
            } else {
                result.innerHTML = `
                    <p>CEP: ${data.cep}</p>
                    <p>Logradouro: ${data.logradouro}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>Estado: ${data.uf}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Erro ao consultar CEP:", error);
            result.innerHTML = "Erro ao consultar CEP";
        });
});
