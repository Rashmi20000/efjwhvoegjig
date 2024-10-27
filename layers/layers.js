ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.925748, 6.394151, 80.273658, 6.598677]);
var wms_layers = [];

var format_SEA_0 = new ol.format.GeoJSON();
var features_SEA_0 = format_SEA_0.readFeatures(json_SEA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SEA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEA_0.addFeatures(features_SEA_0);
var lyr_SEA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEA_0, 
                style: style_SEA_0,
                popuplayertitle: "SEA",
                interactive: true,
                title: '<img src="styles/legend/SEA_0.png" /> SEA'
            });
var format_SL_1 = new ol.format.GeoJSON();
var features_SL_1 = format_SL_1.readFeatures(json_SL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_1.addFeatures(features_SL_1);
var lyr_SL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SL_1, 
                style: style_SL_1,
                popuplayertitle: "SL",
                interactive: false,
                title: '<img src="styles/legend/SL_1.png" /> SL'
            });
var format_Dissolved_2 = new ol.format.GeoJSON();
var features_Dissolved_2 = format_Dissolved_2.readFeatures(json_Dissolved_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dissolved_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_2.addFeatures(features_Dissolved_2);
var lyr_Dissolved_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_2, 
                style: style_Dissolved_2,
                popuplayertitle: "Dissolved",
                interactive: false,
                title: '<img src="styles/legend/Dissolved_2.png" /> Dissolved'
            });
var format_matugmagnds_3 = new ol.format.GeoJSON();
var features_matugmagnds_3 = format_matugmagnds_3.readFeatures(json_matugmagnds_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_matugmagnds_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matugmagnds_3.addFeatures(features_matugmagnds_3);
var lyr_matugmagnds_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matugmagnds_3, 
                style: style_matugmagnds_3,
                popuplayertitle: "matugma gnds",
                interactive: true,
                title: '<img src="styles/legend/matugmagnds_3.png" /> matugma gnds'
            });
var format_BClassroad_4 = new ol.format.GeoJSON();
var features_BClassroad_4 = format_BClassroad_4.readFeatures(json_BClassroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BClassroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BClassroad_4.addFeatures(features_BClassroad_4);
var lyr_BClassroad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BClassroad_4, 
                style: style_BClassroad_4,
                popuplayertitle: "B Class road",
                interactive: true,
                title: '<img src="styles/legend/BClassroad_4.png" /> B Class road'
            });
var format_AClassroad_5 = new ol.format.GeoJSON();
var features_AClassroad_5 = format_AClassroad_5.readFeatures(json_AClassroad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AClassroad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AClassroad_5.addFeatures(features_AClassroad_5);
var lyr_AClassroad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AClassroad_5, 
                style: style_AClassroad_5,
                popuplayertitle: "A Class road",
                interactive: true,
                title: '<img src="styles/legend/AClassroad_5.png" /> A Class road'
            });

lyr_SEA_0.setVisible(true);lyr_SL_1.setVisible(true);lyr_Dissolved_2.setVisible(true);lyr_matugmagnds_3.setVisible(true);lyr_BClassroad_4.setVisible(true);lyr_AClassroad_5.setVisible(true);
var layersList = [lyr_SEA_0,lyr_SL_1,lyr_Dissolved_2,lyr_matugmagnds_3,lyr_BClassroad_4,lyr_AClassroad_5];
lyr_SEA_0.set('fieldAliases', {'id': 'id', });
lyr_SL_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Surveys': 'Surveys', 'num of col': 'num of col', });
lyr_Dissolved_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Area': 'Area', });
lyr_matugmagnds_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'GND_C': 'GND_C', 'DSDCODE4': 'DSDCODE4', 'GNDCODE7': 'GNDCODE7', 'GNDPCODE5': 'GNDPCODE5', 'GNDPCODE3': 'GNDPCODE3', });
lyr_BClassroad_4.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_AClassroad_5.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_SEA_0.set('fieldImages', {'id': '', });
lyr_SL_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', 'Surveys': 'TextEdit', 'num of col': 'TextEdit', });
lyr_Dissolved_2.set('fieldImages', {'PROVINCE_N': '', 'DCODE': '', 'DIST': '', 'CODE': '', 'DIVISEC': '', 'Area': '', });
lyr_matugmagnds_3.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'GND_N': '', 'GND_C': '', 'DSDCODE4': '', 'GNDCODE7': '', 'GNDPCODE5': '', 'GNDPCODE3': '', });
lyr_BClassroad_4.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_AClassroad_5.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_SEA_0.set('fieldLabels', {'id': 'no label', });
lyr_SL_1.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DCODE': 'hidden field', 'DIST': 'hidden field', 'CODE': 'hidden field', 'DIVISEC': 'hidden field', 'Surveys': 'hidden field', 'num of col': 'hidden field', });
lyr_Dissolved_2.set('fieldLabels', {'PROVINCE_N': 'no label', 'DCODE': 'no label', 'DIST': 'no label', 'CODE': 'no label', 'DIVISEC': 'no label', 'Area': 'no label', });
lyr_matugmagnds_3.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'inline label - always visible', 'GND_N': 'inline label - always visible', 'GND_C': 'inline label - always visible', 'DSDCODE4': 'inline label - always visible', 'GNDCODE7': 'hidden field', 'GNDPCODE5': 'hidden field', 'GNDPCODE3': 'hidden field', });
lyr_BClassroad_4.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'inline label - always visible', });
lyr_AClassroad_5.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'inline label - always visible', });
lyr_AClassroad_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});