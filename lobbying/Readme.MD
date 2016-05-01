Inhalt des österreichischen Lobby- und Interessensvertretungsregisters.

## Daten
Die Daten entstammen dem österreichischen Lobbyregister, das vom Bundesministerium für Justiz betrieben wird und unter [lobbyreg.justiz.gv.at] (http://lobbyreg.justiz.gv.at) abrufbar ist. Stand: 19. April 2016. 

Der Datensatz wurde im Rahmen des [Gute Taten für Gute Daten] (http://okfn.at/gutedaten/) Projekts der [Open Knowledge Austria (OKFN)] (http://okfn.at/) aufbereitet. 

Die Datensätze zu Lobbying-Offenlegungen von einigen Kammern basieren auf Angaben in zahlreichen PDF-Dateien, die im Lobbyregister veröffentlicht oder verlinkt sind. Diese angaben wurden händisch bzw. mit [Tableau] (http://tabula.technology/) durch die OKFN in strukturierte Datensätze umgewandelt. 

```Lobbying_Offenlegung_Aerztekammer.csv``` – Quelle: http://www.lobbyreg.justiz.gv.at/edikte/ir/iredi18.nsf/liste!OpenForm&subf=r&RestrictToCategory=C#1461761680505

```Lobbying_Offenlegung_Arbeiterkammer.csv``` – Quelle: https://www.lko.at/?+Bekanntgaben+nach+dem+LobbyG+&id=2500%2C%2C1783655%2C

```Lobbying_Offenlegung_Wirtschaftskammer.csv``` – Quelle: https://www.wko.at/Content.Node/wir/oe/LobbyG.html

```Lobbying_Offenlegung_Landwirtschaftskammer.csv``` – Quelle: http://www.lobbyreg.justiz.gv.at/edikte/ir/iredi18.nsf/upl/R009X4564_CV001U0001/$file/Meldung_2014_nach_LobbyG.pdf


```Lobbyregister.csv``` wurde mit dem [LobbyScraper] (https://github.com/OKFNat/lobbyScraper), detailierte Dokumentation findet sich dort.

### Datensatz
Der Datensatz beinhaltet folgende Daten 

"ID": Eine ID, die jedem Offenleger beim extrahieren und bearbeiten des Datensatzes durch die OKFN zugewiesen wurde

"entryDescription": Organisation bzw. Firmenname, samt Firmenbuchnummer und Standort, allgemeine Anmerkungen zum Offenleger

"orgaName": Name der lobbyierenden Organisation/Firma/Kammer/Vertretung

"businessActivities": Beschreibung der allgemeinen Aktivitäten der lobbyierenden Organisation/Firma/Kammer/Vertretung (bezieht sich jedoch nicht auf konkrete Lobbying-Aktivitäten)

"lobbyingOrgaType": [Registerabteilung] (http://www.lobbyreg.justiz.gv.at/edikte/ir/iredi18.nsf/liste!OpenForm&subf=r&RestrictToCategory=A1) des Registers, in der der Offenleger registriert ist (A1, B, C, D)

"lobbyists": Titel und Name der eingetragenen Lobbyisten, das im Register eingetragene Geburtsdatum haben wir unkenntlich gemacht

"lobbyingRevenue": Von Lobbying-Firmen (Register A1) offengelegter Umsatz durch Lobbyingaktivitäten

"lobbyingRequests": Anzahl der von Lobbying-Firmen (Register A1) offengelegten Lobbyingaufträge

"numLobbyists": Anzahl der gemeldeten InteressesnvertreterInnen und LobbyistInnen, generiert auf Basis von "lobbyists" durch die OKFN

"lobbyingCostsGreater100000": Angaben von Firmen (Register B), ob ihre Lobbying-Ausgaben über 100.000 Euro betragen haben (Ja = über 100.000 Euro; Nein = unter 1000.000 Euro)

"lobbyingCosts": Ausgaben für Lobbying in Euro (nur für Register C, D) 

"registryNumber": Register-ID

"companyRegisterNumber": Firmenbuchnummer (bei Unternehmen)

"suborganisations": Nähere Angaben zu Bundesländer-Vertretungen von Kammern (Register C)

"legalFoundation": Angaben zur rechtlichen Grundlage für die Existenz von Kammern und Berufsvertretungen (Register C)

"codeOfConduct": Verhaltendskodex, zu dem sich Firmen und Organisationen beim Lobbying verpflichten

"registeredOffice": Stadt bzw. Adresse des Offenlegers

"webseite": Webseite des Offenelegers

"postalAddress": Detailierte Adresse des Offenlegers

"lastUpdate": Letze Aktualisierung des Eintrags laut Lobbyregisters

"dateAnnounced": Erste Offenlegung laut Register

"businessYearStart": Beginn des Geschäftsjahrs

"url": Link zum Eintrag im Lobbyregister

## Lizenz

Urheberrechtshinweis findet sich im Lobbyregister selbst keiner. Das Register wird vom Justizministerium betrieben, dieses räumt in [seinem Impressum] (https://www.justiz.gv.at/web2013/service_navigation/impressum~8ab4ac8322985dd501229ce6783300e3.de.html)  einen “Nachdruck” seiner Inhalte zu nicht-kommerziellen Zwecken unter Quellenangabe ein. 

