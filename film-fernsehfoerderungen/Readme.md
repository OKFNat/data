Vom Fernsehfonds Austria der Rundfunk & Telekom Regulierungs-GmbH (RTR) geförderte Fernsehprojekte im Zeitraum 2009-2013.

# Daten

## Datenquelle
- Von der Website der RTR: https://www.rtr.at/de/inf/Projekte_2009_2013 
- Link zum PDF: https://www.rtr.at/de/inf/Projekte_2009_2013/Katalog_gefoerderte_Projekte_2009-2013.pdf (abgerufen am 28.11.2015)

## Datenaufbereitung
- (Durchgeführt im Zeitraum 28.11.-04.12.2015)
- PDF in Textdatei umgewandelt mit pdftotext.exe von Xpdf (http://foolabs.com/xpdf/download.html)
- Textzeilen vom ersten bis zum letzten Projekt ausgeschnitten und in drei Dateien für Filme, Serien und Dokumentationen aufgeteilt
- Alle Zeilen gelöscht außer die mit den Titeln, den Projekt-/Förderdaten und den Beschreibungen auf Deutsch und Englisch
- Vorkommen der einzelnen Datenfelder (mit Regex) gezählt (Förderinstitutionen und KoProduzent sind nicht für jedes Projekt vorhanden)
- Die vier Zeilen jedes Projekts (Titel, Projektdaten, Beschreibung deutsch, Beschreibung englisch) in jeweils eine Zeile zusammengefügt (mit Feldtrenner ";")
    - Bei einigen wenigen Projekten, für die die Projektdaten in getrennten Zeilen in der Textdatei vorgekommen sind, diese manuell in eine Zeile zusammengefügt
- Datenfelder der Projektdaten auch mit ";" statt Leerzeichen getrennt (für leere Datenfelder ein extra ";" eingefügt)
- Feldbezeichner (z.B. "Gesamtherstellungskosten") und Einheiten (z.B. "Euro") aus den Datenfeldern gelöscht
- Tausendertrennpunkte aus Datenfeldern "Gesamtherstellungskosten" und "Fernsehfonds Austria" gelöscht
- In Datenfeldern mit Aufzählungen (Förderinstitutionen, KoProduzent, Fernsehsender) die Leerzeichen nach Beistrichen gelöscht ("ARD, ORF" → "ARD,ORF")
- Leerzeichen und übrige "MIN"-Einheiten aus Minutenfeldern entfernt ("4 x 48 MIN, 5 x 45" → "4x48,5x45")
- Vorkommen von "SS" durch "ß" ersetzt
- Einige offensichtliche Fehler manuell ausgebessert, z. B. "GMbH" → "GmbH", "AhaEffekt" → "Aha-Effekt", "oRF" → "ORF" (im Abgleich mit PDF)
- Anführungszeichen in Datenfeldern verdoppelt und Felder mit enthaltenen Anführungszeichen unter Anführungszeichen gesetzt
- Alle Beschreibungsfelder (deutsch und englisch) unter Anführungszeichen gesetzt
- Feldtitelzeile vor der ersten Datenzeile eingefügt

Es kann sein, dass durch die Umwandlung von PDF zu TXT weitere Fehler (wie "SS" statt "ß" oder "AhaEffekt" statt "Aha-Effekt"), in den CSV-Daten enthalten sind, die bisher noch nicht aufgefallen sind und nicht systematisch gesucht werden können.

## Datensätze
    rtr_gefoerderte-projekte_fernsehfonds-austria_2009-2013_filme.csv
Geförderte Filme, PDF-Seiten 17-115 (99 Datensätze)
    rtr_gefoerderte-projekte_fernsehfonds-austria_2009-2013_serien.csv
Geförderte Serien, PDF-Seiten 117-134 (18 Datensätze)
    rtr_gefoerderte-projekte_fernsehfonds-austria_2009-2013_dokumentationen.csv
Geförderte Dokumentationen PDF-Seiten 137-274 (138 Datensätze)

## Datenstruktur
    Titel;Produzent;Gesamtherstellungskosten (EUR);Fernsehfonds Austria (EUR);Förderinstitutionen;Ko-Produzenten;Fernsehsender;Länge (Min.);Jahr;Beschreibung (de);Beschreibung (en)

## CSV-Format
- Feldtrenner: ;
- Stringsbegrenzer: "
- Felder, in denen Feldtrenner oder Stringbegrenzer enthalten sind, sind mit Stringbegrenzer abgegrenzt.
- Alle Felder der Spalten "Beschreibung (de)" und "Beschreibung (en)" sind mit Stringbegrenzer abgegrenzt.
- Wo der Stringbegrenzer (") innerhalb von Stringbegrenzern vorkommt (d. h. in den Daten), ist er verdoppelt ("").


