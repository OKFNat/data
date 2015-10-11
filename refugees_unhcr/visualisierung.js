var margin = {top: 6, right: 6, bottom: 6, left: 6},
    width = window.innerWidth - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom + 2000;

var formatNumber = d3.format(",.0f"),
    format = function(d) { return formatNumber(d) + " Meschen"; },
    color = d3.scale.category20();

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var sankey = d3.sankey()
    .nodeWidth(10)
    .nodePadding(10)
    .size([width, height]);

var path = sankey.link();

d3.json("alledaten.json", function(daten) {

  var alledaten = daten.alledaten;

  var rawnodesorigin = [];
  var rawnodesarrival = [];
  var nodeslength;

  var nodes = [];
  var links = [];

  alledaten.forEach(function (set) {

    if (set.year !== '2014') {
      return;
    }

   if (set.applied_during_year > 0) {

      var origin = set.origin_country;
      var arrival = set.arrival_country;

      if (rawnodesorigin.indexOf(origin) < 0) {
        rawnodesorigin.push( origin );
      }
      if (rawnodesarrival.indexOf(arrival) < 0) {
        rawnodesarrival.push( arrival );
      }

    }

  });

  nodeslength = rawnodesorigin.length;

  alledaten.forEach(function (set) {

    if (set.year !== '2014') {
      return;
    }

    if (set.applied_during_year > 0) {

      links.push({
        source: rawnodesorigin.indexOf(set.origin_country),
        target: rawnodesarrival.indexOf(set.arrival_country) + nodeslength,
        value: set.applied_during_year
      });

    }

  });

  var rawnodes2 = rawnodesorigin.concat(rawnodesarrival);

  rawnodes2.forEach(function (set) {

    nodes.push({name: set});

  });

  var display = {
    nodes: nodes,
    links: links
  };

  sankey
      .nodes(display.nodes)
      .links(display.links)
      .layout(32);

  var link = svg.append("g").selectAll(".link")
      .data(display.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });

  link.append("title")
      .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

  var node = svg.append("g").selectAll(".node")
      .data(display.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { this.parentNode.appendChild(this); })
      .on("drag", dragmove));

  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
      .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { return d.name + "\n" + format(d.value); });

  node.append("text")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");

  function dragmove(d) {
    d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
    sankey.relayout();
    link.attr("d", path);
  }

  d3.selectAll('.link').on('click', function () {
    this.classList.toggle('click');
  });
});
