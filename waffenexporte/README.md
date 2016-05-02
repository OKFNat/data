This dataset contains data on arms exports permits issued by EU members tates from years 2005 to 2013.

## Dataset
The data was extracted from the Official Journal of the European Union using the [amrs scraper] (https://github.com/OKFNat/armsScraper) – please see the page of that scraper for additional documentation.

The dataset was scraped as part of the [Good Deeds for Good Data] (http://okfn.at/gutedaten/) project by [Open Knowledge Austria] (http://okfn.at).

The arms exports data is reported by most (but not all!) national governments to the [EU External Action Service] (http://www.eeas.europa.eu/non-proliferation-and-disarmament/docs/index_en.htm) and then published in the Official Journal of the European Union: 

### Sources
2013: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52015XG0327(05)&rid=1

2012: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52014XG0121(01)&rid=4

2011: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52012XG1214(01)&rid=7

2010: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52011XG1230(01)&rid=6

2009: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52011XG0113(01)&rid=1

2008: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52009XG1106(01)&rid=1

2007: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52008XG1122(01)&rid=1

2006: http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52007XG1026(01)&rid=1

2005:	http://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52005XG1223(03)&rid=1

### Description
The dataset contains the following data points:

"unique-id": a unique identifyer that was created during the scraping process

"year": the calender year covered by the report that the data point was extracted from

"importing-country": the recipient country of arms or an arms exports permit

"exporting country": the country exporting the arms

"CML-category": Description of the category of arms or servies exported. You find a description of the abbreviations below. Please note that also "total" amounts of exports are included for each supplier-recipient relationship of each year. Because of various levels of granularity of the data reported by governments, "total" may include aggregate information that is not contained in individual category lines. 

"num-licenses": the number of licenses for a specific category a an exporting country issued for a specific importing country in a given year. In some cases, "total" may contain aggregates when no number of licenses are listed under specific categories.

"val-licenses-imported": the vale of exports allowed by licenses issued by the reporting government

"val-arms-imported": value of arms that were exported


### Brief descriptions of EU Common Military List categories

ML1: Smooth-bore weapons with a calibre of less than 20 mm, other arms and automatic weapons with a calibre of 12,7 mm (calibre 0,50 inches) or less and accessories, and specially designed components therefor

ML2: Smooth-bore weapons with a calibre of 20 mm or more, other weapons or armament with a calibre greater than 12,7 mm (calibre 0,50 inches), projectors and accessories, and specially designed components therefor

ML3: Ammunition and fuse setting devices, and specially designed components therefor

ML4: Bombs, torpedoes, rockets, missiles, other explosive devices and charges and related equipment and accessories, and specially designed components therefor

ML5: Fire control, and related alerting and warning equipment, and related systems, test and alignment and countermeasure equipment, specially designed for military use, and specially designed components and accessories therefor

ML6: Ground vehicles and components

ML7: Chemical or biological toxic agents, ‘riot control agents’, radioactive materials, related equipment, components and materials

ML8: ‘Energetic materials’, and related substances

ML9: Vessels of war, (surface or underwater) special naval equipment, accessories, components and other surface vessels

ML10: ‘Aircraft’, ‘lighter than air vehicles’, unmanned aerial vehicles, aero-engines and ‘aircraft’ equipment, related equipment and components, specially designed or modified for military use

ML11: Electronic equipment, not specified elsewhere on the EU Common Military List, and specially designed components therefor

ML12: High velocity kinetic energy weapon systems and related equipment, and specially designed components therefor

ML13: Armoured or protective equipment, constructions and components

ML14: Specialised equipment for military training or for simulating military scenarios, simulators specially designed for training in the use of any firearm or weapon specified by ML1 or ML2, and specially designed components and accessories therefor

ML15: Imaging or countermeasure equipment, specially designed for military use, and specially designed components and accessories therefor

ML16: Forgings, castings and other unfinished products the use of which in a specified product is identifiable by material composition, geometry or function, and which are specially designed for any products specified by ML1 to ML4, ML6, ML9, ML10, ML12 or ML19

ML17: Miscellaneous equipment, materials and ‘libraries’, and specially designed components therefor

ML18: Production equipment and components of products referred to in the EU Common Military List

ML19: Directed energy weapon systems (DEW), related or countermeasure equipment and test models, and specially designed components therefor

ML20: Cryogenic and ‘superconductive’ equipment, and specially designed components and accessories therefor

ML21: ‘Software’ specially designed or modified for the ‘development’, ‘production’‘use’ of equipment or materials controlled by the EU Common Military List

ML22: ‘Technology’ for the ‘development’, ‘production’ or ‘use’ of items controlled in the EU Common Military List


## License

The EU Commission [authorises reuse] (http://ec.europa.eu/geninfo/legal_notices_en.htm) of its information, provided the source is acknowledged. 

Content of the Official Journal of the European Union [is made available] (http://eur-lex.europa.eu/content/legal-notice/legal-notice.html) under the following condition:  
"Except where otherwise stated, reuse of the EUR-Lex data for commercial or non-commercial purposes is authorised provided the source is acknowledged." 

This data package is licenced under a [Public Domain Dedication and License (PDDL)] (http://opendatacommons.org/licenses/pddl/1.0/).
