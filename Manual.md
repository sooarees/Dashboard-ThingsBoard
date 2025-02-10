# Como acessar

Para o uso do Dashboard, primeiro é necessário acessar a página enquanto conectado a rede do LPAE (Laboratório de Pesquisas...), a página se encontra no ip ..., então deve-se entrar em alguma das contas.
No Thingsboard há três níveis de conta: Supervisor, cuida dos 'locatários';
Locatários, cuida dos dispositivos e dashboard;
Usuário, permite ver os dashboards autorizados.

No momento, é utilizado apenas as contas padrões do Thingsboard, sendo elas encontradas em: [Contas de Demonstração](https://thingsboard.io/docs/samples/demo-account/)

# Acrescentar equipamentos em Dashboard

Para isso deve ser acessado com uma conta de locatário, tendo acesso aos dispositivos, adiciona-se o equipamento em 'devices' e uma janela se abrirá com os métodos de envio de dados, como por exemplo o utilizado com a esteira (MQTT), e em cada um deles um comando de exemplo com o endereço a ser enviado e o usuário necessário aparecerá. Com isso no Dashboard pode-se adicionar um card ou modificar algum já existente, onde neles se acrescenta novas 'Datasources', associando um dispositivo e uma key do JSON.


controle ar


self.onInit = function() {
    
    self.ctx.datasourceTitleCells = [];
    self.ctx.valueCells = [];
    self.ctx.labelCells = [];
    
    for (var i=0; i < self.ctx.datasources.length; i++) {
        var tbDatasource = self.ctx.datasources[i];

        var datasourceId = 'tbDatasource' + i;
        self.ctx.$container.append(
            "<div id='" + datasourceId +
            "' class='tbDatasource-container'></div>"
        );

        var datasourceContainer = $('#' + datasourceId,
            self.ctx.$container);
        
        var textId = 'text' + i;
        self.ctx.$container.append(
            "<div id='"+textId+"' class='text' style='position: fixed;top:144px;left: 50%;/* bring your own prefixes */transform: translate(-50%, 0);color:white;font-size:30px;'>PERIGO</div>"
        );
        
        var textCell = $('#' + textId, self.ctx
            .$container);
        self.ctx.valueCells.push(textCell);
        
        var ledId = 'led' + i;
        self.ctx.$container.append(
            "<div id='" + ledId + "' class='led' style='width: 150px; height: 150px; border-radius: 50%; background-color: grey; margin: 20px auto;'></div>"    
        );
        
        var ledCell = $('#' + ledId, self.ctx
        .$container);
        self.ctx.valueCells.push(ledCell);

    }    
    
    self.onResize();
}

self.onDataUpdated = function() {
    for (var i = 0; i < self.ctx.valueCells.length; i++) {
        var cellData = self.ctx.data[i];
        if (cellData && cellData.data && cellData.data.length > 0) {
            var tvPair = cellData.data[cellData.data.length -
                1];
            var value = tvPair[1];
            var textValue;
            //toDo -> + IsNumber
            
            if (self.ctx.valueCells[1].attr("id") ==
                "led0") {
                var aPair = cellData.data[cellData
                    .data
                    .length -
                    1];
                var Bvalue = aPair[1];
                var boxValue = convertToFormat(
                    Bvalue);
                self.ctx.valueCells[1].css(
                    "background-color", boxValue
                    );
            }
            if (self.ctx.valueCells[0].attr("id")=="text0") {
                var textColor = "white";
                
                var bPair = cellData.data[cellData
                    .data
                    .length -
                    1];
                var Cvalue = bPair[1];
                
                switch(Cvalue) {
                    case 2:
                        textColor = "black";
                        break;
                }
                
                self.ctx.valueCells[i].css(
                    "color", textColor
                    );
            }
        }
    }
    
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    
    function convertToFormat(n) {
        var txtValue;
        if (isNumber(n)) {
            switch(n) {
                case 0:
                    txtValue = "green";
                    break;
                case 1:
                    txtValue = "yellow";
                    break;
                case 2:
                    txtValue = "orange";
                    break;
                case 3:
                    txtValue = "red";
                    break;
            }

        } else {
            txtValue = n;
        }
        return txtValue;
    }
}

self.onResize = function() {
    var datasourceTitleFontSize = self.ctx.height/8;
    if (self.ctx.width/self.ctx.height <= 1.5) {
        datasourceTitleFontSize = self.ctx.width/12;
    }
    datasourceTitleFontSize = Math.min(datasourceTitleFontSize, 20);
    for (var i = 0; i < self.ctx.datasourceTitleCells.length; i++) {
        self.ctx.datasourceTitleCells[i].css('font-size', datasourceTitleFontSize+'px');
    }
    var valueFontSize = self.ctx.height/9;
    var labelFontSize = self.ctx.height/9;
    if (self.ctx.width/self.ctx.height <= 1.5) {
        valueFontSize = self.ctx.width/15;
        labelFontSize = self.ctx.width/15;
    }
    valueFontSize = Math.min(valueFontSize, 18);
    labelFontSize = Math.min(labelFontSize, 18);

    for (i = 0; i < self.ctx.valueCells; i++) {
        self.ctx.valueCells[i].css('font-size', valueFontSize+'px');
        self.ctx.valueCells[i].css('height', valueFontSize*2.5+'px');
        self.ctx.valueCells[i].css('padding', '0px ' + valueFontSize + 'px');
        self.ctx.labelCells[i].css('font-size', labelFontSize+'px');
        self.ctx.labelCells[i].css('height', labelFontSize*2.5+'px');
        self.ctx.labelCells[i].css('padding', '0px ' + labelFontSize + 'px');
    }    
}

self.onDestroy = function() {
}
