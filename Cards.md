# Cards
Para a composição da dashboard foram eleborados x(número de cards) diferentes cards no ThingsBoard, alterando cards padrões do software e criando outros customizados.


## Card Velocidade 
<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Card%20Velocidade.png" width="405" alt="Card Velocidade"/>


Com o ThingsBoard tem alguns cards padrões, apenas foi feita a comunicação do motor de velocidade da estrela com o card, para controle e display.


## Card Temperatura
![Card Temperatura](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Card%20Temperatura.png)

Mostra a temperatura do bloco.


## Card Altura e Cor
<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Bloco%20Imagem.png" width="405" alt="Card Bloco"/>

O card altera o tamanho e cor do bloco exibido na tela com base nos dados recebidos pelos sensores.


## Card Liga/Desliga
(Imagem do card)

O card funciona como um switch que serve para ligar e desligar a esteira.


## Card Qualidade do Ar
(imagem do card)
O sensor de qualidade do ar envia para a dashboard via MQTT um número que determina a qualidade entre: Seguro, Observe, Alerta e Perigo. O card mostrará um circulo que mudará de cor e seu texto conforme o envio do sensor.
