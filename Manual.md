# Como acessar

Para o uso do Dashboard, primeiro é necessário acessar a página enquanto conectado a rede do LPAE (Laboratório de Pesquisas Avançadas em Eletrônica), a página se encontra no ip 192.168.1.2, ou no caso do uso da nova versão que utiliza um Raspberry Pi, 192.168.1.6, então deve-se entrar em alguma das contas.
No Thingsboard há três níveis de conta: Supervisor, cuida dos 'locatários';
Locatários, cuida dos dispositivos e dashboard;
Usuário, permite ver os dashboards autorizados.

No momento, é utilizado apenas as contas padrões do Thingsboard, sendo elas encontradas em: [Contas de Demonstração](https://thingsboard.io/docs/samples/demo-account/)

# Acrescentar equipamentos em Dashboard

Para isso deve ser acessado com uma conta de locatário, tendo acesso aos dispositivos, adiciona-se o equipamento em 'devices' e uma janela se abrirá com os métodos de envio de dados, como por exemplo o utilizado com a esteira (MQTT), e em cada um deles um comando de exemplo com o endereço a ser enviado e o usuário necessário aparecerá. Com isso no Dashboard pode-se adicionar um card ou modificar algum já existente, onde neles se acrescenta novas 'Datasources', associando um dispositivo e uma key do JSON.
