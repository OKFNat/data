Der Datensatz ```Kulturschutzgueter.csv```enthält im Fall von bewaffneten Konflikten unter international anerkanntem Schutz stehende Objekte und Denkmäler in Österreich. 

## Daten
Der Datzsatz enthält 135 geschützte Kulturgüter in Österreich. Diese sind nach der [Haager Konvention von 1954] (https://de.wikipedia.org/wiki/Haager_Konvention_zum_Schutz_von_Kulturgut_bei_bewaffneten_Konflikten) im Fall von zwischenstaatlichen bewaffneten Konflikten geschützt. 

Die Liste wird vom Bundesdenmalamt erstellt und verwaltet und in Form von [135 PDF-Dateien veröffentlicht] (http://www.bda.at/downloads/2090/Kulturgueterschutzliste). 

Der Datensatz wurde im Rahmen des [Gute Taten für Gute Daten] (http://okfn.at/gutedaten/) Projekts der [Open Knowledge Austria (OKFN)] (http://okfn.at/) aufbereitet. 

Der Datensatz enthält folgende Informationen:

"Kulturschutzgut": Bezeichnung des geschützten Objekts

"Bundesland": Das österreichische Bundesland, in dem sich das Objekt befindet

"Politischer Bezirk": Der politische Bezirk, in dem sich das Objekt befindet

"Gemeinde": Gemeinde, in der sich das Objekt befindet

"Kastralgemeinde": Bezeichnung der Kastralgemeinde samt Kastralgemeindecode

"Lat": Latitude-Koordinaten

"Long": Longitude-Kooridnaten

## Befreiung
Zuerst haben wir die PDF-Dateien von der Webseite des BDA heruntergeladen. Um das bei 135 Dateien schnell zu bewerkstelligen haben wir dafür [Outwit] (https://www.outwit.com/) Hub verwendet.

Für die Befreiung mussten wir leider auch auf kommerzielle Lösungen zurückgreifen. Die einzelnen PDF-Dateien haben wir zu einer einzigen großen PDF-Datei gemerged, wofür wir Acrobat Pro verwendet haben. 

Anschließend haben wir mit [Tabula] (http://tabula.technology/) die Inhalte aus dieser Datei extrahiert, und damit eine Excel-Datei erstellt, und dort die Daten noch manuell gereinigt und angepasst. 
So haben wir etwa Weissraum vor und nach Wörten mit der Formel "=Glätten(Zelle)" (=Trim(cell)) beseitigt.

Die PDF-Dateien des Bundesdenkmalamts enthalten UTM-Kooridnaten der Standorte der geschützten Kulturgüter. Wir haben auf Basis dieser Informationen Latitiude/Longitude-Kooridnaten errechnet und dafür http://leware.net/geo/utmgoogle.htm verwendet. 

## Visualisierung
Eine Karte mit den geschützten Kulturgütern, erstellt durch die OKFN, findet sich hier:
https://openknowledgeaustria.cartodb.com/viz/3347d912-6921-11e5-a39e-0e674067d321/embed_map

## Lizenz
Das Datenpaket mit seinen aufgewerteten Daten ist von seinen Instandhaltern unter der [Public Domain Dedication and License (PDDL)](http://opendatacommons.org/licenses/pddl/1.0/) lizensiert.

Die vom Bundesdenkmalamt veröffentlichten Dateien enthalten auch eine Beschreibung des jeweiligen Objekts. Wir haben diese Information aufgrund urheberrechtlicher Einschränkkungen nicht in unseren Datensatz inkludiert. Diese Daten könnten beim BDA nach dem Informationsweiterverwendungsgesetz zur Weiterverwendung beantragt werden. 

Das BDA führt auf seiner Website an: Sämtliche Inhalte unterliegen - sofern nicht anders angegeben - dem Urheberrecht (Copyright) des Bundesdenkmalamtes Österreich".
