const nomes = ["clara", "mariana", "julia", "felipe escorcio", "roseclei", "Gustavo", "jackson"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)