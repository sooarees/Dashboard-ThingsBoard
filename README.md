# Dashboard para Esteira utilizando ThingsBoard

## Um painel para acesso aos sensores do LPAE

<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/DashboardThingsboard.png" alt="Aparência do Dashboard"/>

### Descrição

O repositório a seguir inclui os 'cards' e a descrição do desenvolvimento de um 'dashboard' para uma esteira composta por diversos sensores, que se encontra no Laboratório de Pesquisa Avançada em Eletrônica (LPAE), além de outros equipamentos. Este projeto apresenta os dados de sensores de cor, usado para identificar os objetos na esteira, um sensor de qualidade de ar, além de permitir o envio de valores para o controle da velocidade da esteira.

O dashboard foi desenvolvido utilizando o [ThingsBoard](https://thingsboard.io/), com a intenção de facilitar o desenvolvimento e integração de sensores, assim como o uso do [Docker](https://www.docker.com/), permitindo uma portabilidade do mesmo.

Espera-se que para o futuro do mesmo, mais sensores sejam integrados, permitindo uma visão geral dos dados, sem necessidade de mais equipamentos externos.

### Mais Detalhes

Para a leitura do desenvolvimento do projeto e explicações mais a fundo acesse as páginas:
<details>
<summary>
Ver mais
</summary>
  
* [Intenção]()
* [Implementação](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Implementa%C3%A7%C3%A3o.md)
* [Manual](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Manual.md)
* [Cards](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Cards.md)
  
</details>

### Guia para contribuições

Como este é feito para a construção de um painel para o laboratório, contribuições são recomendadas com a adição de mais cards e a configuração da mesma no próprio laboratório, eliminando o uso de ações externas. Portanto, caso o desejo seja de contribuir, a criação de cards para sensores e a integração dos mesmos seja a maneira correta para realizar.

### Instalação

O container utilizado não é disponibilizado ao público, para uso no laboratório o acesso aos sistemas já existentes deve ser realizado.

Caso o projeto tenha o inspirado a construir sua própria dashboard, refira-se ao [guia do ThingsBoard para instalação com Docker](https://thingsboard.io/docs/user-guide/install/docker/)

### Guia de uso

Para o uso, referir-se ao manual construído, que se encontra em: [Manual](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Manual.md)

### Créditos

O projeto foi desenvolvido por:

[Matheus Pereira](https://github.com/matheusp1506)

[Roger Soares](https://github.com/sooarees)

Para o [LPAE](https://github.com/LPAE)
