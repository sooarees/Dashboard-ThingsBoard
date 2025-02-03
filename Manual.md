# Como acessar

Para o uso do Dashboard, primeiro é necessário acessar a página enquanto conectado a rede do LPAE (Laboratório de Pesquisas...), a página se encontra no ip ..., então deve-se entrar em alguma das contas.
No Thingsboard há três níveis de conta: Supervisor, cuida dos 'locatários';
Locatários, cuida dos dispositivos e dashboard;
Usuário, permite ver os dashboards autorizados.

No momento, é utilizado apenas as contas padrões do Thingsboard, sendo elas encontradas em: [Contas de Demonstração](https://thingsboard.io/docs/samples/demo-account/)

# Acrescentar equipamentos em Dashboard

Para isso deve ser acessado com uma conta de locatário, tendo acesso aos dispositivos, adiciona-se o equipamento em 'devices' e uma janela se abrirá com os métodos de envio de dados, como por exemplo o utilizado com a esteira (MQTT), e em cada um deles um comando de exemplo com o endereço a ser enviado e o usuário necessário aparecerá. Com isso no Dashboard pode-se adicionar um card ou modificar algum já existente, onde neles se acrescenta novas 'Datasources', associando um dispositivo e uma key do JSON.

mosquitto_pub -d -q 1 -h localhost -p 1883 -t v1/devices/me/telemetry -u "76HUc0AcMh9ZXR3fql2n" -m "{temperature:25}"


sensor:

token: HPQZjD1z1oA5Ns6fO1jd

id: a74adc10-dce4-11ef-916c-3b673fc3c10d
