var originaldaten = require('./unhcr_popstats_export_asylum_seekers_all_data.json');
var fs = require('fs');

var cleaned = {};
var rawarrival = {};
var raworigin = {};

originaldaten.forEach(function (set) {

  delete set.rsd;

  if (set.origin_country == 'Various/Unknown') {
    return;
  }
  if (set.arrival_country == 'Various/Unknown') {
    return;
  }

  var deletekey = [
    'rsd_procedure_type',
    'total_persons_pending_start_year',
    'UNHCR_assisted_1',
    'decisions_recognized',
    'decisions_other',
    'rejected',
    'otherwise_closed',
    'total_decisions'
  ];
  var deleteRegExp = new RegExp( deletekey.join('|') );
  var numberkey = ['applied_during_year'];
  var numberRegExp = new RegExp( numberkey.join('|') );

  Object.keys(set).forEach(function (key) {
    if (key.match(deleteRegExp)) {
      delete set[key];
    }
    if (key.match(numberRegExp)) {
      if ( set[key].match(/\*| /) ) {
        set[key] = 0;
      } else {
        set[key] = parseInt( set[key] );
      }
    }
  });

  var id = [set.year, set.arrival_country, set.origin_country].join('');

  if (cleaned[id]) {
    cleaned[id].applied_during_year += set.applied_during_year;
  } else {
    cleaned[id] = set;
  }

});

var alledaten = [];

for (var c in cleaned) {
  if (cleaned.hasOwnProperty(c)) {
    alledaten.push( cleaned[c] );
  }
}

fs.writeFileSync('alledaten.json', JSON.stringify({
  alledaten: alledaten
}));
