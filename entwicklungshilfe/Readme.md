Der Datensatz enthält Entwicklungshilfeprojekte, die die Austrian Development Agency (ADA) seit Anfang 2010 gefördert hat.
## Daten
Der Datensatz basiert auf einer [Projektliste] (http://www.entwicklung.at/zahlen-daten-und-fakten/projektliste/), veröffentlicht auf der Webseite der [Austrian Development Agency] (http://www.entwicklung.at/), die Liste wird dort monatlich aktualisiert. 

Mit Stand April 2016 beinhaltet der Datensatz 1.297 geförderte Projekte.

Der Datensatz wurde im Rahmen des [Gute Taten für Gute Daten Projekts] (http://okfn.at/gutedaten/) der [Open Knowledge Austria] (http://okfn.at/) mit Hilfe des [AidScrapers] (https://github.com/OKFNat/aidScraper) extrahiert. Danach wurden die Daten gesäubert bzw. durch die Spalten mit dem Zusatz "_cleaned" ergänzt. Projektbeschreibungen haben wir auch wegen deren Volumens nicht in diesem Datensatz inkludiert. 

Der Datensatz beinhaltet die folgenden Informationen: 

"country-region": Das Land (bzw. die Region), in dem das Projekt umgesetzt wird (auf Deutsch oder Englisch)

"country-region_cleaned": Eine weitgehend vereinheitlichte Schreibweise des Umsetzungs- bzw. Empfängerlandes bzw. der Ziel-Region (Daten-Säuberung erfolgte nach Extraktion des Datensatzes und soll nur eine einfachere Weiterverwendbarkeit und Analyse ermöglichen)

"OEZA-ADA-contract-volume": Projekt-Summe in Euro

"OEZA-ADA-contract-volume_cleaned": Projekt-Summe in Euro, vereinheitlichte Schreibweise (Daten-Säuberung erfolgte nach Extraktion des Datensatzes und soll eine einfachere Analyse ermöglichen)

"contract-number": Vertragsnummer

"year": Jahr, in dem der Projekt-Vertrag unterzeichnet wurde (nachträglich extrahiert aus der Vertragsnummer "contract-number", um einfachere Analyse zu ermöglichen)

"contract-partner": Der Name der Empfänger-Organisation bzw. der das Projekt umsetzenden Organisation (auf Deutsch oder Englisch, oft mehrere unterschiedliche Schreibweisen)

"contract-partner_cleaned": Standardisierte Bezeichnungen der Empfänger bzw. der umsetzenden Organisationen (Daten-Säuberung erfolgte nach Extraktion des Datensatzes und soll eine einfachere Analyse ermöglichen) 

"contract-title": Name/Titel des Projekts (auf Deutsch oder Englisch)

"url": die URL, unter der das entsprechende Projekt samt Beschreibung auf http://www.entwicklung.at/zahlen-daten-und-fakten/projektliste/ zu finden ist 

### Hintergrund 
Eine inhaltliche Analyse der Daten, Visualisierungen sowie Kontext gibt es in diesem Blog Post. 

Bitte ggf. Informationen mit der Original-Quelle abgleichen, http://www.entwicklung.at/zahlen-daten-und-fakten/projektliste/. 

## Lizenz
[Auf der Webseite] (http://www.entwicklung.at/impress/) der Austrian Development Agency findet sich der Urheberrechts-Hinweis: "Copyright by ADA – Alle Rechte Vorbehalten".
Wir haben uns für den Zweck dieser Veröffentlichung ein Recht auf Weiterverwendung nach dem Informationsweiterverwendungsgesetz (IWG) von der ADA einräumen lassen, und raten bei Interesse an Weiterverwendung an, das selbe zu tun. Kontaktinformationen sowie weitere rechtliche Hinweise finden sich auf http://www.entwicklung.at/impress/. 
