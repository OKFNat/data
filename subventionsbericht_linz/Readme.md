Der Datensatz ```Subventionsbericht_Linz.csv``` enthält Förderungen und Transferzahlungen der oberösterreichischen Hauptstadt Linz für das Jahr 2014.

##Daten
Der Originalbericht ist als PDF-Datei auf der Webseite der [Stadt Linz] (http://www.linz.at) verfügbar: http://www.linz.at/presse/2015/201506_79309.asp. Die Förderungen werden seit 2013 jährlich offengelegt. 

Der Datensatz enthält die folgenden Informationen:

"Empfänger": Die Firma, Organisation oder Institution, die eine Förderung erhalten hat

"Betrag": Der ausbezahlte Betrag in Euro

"Beschreibung": Zusätzliche Information zur Förderung, basierend auf den Zwischentiteln des Förderberichts

"Jahr": Das Jahr der Auszahlung

## Datenbefreiung
Wir haben den Datensatz mit dem open source Tool [Tabula] (http://tabula.technology/) befreit, das die Finanz-Daten aus den Tabellen herausgelesen hat. Danach haben wir die Beträge in Excel (auch geeinget: etwa Google Sheets oder eine open source Tabellensoftware) durch Suchen (".") und Ersetzen ("") entfernt, um diese Zahlen zu vereinheitlichen. Zur Kontrolle haben wir die Beträge addiert und mit den im Bericht enthaltenen Zwischensummen verglichen – und diese dann aus dem Datensatz gelöscht. 

Abschließend haben wir Zwischentitel als Beschreibung der jeweiligen Förderung in einer neuen Spalte hinzugefügt, ebenso das Jahr, damit wir später zukünftige Berichte in der gleichen Datei ergänzen können und so einfach die ausbezahlten Subventionen über mehrere Jahre hinweg analysieren können.

##Lizenz
Public Domain, da es sich hier um Budget-Daten der öffentlichen Hand handelt. 

