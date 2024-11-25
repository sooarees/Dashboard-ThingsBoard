# Dashboard para Esteira utilizando ThingsBoard

# Intenção do projeto

Planeja-se desenvolver uma ‘dashboard’ utilizando [ThingsBoard](https://thingsboard.io/) para a esteira desenvolvida anteriormente para o LPAE, por meio deste será possível visualizar os dados obtidos pelos sensores presentes na mesma e ter um básico controle sobre ela. O Home Assistant ficará funcionando em um dos computadores do laboratório, sendo passado para ele por meio de um container, construído utilizando o [Docker](https://www.docker.com/).

<img src="https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/thingsboard-logo.jpeg" width="95" alt="Logo ThingsBoard"/>

Figura 1 - Logo ThingsBoard

<img src="https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/docker-logo.webp" width="95" alt="Logo Logo Docker"/>


Figura 2 - Logo Docker

Esse trabalho permitirá a análise dos dados em um computador, com o container permitindo acesso a página em dispositivos na mesma rede, desta forma será fácil a análise dos objetos que estão passando pela esteira, pois os dados enviados pelos sensores estarão todos em um só local e de simples entendimento.

Durante o desenvolvimento planeja-se: Formar um ambiente onde os dados possam ser vistos. Incluir as informações dos sensores já incluídos no sistema da esteira. Adicionar possíveis controles que permitam causar mudanças no estado da esteira.

Para o bom funcionamento do projeto, este poderá ser dividido: na construção do dashboard, na implementação de base de dados (para poder exibir um histórico, caso isso seja interessante para algum sensor), na conexão com os sensores para a recepção de dados, e então o possível envio de informações a esteira.

# Construção da User Interface

Como citado anteriormente, a construção do projeto utilizará o ThingsBoard, para que possa-se ter uma imagem clara do que é desejado, deve-se realizar a inclusão de 'Cards'.

Estes podem ser tanto criados por quem está montando a dashboard, quanto podem ser baixados da internet. Esses cards, são associados então a algum evento ou tipo de sensor.

Para a construção uma ideia é necessária por isso, foi estruturada uma imagem base de como deseja-se que o dashboard será estruturado.

![Ideia para o Dashboard](https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/DashboardEstilo.png)

Além disso necessita-se compreender o caminho dos dados até o mesmo, portanto, o diagrama de blocos a seguir apresenta este.

![Diagrama de Blocos](https://github.com/sooarees/Dashboard-Home-Assistant--conveyor/blob/main/Imagens/diagrama-de-blocos-2.png)

Explicação do Diagrama de Blocos - Os sensores que estão nas esteira vão publicar os dados coletados usando o protocólo MQTT (Message Queuing Telemetry Transport) para um "Broker" que faz a gestão das publicações e inscrições do protocólo MQTT e o ThingsBoard que está dentro de um container do Docker, vai estar inscrito no tópico para quando tiver atualizações ele conseguir visualiza-las e enviar para os cards que vão exibi-las e compor a nossa dashboard.

# Referências

1- ThingsBoard. Disponível em: https://thingsboard.io/

2- Docker. Disponível em: https://www.docker.com/

4- Canvas. Disponível em: https://www.canva.com/pt_br/

5- MQTT. Disponível em: https://mqtt.org/
