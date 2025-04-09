var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Chacphnhng_1 = new ol.format.GeoJSON();
var features_Chacphnhng_1 = format_Chacphnhng_1.readFeatures(json_Chacphnhng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chacphnhng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chacphnhng_1.addFeatures(features_Chacphnhng_1);
var lyr_Chacphnhng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chacphnhng_1, 
                style: style_Chacphnhng_1,
                popuplayertitle: 'Chùa có phân hạng',
                interactive: true,
    title: 'Chùa có phân hạng<br />\
    <img src="styles/legend/Chacphnhng_1_0.png" /> Cap quoc gia<br />\
    <img src="styles/legend/Chacphnhng_1_1.png" /> Cap tinh (kien truc)<br />\
    <img src="styles/legend/Chacphnhng_1_2.png" /> Cap tinh (cach mang)<br />\
    <img src="styles/legend/Chacphnhng_1_3.png" /> Cap tinh (lich su-van hoa)<br />\
    <img src="styles/legend/Chacphnhng_1_4.png" /> Chua phan hang<br />' });
var format_Chatheohuyn_2 = new ol.format.GeoJSON();
var features_Chatheohuyn_2 = format_Chatheohuyn_2.readFeatures(json_Chatheohuyn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chatheohuyn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chatheohuyn_2.addFeatures(features_Chatheohuyn_2);
var lyr_Chatheohuyn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chatheohuyn_2, 
                style: style_Chatheohuyn_2,
                popuplayertitle: 'Chùa theo huyện',
                interactive: true,
    title: 'Chùa theo huyện<br />\
    <img src="styles/legend/Chatheohuyn_2_0.png" /> CU LAO DUNG<br />\
    <img src="styles/legend/Chatheohuyn_2_1.png" /> CHAU THANH<br />\
    <img src="styles/legend/Chatheohuyn_2_2.png" /> KE SACH<br />\
    <img src="styles/legend/Chatheohuyn_2_3.png" /> LONG PHU<br />\
    <img src="styles/legend/Chatheohuyn_2_4.png" /> MY TU<br />\
    <img src="styles/legend/Chatheohuyn_2_5.png" /> MY XUYEN<br />\
    <img src="styles/legend/Chatheohuyn_2_6.png" /> NGA NAM<br />\
    <img src="styles/legend/Chatheohuyn_2_7.png" /> THANH TRI<br />\
    <img src="styles/legend/Chatheohuyn_2_8.png" /> TP SOC TRANG<br />\
    <img src="styles/legend/Chatheohuyn_2_9.png" /> TRAN DE<br />\
    <img src="styles/legend/Chatheohuyn_2_10.png" /> VINH CHAU<br />' });
var format_TuiCha_3 = new ol.format.GeoJSON();
var features_TuiCha_3 = format_TuiCha_3.readFeatures(json_TuiCha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuiCha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuiCha_3.addFeatures(features_TuiCha_3);
var lyr_TuiCha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuiCha_3, 
                style: style_TuiCha_3,
                popuplayertitle: 'Tuổi Chùa',
                interactive: true,
    title: 'Tuổi Chùa<br />\
    <img src="styles/legend/TuiCha_3_0.png" /> <50<br />\
    <img src="styles/legend/TuiCha_3_1.png" /> >500<br />\
    <img src="styles/legend/TuiCha_3_2.png" /> 50 - 100<br />\
    <img src="styles/legend/TuiCha_3_3.png" /> 100 - 300<br />\
    <img src="styles/legend/TuiCha_3_4.png" /> 300 - 500<br />' });
var format_ChaCPhnHng_4 = new ol.format.GeoJSON();
var features_ChaCPhnHng_4 = format_ChaCPhnHng_4.readFeatures(json_ChaCPhnHng_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChaCPhnHng_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChaCPhnHng_4.addFeatures(features_ChaCPhnHng_4);
var lyr_ChaCPhnHng_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChaCPhnHng_4, 
                style: style_ChaCPhnHng_4,
                popuplayertitle: 'Chùa Có Phân Hạng',
                interactive: true,
    title: 'Chùa Có Phân Hạng<br />\
    <img src="styles/legend/ChaCPhnHng_4_0.png" /> Cap quoc gia<br />\
    <img src="styles/legend/ChaCPhnHng_4_1.png" /> Cap tinh (kien truc)<br />\
    <img src="styles/legend/ChaCPhnHng_4_2.png" /> Cap tinh (lich su-cach mang)<br />\
    <img src="styles/legend/ChaCPhnHng_4_3.png" /> Cap tinh (van hoa-cach mang)<br />\
    <img src="styles/legend/ChaCPhnHng_4_4.png" /> Cap tinh (lich su-van hoa)<br />\
    <img src="styles/legend/ChaCPhnHng_4_5.png" /> Chua phan hang<br />' });
