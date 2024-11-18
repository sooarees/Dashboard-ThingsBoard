# Dashboard para Esteira utilizando Home Assistant

# Intenção do projeto

Planeja-se desenvolver uma ‘dashboard’ utilizando [Home Assistant](https://www.home-assistant.io/) para a esteira desenvolvida anteriormente para o LPAE, por meio deste será possível visualizar os dados obtidos pelos sensores presentes na mesma e ter um básico controle sobre ela. O Home Assistant ficará funcionando em um dos computadores do laboratório, sendo passado para ele por meio de um container, construído utilizando o [Podman](https://podman.io).

<img src="https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/home-assistant-logomark-color-on-light.png" width="95" alt="Logo Home Assistant"/>

Figura 1 - Logo Home Assistant

![Logo Podman](https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/podman-3-logo-95w-90h.webp)

Figura 2 - Logo Podman

Esse trabalho permitirá a análise dos dados em um computador, com o container permitindo acesso a página em dispositivos na mesma rede, desta forma será fácil a análise dos objetos que estão passando pela esteira, pois os dados enviados pelos sensores estarão todos em um só local e de simples entendimento.

Durante o desenvolvimento planeja-se: Formar um ambiente onde os dados possam ser vistos. Incluir as informações dos sensores já incluídos no sistema da esteira. Adicionar possíveis controles que permitam causar mudanças no estado da esteira.

Para o bom funcionamento do projeto, este poderá ser dividido: na construção do dashboard, na implementação de base de dados (para poder exibir um histórico, caso isso seja interessante para algum sensor), na conexão com os sensores para a recepção de dados, e então o possível envio de informações a esteira.

# Construção da User Interface

Como citado anteriormente, a construção do projeto utilizará o Home Assistant, para que possa-se ter uma imagem clara do que é desejado, deve-se realizar a inclusão de 'Cards'.

Estes podem ser tanto criados por quem está montando a dashboard, quanto podem ser baixados da internet. Esses cards, são associados então a algum evento ou tipo de sensor.

Para a construção uma ideia é necessária por isso, foi estruturada uma imagem base de como deseja-se que o dashboard será estruturado.

![Ideia para o Dashboard](https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/DashboardEstilo.png)

Além disso necessita-se compreender o caminho dos dados até o mesmo, portanto, o diagrama de blocos a seguir apresenta este.

![Diagrama de Blocos](https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/diagrama%20de%20blocos.png)

Explicação do Diagrama de Blocos - Os sensores que estão nas esteira vão publicar os dados coletados usando o protocólo MQTT (Message Queuing Telemetry Transport) para um "Broker" que faz a gestão das publicações e inscrições do protocólo MQTT e o Home Assistant que está dentro de um container do podman, vai estar inscrito no tópico para quando tiver atualizações ele conseguir visualiza-las e enviar para os cards que vão exibi-las e compor a nossa dashboard.

# Referências

Dashboard - Home Assistant: https://www.home-assistant.io/

Container - Podman: https://podman.io/

Diagrama de blocos - Canvas: https://www.canva.com/pt_br/
