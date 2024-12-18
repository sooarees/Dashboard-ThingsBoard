# Implementação dos softwares no computador do LPAE

## Docker
Como parte da dashboard foi construída em um computador pessoal, tivemos que utilizar o docker para utilizar o container no computador do LPAE. Para a instalação do docker em Arch (Uma distribuição Linux, utilizado no computador do LPAE) foi seguido o manual disponível no site do dockerdocs. [Docker(Arch)](https://docs.docker.com/desktop/setup/install/linux/archlinux/).


Passos para instalação:

- Instalar o cliente binário do Docker.

- Baixar o último pacote Arch do Docker.

- Instalar o pacote.

Depois de feita a instalação completa do Docker, foi feito uma checagem para garantir que o cliente estava atualizado.

(OBS: Todos os comandos que podem ser usados no terminal para agilizar e facilitar, estão no site de instalação citado a cima).

## ThingsBoard
O programa responsável por gerir os dados recebidos e mostra-los através de cards em uma dashboard é o ThingsBoard, que ficará ligado no computador do LPAE enquanto a esteira estiver funcionando. Para a instalação do ThingsBoard utilizando o docker em Arch foi seguido o manual disponível no site Thingsboard.io. [ThingsBoard(Docker)](https://thingsboard.io/docs/user-guide/install/docker/)

Para instalar o ThingsBoard compatível com o Docker, primeiro é necessário já ter instalado o Docker. O serviço de implementação do ThingBoard escolhido foi o 'In Memory' que é o serviço padrão.


Passos para instalação:

- Criar o arquivo docker compose para o serviço do ThingsBoard.

- Adicionar as instruções padrões do ThingsBoard no docker compose.

- Criar os diretórios para armazenamento de informações e registros. (precisa de permissões de sudo).


Comandos de terminal para usar o docker compose.

- Para checar erro no containers: docker compose logs -f mytb

- Para poder parar o container: docker compose stop mytb

- Para iniciar o container: docker compose start 

