Begünstigte, die von 2011 bis Mitte 2015 öffentliche Fördermittel aus dem Fischereifonds 2007-2013 erhalten haben.

## Daten
Der Datensatz enthält die Empfänger von Förderungen durch die öffentliche Hand, die im Rahmen des "Europäischen Fischereifonds 2007-2013" seit 2011 in Österreich vergeben wurden. Die aktuellsten Daten beziehen sich auf das erste Halbjahr 2015. Die Daten werden allem Anschein nach im Abstand von sechs Monaten aktualisiert.

Die Daten basieren auf Veröffentlichungen von Fördernehmern durch das Ministerium für ein Lebenswertes Österreich und sind in mehreren PDF-Dateien über http://www.bmlfuw.gv.at/land/eu-international/eu-fischereipolitik/eff2007-2013/Beguenstigte.html abrufbar.

Die Förderdaten werden auf Basis von Artikel 31 – insbesondere Absatz d) – der [EU Verordnung 498/2007]((http://eur-lex.europa.eu/legal-content/DE/TXT/?uri=celex:32007R0498)mit Durchführungsbestimmungen zum Europäischen Fischereifonds veröffentlicht. 

Der Datensatz ist relativ klein, die Datenqualität solide. Jedoch musste in einigen Fällen die Schreibweise von Empfängern standardisiert werden (idente Empfänger wurden unterschiedlich geschrieben). Sogenannte einzigartige Identifikatoren anhand derer ein Förderempfänger eindeutig identifizierbar wäre, etwa eine Firmenbuch– oder Vereinsregisternummer, sind in den Daten nicht enthalten. Adressen sind ebenfalls nicht enthalten.

In der Originalquelle sind keine Geodaten enthalten – diese wurden beim Befreien hinzugefügt.

Der Datensatz besteht aus der folgenden Datei:
``` fischereifoerderungen.csv ```

####Beschreibung
Die Datei enthält folgende Spalten:

"id":   Eine bei der Befreiung erstellte ID-nummer für jede Zeile;

"jahr": Das Jahr, in dem die Förderung ausgezahlt wurde; für 2015 sind die Daten aus dem ersten Halbjahr enthalten;

"gemeinde": Die Gemeinde, in der der Fördernehmer seinen Sitz hat;

"fördernehmer": Die Firma bzw. der Verein, der Fördermittel erhalten hat;

"eff_förderung": Der Betrag der Förderung in Euro, der aus dem Europäischen Fischereifonds gezahlt wurde;

"nationale_förderung": Der Betrag in Euro, der aus nationalen Mitteln bereitgestellt wurde;

"förderung_beschreibung": Die Beschreibung der Art der Förderung – diese Information wurde beim Befreien hinzugefügt, in der Originalquelle findet sich nur ein Verweis auf Artikel, in denen die Förderung beschrieben wird;

"foerderung_artikel": Ein in den Original-Daten enthaltener Verweis auf die Beschreibung der entsprechenden Fördermaßnahme;

"lon", "lat": Geodaten, die die Gemeinde verorten, in der Fördernehmer seinen Sitz hat – diese Daten sind in der Quelle nicht enthalten und wurden beim Befreien erstellt. 

####Daten-Befreiung
Die Daten wurden mit [Tableau](http://tabula.nerdpower.org) aus den PDF-Dateien befreit und anschließend in einem Text-Editor und mit [Open Refine](http://openrefine.org/) gereinigt. Dabei wurden Begriffe und Namen standardisiert und kleine Abweichungen in der Schreibweise korrigiert. Auch wurden Beschreibungen der Förder-Maßnahmen ergänzt.

Anschließend wurden Geo-Koordinaten hinzugefügt, die die Gemeinden verorten, in denen der Zuschussempfänger seinen Sitz hat. Dazu wurde der Datensatz in [CartoDB](https://openknowledgeaustria.cartodb.com/viz/0ebc8948-725a-11e5-9c40-0ef7f98ade21/map) geladen, welches viele Gemeinden automatisch erkannte. 

Für die übrigen Gemeinden wurden händisch die Geodaten ermittelt. Dazu haben wir http://www.mapcoordinates.net benutzt, dass bei Eingabe einer Adresse die entsprechenden Geodaten ausgibt.

Aus CartoDB haben wir die Daten samt Geo-Koordinaten als GeoJason Datei exportiert, in http://geojson.io/ geladen und von dort als CSV exportiert.

Eine Erstvisualisierung der Daten mittels CartoDB findet sich hier: http://cdb.io/1G5r0Xk.

## Lizenz

Das Datenpaket mit seinen angereicherten Daten ist von seinen Instandhaltern unter der [Public Domain Dedication and License (PDDL)](http://opendatacommons.org/licenses/pddl/1.0/) lizensiert.  
Teile der ursprünglichen Rohdaten stammen vom [Bundesministerium für ein Lebenswertes Österreich](http://www.bmlfuw.gv.at/). Dort sind die Daten unter folgenden [Nutzungsbedingungen](http://www.bmlfuw.gv.at/impressum.html) veröffentlicht. 

Das Lebensministerium räumt ein Recht zur nicht-kommerziellen Weiterverwendung seiner Daten ein: "Außer zu kommerziellen Zwecken ist bei Quellenangabe ein Nachdruck vorbehaltlich anderslautender Bestimmungen gestattet." 

Bei einer Weiterverwendung der Daten empfehlen wir eine Nennung des Lebensministeriums sowie ein Überprüfen der Daten in Bezug auf Vollständigkeit und Aktualität. 
