# Cards
Para a composição da dashboard foram elaborados 2 cards próprios para o ThingsBoard. Enquanto para outros dados, foi realizado o uso de cards pré-existentes


## Card Velocidade 
<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Card%20Velocidade.png" width="405" alt="Card Velocidade"/>


Como o ThingsBoard tem alguns cards padrões, apenas foi feita a comunicação do motor de velocidade da esteira com o card, enviando o valor em que o ponteiro é posicionado para o dispositivo.


## Card Temperatura
![Card Temperatura](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Card%20Temperatura.png)

Mostraria a temperatura do bloco, entretanto, por conta do tempo e dificuldades externas, não foi implementado.


## Card Altura e Cor
<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/Bloco%20Imagem.png" width="405" alt="Card Bloco"/>

O card altera o tamanho e cor do bloco exibido na tela com base nos dados recebidos pelos sensores. Esse card é de elaboração própria e pode ser encontrado em [Bloco](https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Cards/Block-Card.js)

Durante o desenvolvimento apenas a parte de cor foi realmente utilizada. O seu uso é descrito abaixo:

<details>
  <summary>
    Ver mais
  </summary>

  Para o uso do card é necessário o cadastro das 'datasources' utilizando 'labels' específicas com o valor "Cor" e "Altura", somente com este uso haverá o funcionamento correto

  Para a cor do bloco, uma string com código aceito pelo CSS é necessário.
</details>

## Card Qualidade do Ar

<img src="https://github.com/sooarees/Dashboard-ThingsBoard/blob/main/Imagens/SensorAr.png" width="405" alt="Card Sensor de Ar"/>
O sensor de qualidade do ar envia para a dashboard via MQTT um número que determina a qualidade entre: Seguro, Observe, Alerta e Perigo. O card mostrará um circulo que mudará de cor e seu texto conforme o envio do sensor.
