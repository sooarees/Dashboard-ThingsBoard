# Dashboard-Home-Assistant--conveyor
Interface Gráfica Para Esteira


  O trabalho planeja desenvolver uma ‘dashboard’ utilizando Home Assistant
para a esteira desenvolvida anteriormente para o LPAE, por meio deste será
possível visualizar os dados obtidos pelos sensores presentes na mesma e ter um
básico controle sobre ela. O Home Assistant ficará funcionando em um dos
computadores do laboratório, sendo passado para ele por meio de um container,
construído utilizando o Podman.

  Esse trabalho permitirá a análise dos dados em um computador, com o
container permitindo acesso a página em dispositivos na mesma rede, desta forma
será fácil a análise dos objetos que estão passando pela esteira, pois os dados
enviados pelos sensores estarão todos em um só local e de simples entendimento.

  Durante o desenvolvimento planeja-se: Formar um ambiente onde os dados
possam ser vistos. Incluir as informações dos sensores já incluídos no sistema da
esteira. Adicionar possíveis controles que permitam causar mudanças no estado da
esteira.
  
  Para o bom funcionamento do projeto, este poderá ser dividido: na
construção do dashboard, na implementação de base de dados (para poder exibir
um histórico, caso isso seja interessante para algum sensor), na conexão com os
sensores para a recepção de dados, e então o possível envio de informações a
esteira.