var format_ChaScTrngCPhnLoi_5 = new ol.format.GeoJSON();
var features_ChaScTrngCPhnLoi_5 = format_ChaScTrngCPhnLoi_5.readFeatures(json_ChaScTrngCPhnLoi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChaScTrngCPhnLoi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChaScTrngCPhnLoi_5.addFeatures(features_ChaScTrngCPhnLoi_5);
var lyr_ChaScTrngCPhnLoi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChaScTrngCPhnLoi_5, 
                style: style_ChaScTrngCPhnLoi_5,
                popuplayertitle: 'Chùa Sóc Trăng Có Phân Loại',
                interactive: true,
                title: '<img src="styles/legend/ChaScTrngCPhnLoi_5.png" /> Chùa Sóc Trăng Có Phân Loại'
            });

lyr_ESRITopo_0.setVisible(true);lyr_Chacphnhng_1.setVisible(true);lyr_Chatheohuyn_2.setVisible(true);lyr_TuiCha_3.setVisible(true);lyr_ChaCPhnHng_4.setVisible(true);lyr_ChaScTrngCPhnLoi_5.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_Chacphnhng_1,lyr_Chatheohuyn_2,lyr_TuiCha_3,lyr_ChaCPhnHng_4,lyr_ChaScTrngCPhnLoi_5];
lyr_Chacphnhng_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'STT': 'STT', 'T? Ch?': 'T? Ch?', 'T? Khmer': 'T? Khmer', 'T? Vi?t': 'T? Vi?t', 'Nam X? D?ng': 'Nam X? D?ng', '??a Ch?': '??a Ch?', 'Tu?i': 'Tu?i', 'Huy?n': 'Huy?n', 'Ph? H?ng': 'Ph? H?ng', 'Ph? lo?i tu?i': 'Ph? lo?i tu?i', });
lyr_Chatheohuyn_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'STT': 'STT', 'T? Ch?': 'T? Ch?', 'T? Khmer': 'T? Khmer', 'T? Vi?t': 'T? Vi?t', 'Nam X? D?ng': 'Nam X? D?ng', '??a Ch?': '??a Ch?', 'Tu?i': 'Tu?i', 'Huy?n': 'Huy?n', 'Ph? H?ng': 'Ph? H?ng', 'Ph? lo?i tu?i': 'Ph? lo?i tu?i', });
lyr_TuiCha_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'STT': 'STT', 'T? Ch?': 'T? Ch?', 'T? Khmer': 'T? Khmer', 'T? Vi?t': 'T? Vi?t', 'Nam X? D?ng': 'Nam X? D?ng', '??a Ch?': '??a Ch?', 'Tu?i': 'Tu?i', 'Huy?n': 'Huy?n', 'Ph? H?ng': 'Ph? H?ng', 'Ph? lo?i tu?i': 'Ph? lo?i tu?i', });
lyr_ChaCPhnHng_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'STT': 'STT', 'T? Ch?': 'T? Ch?', 'T? Khmer': 'T? Khmer', 'T? Vi?t': 'T? Vi?t', 'Nam X? D?ng': 'Nam X? D?ng', '??a Ch?': '??a Ch?', 'Tu?i': 'Tu?i', 'Huy?n': 'Huy?n', 'Ph? H?ng': 'Ph? H?ng', 'Ph? lo?i tu?i': 'Ph? lo?i tu?i', });
lyr_ChaScTrngCPhnLoi_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'STT': 'STT', 'T? Ch?': 'T? Ch?', 'T? Khmer': 'T? Khmer', 'T? Vi?t': 'T? Vi?t', 'Nam X? D?ng': 'Nam X? D?ng', '??a Ch?': '??a Ch?', 'Tu?i': 'Tu?i', 'Huy?n': 'Huy?n', 'Ph? H?ng': 'Ph? H?ng', 'Ph? lo?i tu?i': 'Ph? lo?i tu?i', });
lyr_Chacphnhng_1.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'STT': 'Range', 'T? Ch?': '', 'T? Khmer': '', 'T? Vi?t': '', 'Nam X? D?ng': '', '??a Ch?': '', 'Tu?i': 'Range', 'Huy?n': 'TextEdit', 'Ph? H?ng': '', 'Ph? lo?i tu?i': '', });
lyr_Chatheohuyn_2.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'STT': 'Hidden', 'T? Ch?': '', 'T? Khmer': '', 'T? Vi?t': '', 'Nam X? D?ng': '', '??a Ch?': '', 'Tu?i': 'Range', 'Huy?n': 'TextEdit', 'Ph? H?ng': '', 'Ph? lo?i tu?i': '', });
lyr_TuiCha_3.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'STT': 'Range', 'T? Ch?': 'TextEdit', 'T? Khmer': 'Hidden', 'T? Vi?t': 'Hidden', 'Nam X? D?ng': 'Range', '??a Ch?': 'TextEdit', 'Tu?i': 'Range', 'Huy?n': 'TextEdit', 'Ph? H?ng': 'TextEdit', 'Ph? lo?i tu?i': 'TextEdit', });
lyr_ChaCPhnHng_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'STT': 'Range', 'T? Ch?': 'TextEdit', 'T? Khmer': 'TextEdit', 'T? Vi?t': 'TextEdit', 'Nam X? D?ng': 'Range', '??a Ch?': 'TextEdit', 'Tu?i': 'Range', 'Huy?n': 'TextEdit', 'Ph? H?ng': 'TextEdit', 'Ph? lo?i tu?i': 'TextEdit', });
lyr_ChaScTrngCPhnLoi_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'STT': 'Range', 'T? Ch?': 'TextEdit', 'T? Khmer': 'TextEdit', 'T? Vi?t': 'TextEdit', 'Nam X? D?ng': 'Range', '??a Ch?': 'TextEdit', 'Tu?i': 'Range', 'Huy?n': 'TextEdit', 'Ph? H?ng': 'TextEdit', 'Ph? lo?i tu?i': 'TextEdit', });
lyr_Chacphnhng_1.set('fieldLabels', {'STT': 'inline label - visible with data', 'T? Ch?': 'inline label - visible with data', 'T? Khmer': 'inline label - visible with data', 'T? Vi?t': 'inline label - visible with data', 'Nam X? D?ng': 'inline label - visible with data', '??a Ch?': 'inline label - visible with data', 'Tu?i': 'inline label - visible with data', 'Huy?n': 'inline label - visible with data', 'Ph? H?ng': 'inline label - visible with data', 'Ph? lo?i tu?i': 'inline label - visible with data', });
lyr_Chatheohuyn_2.set('fieldLabels', {'T? Ch?': 'inline label - visible with data', 'T? Khmer': 'inline label - visible with data', 'T? Vi?t': 'inline label - visible with data', 'Nam X? D?ng': 'inline label - visible with data', '??a Ch?': 'inline label - visible with data', 'Tu?i': 'inline label - visible with data', 'Huy?n': 'inline label - visible with data', 'Ph? H?ng': 'inline label - visible with data', 'Ph? lo?i tu?i': 'inline label - visible with data', });
lyr_TuiCha_3.set('fieldLabels', {'STT': 'inline label - visible with data', 'T? Ch?': 'inline label - visible with data', 'Nam X? D?ng': 'inline label - visible with data', '??a Ch?': 'inline label - visible with data', 'Tu?i': 'inline label - visible with data', 'Huy?n': 'inline label - visible with data', 'Ph? H?ng': 'inline label - visible with data', 'Ph? lo?i tu?i': 'inline label - visible with data', });
lyr_ChaCPhnHng_4.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'STT': 'inline label - visible with data', 'T? Ch?': 'inline label - visible with data', 'T? Khmer': 'inline label - visible with data', 'T? Vi?t': 'inline label - visible with data', 'Nam X? D?ng': 'inline label - visible with data', '??a Ch?': 'inline label - visible with data', 'Tu?i': 'inline label - visible with data', 'Huy?n': 'inline label - visible with data', 'Ph? H?ng': 'inline label - visible with data', 'Ph? lo?i tu?i': 'inline label - visible with data', });
lyr_ChaScTrngCPhnLoi_5.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'STT': 'no label', 'T? Ch?': 'no label', 'T? Khmer': 'no label', 'T? Vi?t': 'no label', 'Nam X? D?ng': 'no label', '??a Ch?': 'no label', 'Tu?i': 'no label', 'Huy?n': 'no label', 'Ph? H?ng': 'no label', 'Ph? lo?i tu?i': 'no label', });
lyr_ChaScTrngCPhnLoi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});