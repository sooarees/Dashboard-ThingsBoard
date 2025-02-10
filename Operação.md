# Sensor de Qualidade do Ar

Durante o desenvolvimento da Dashboard, decidimos integrar outro sensor e desenvolver um card para ele. O sensor de qualidade do ar envia para a dashboard via MQTT um número que determina a qualidade entre: Seguro, Observe, Alerta e Perigo. O card mostrará um circulo que mudará de cor e seu texto conforme o envio do sensor.

# Testes

Foram realizados testes de conectividade do sensor de cor e qualidade do ar com os cards, oferecidos pelo próprio ThingsBoard. Depois de alguns ajustes, tudo funcionou como deveria.
