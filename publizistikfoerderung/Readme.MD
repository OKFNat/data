Der Datensatz enthält Details zur ausbezahlten Publizistikförderung für die Jahre 2011 bis inklusive 2015. 

##Daten
Die Publizistikförderung wird von der [RTR/Komm-Austria] (https://www.rtr.at/) auf Basis des [Publizistikförderungsgesetzes von 1984] (https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10000784) vergeben. 
Die Entscheidungen werden jährlich von der RTR/Komm-Austria auf ihrer [Webseite veröffentlicht] (https://www.rtr.at/de/ppf/PubFErgebnisse). 

Der Datensatz wurde im Rahmen des [Gute Taten für Gute Daten] (http://okfn.at/gutedaten/) Projekts der [Open Knowledge Austria (OKFN)] (http://okfn.at/) aufbereitet. 

Der Datensatz beinhaltet folgende Informationen: 
"Jahr": Das Jahr, in dem die Förderung gewährt wurde

"Name_Zeitschrift": Name der Publikation, die eine Förderung beantragt hat

"Name_Zeitschrift_clean": Name der Publikation, wobei wir hier versucht haben, die Schreibweise zu vereinheitlichen, um eine bessere Vergleichbarkeit der Daten über mehrere Jahre hinweg zu ermöglichen. 

"Förderungsbewerber": Herausgeber bzw. Eigentümer der Publikation, samt Adresse

"Förderbetrag": Ausbezahlte Förderung, in Euro

"Nicht_gefördert": Publikationen, die sich für eine Förderung beworben haben, jedoch abgelehnt wurden, sind mit "Nicht gefördert" gekennzeichnet

##Befreiung
Wir haben die PDF-Dateien der einzelnen Jahre mit [Tabula] (http://tabula.technology/) die Daten aus der Tabelle extrahiert. Nach importieren der Datei in Tabula haben wir die Tabellenrahmen makriert, und jeweils die Rahmen etwas ausserhalb der Tabelle gezogen, um sicherzustellen, dass alle Daten erkannt und extrahiert werden.

Danach haben wir mit [Open Refine] (http://openrefine.org/) ähnlich geschriebene Zeitschriften identifiziert ("edit cells" => "cluster and edit"), eine neue Spalte erstellt und dort standardisierte Bezeichnungen der Fördernehmer eingefügt, um eine einfachere Vergleichbarkeit zu ermöglichen. 

## Lizenz
Das Datenpaket mit seinen aufgewerteten Daten ist von seinen Instandhaltern unter der Public Domain Dedication and License (PDDL) lizensiert.
Bei den Förder-Informationen handelt sich allem Anschein nach um Bekanntmachungen bzw. Entscheidungen nach §7 Urheberrechtsgesetz durch die RTR, womit die Informationen als freies Werk einzustufen sind. 

> § 7. (1) Urheberrechtsgesetz: „Gesetze, Verordnungen, amtliche Erlässe, Bekanntmachungen und Entscheidungen sowie ausschließlich oder vorwiegend zum amtlichen Gebrauch hergestellte amtliche Werke der im § 2 Z 1 oder 3 bezeichneten Art genießen keinen urheberrechtlichen Schutz.“

Wir empfehlen bei Weiterverwendung der Daten eine Nennung der RTR sowie ein Überprüfen der Daten in Bezug auf Vollständigkeit und Aktualität mit den auf der RTR-Webseite veröffentlichten Informationen. 
