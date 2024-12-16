self.onInit = function() {

    self.ctx.datasourceTitleCells = [];
    self.ctx.valueCells = [];
    self.ctx.labelCells = [];


    var tbDatasource = self.ctx.datasources[0];

    var datasourceId = 'tbDatasource' + 0;
    self.ctx.$container.append(
        "<div id='" + datasourceId +
        "' class='tbDatasource-container'></div>"
    );

    var datasourceContainer = $('#' + datasourceId,
        self.ctx.$container);

    datasourceContainer.append(
        "<div class='tbDatasource-title'>" +
        tbDatasource.name + "</div>"
    );

    var datasourceTitleCell = $(
        '.tbDatasource-title',
        datasourceContainer);
    self.ctx.datasourceTitleCells.push(
        datasourceTitleCell);

    var tableId = 'table' + 0;
    datasourceContainer.append(
        "<table id=" + tableId + "><tr>"
    );

    var boxId = 'box' + 0;
    datasourceContainer.append(
        "<td id=" + boxId +
        " style=\"background-color:blue; height:100px; width:61%\"></td>"

    );
    var boxCell = $('#' + boxId, self.ctx
        .$container);
    self.ctx.valueCells.push(boxCell);

    var heightSymId = 'dataS' + 0;
    datasourceContainer.append(
        "<td id=" + heightSymId +
        " style=\"text-align:center; padding:0px; font-size:30px\">-</td>"
    );

    var heightSymCell = $('#' + heightSymId, self.ctx
        .$container);
    self.ctx.valueCells.push(heightSymCell);


    datasourceContainer.append("</tr></table>");


    self.onResize();
};

self.onDataUpdated = function() {
   
    for (var i = 0; i < self.ctx.valueCells
        .length; i++) {
        for (var j = 0; j < self.ctx.data.length; j++) {

            var cellData = self.ctx.data[j];
            if (cellData && cellData.data && cellData
                .data
                .length > 0 && cellData.datasource
                .dataKeys[0].label == "Altura") {
                var tvPair = cellData.data[cellData.data
                    .length -
                    1];
                var value = tvPair[1];
                var txtValue = convertToFormat(value);
                //toDo -> + IsNumber
                if (self.ctx.valueCells[i].attr("id") ==
                    "box0") {
                    self.ctx.valueCells[i].css("height",
                        txtValue + "px");
                } else if (self.ctx.valueCells[i].attr(
                        "id") == "dataS0") {
                    self.ctx.valueCells[i].css(
                        "padding", txtValue +
                        "px 7px");
                    self.ctx.valueCells[i].html("- " +
                        txtValue);
                }
            } else if (cellData && cellData.data &&
                cellData.data
                .length > 0 && cellData.datasource
                .dataKeys[0].label == "Cor") {
                if (self.ctx.valueCells[i].attr("id") ==
                    "box0") {
                    var aPair = cellData.data[cellData
                        .data
                        .length -
                        1];
                    var Bvalue = aPair[1];
                    var boxValue = convertToFormat(
                        Bvalue);
                    self.ctx.valueCells[i].css(
                        "background-color", boxValue
                        );
                }
            }
        }
    }

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function convertToFormat(n) {
        var txtValue;
        if (isNumber(n)) {
            var decimals = 0; //self.ctx.decimals;
            var units = self.ctx.units;

            if (cellData.dataKey.units) {
                units = cellData.dataKey.units;
            }
            txtValue = self.ctx.utils.formatValue(
                Math.abs(n), decimals, units, true);
            txtValue = txtValue;

        } else {
            txtValue = n;
        }
        return txtValue;
    }
};

self.onResize = function() {
    var datasourceTitleFontSize = self.ctx.height / 8;
    if (self.ctx.width / self.ctx.height <= 1.5) {
        datasourceTitleFontSize = self.ctx.width / 12;
    }
    datasourceTitleFontSize = Math.min(
        datasourceTitleFontSize, 20);
    for (var i = 0; i < self.ctx.datasourceTitleCells
        .length; i++) {
        self.ctx.datasourceTitleCells[i].css(
            'font-size', datasourceTitleFontSize +
            'px');
    }
    var valueFontSize = self.ctx.height / 9;
    var labelFontSize = self.ctx.height / 9;
    if (self.ctx.width / self.ctx.height <= 1.5) {
        valueFontSize = self.ctx.width / 15;
        labelFontSize = self.ctx.width / 15;
    }
    valueFontSize = Math.min(valueFontSize, 18);
    labelFontSize = Math.min(labelFontSize, 18);

    for (i = 0; i < self.ctx.valueCells; i++) {
        self.ctx.valueCells[i].css('font-size',
            valueFontSize + 'px');
        self.ctx.valueCells[i].css('height',
            valueFontSize * 2.5 + 'px');
        self.ctx.valueCells[i].css('padding', '0px ' +
            valueFontSize + 'px');
        self.ctx.labelCells[i].css('font-size',
            labelFontSize + 'px');
        self.ctx.labelCells[i].css('height',
            labelFontSize * 2.5 + 'px');
        self.ctx.labelCells[i].css('padding', '0px ' +
            labelFontSize + 'px');
    }
};

self.onDestroy = function() {};
