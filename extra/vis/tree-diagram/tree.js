var treeData = [
  {
    "name": "Semantic Classes",
    "parent": "null",
    "children": [
      {
        "name": "terrain",
        "parent": "Semantic Classes",
        "children": [
          {
            "name": "asphalt",
            "parent": "terrain",
            "color": "rgb(192,192,192)"
          },
          {
            "name": "gravel",
            "parent": "terrain",
            "color": "rgb(105,105,105)"
          },
          {
            "name": "soil",
            "parent": "terrain",
            "color": "rgb(160,82,45)"
          },
          {
            "name": "sand",
            "parent": "terrain",
            "color": "rgb(244,164,96)"
          }
        ]
      },
      {
        "name": "vegetation",
        "parent": "Semantic Classes",
        "children": [
        	{
        		"name": "drivable vegetation",
        		"parent": "vegetation",
        		"children": [
        			{
        				"name": "low grass",
        				"parent": "drivable vegetation",
                "color": "rgb(154,205,50)"
        			},
        			{
        				"name": "high grass",
        				"parent": "drivable vegetation",
                "color": "rgb(0,128,0)"
        			}
        		]
        	},
        	{
        		"name": "non-drivable vegetation",
        		"parent": "vegetation",
        		"children": [
        			{
        				"name": "passable vegetation",
        				"parent": "non-drivable vegetation",
                "children": [
                  {
                    "name": "bush",
                    "parent": "passable vegetation",
                    "color": "rgb(60,179,113)"
                  },
                  {
                    "name": "tree crown",
                    "parent": "passable vegetation",
                    "color": "rgb(0,250,154)"
                  }
                ]
        			},
        			{
        				"name": "non-passable vegetation",
        				"parent": "non-drivable vegetation",
        				"children": [
        					{
        						"name": "forest",
        						"parent": "non-passable vegetation",
                    "color": "rgb(34,139,34)"
        					},
        					{
        						"name": "misc. vegetation",
        						"parent": "non-passable vegetation",
                    "color": "rgb(0,100,0)"
        					},
        					{
        						"name": "tree trunk",
        						"parent": "non-passable vegetation",
                    "color": "rgb(139,69,19)"
        					}
        				]
        			}
        		]
        	}
        ]
      },
      {
        "name": "construction",
        "parent": "Semantic Classes",
        "children": [
        {
          "name": "building",
          "parent": "construction",
          "color": "rgb(1,51,73)"
        },
        {
          "name": "fence",
          "parent": "construction",
          "color": "rgb(190,153,153)"
        },
        {
          "name": "wall",
          "parent": "construction",
          "color": "rgb(0,132,111)"
        }
        ]
      },
      {
        "name": "vehicle",
        "parent": "Semantic Classes",
        "children": [
        {
          "name": "bus",
          "parent": "vehicle",
          "color": "rgb(0,60,100)"
        },
        {
          "name": "car",
          "parent": "vehicle",
          "color": "rgb(0,0,142)"
        }
        ]
      },
      {
        "name": "sky",
        "parent": "Semantic Classes",
        "color": "rgb(135,206,250)"
      },
      {
        "name": "object",
        "parent": "Semantic Classes",
        "children": [
        {
          "name": "misc. object",
          "parent": "object",
          "color": "rgb(128,0,128)"
        },
        {
          "name": "pole",
          "parent": "object",
          "color": "rgb(153,153,153)"
        },
        {
          "name": "traffic sign",
          "parent": "object",
          "color": "rgb(255,255,0)"
        }
        ]
      },
      {
        "name": "human",
        "parent": "Semantic Classes",
        "children": [
        {
          "name": "person",
          "parent": "human",
          "color": "rgb(220,20,60)"
        }
        ]
      },
      {
        "name": "animal",
        "parent": "Semantic Classes",
        "color": "rgb(255,182,193)"
      },
      {
        "name": "ego vehicle",
        "parent": "Semantic Classes",
        "color": "rgb(220,220,220)"
      }
    ]
  }
];


// ************** Generate the tree diagram	 *****************
var margin = {top: 20, right: 40, bottom: 20, left: 120};
var width = 700 - margin.right - margin.left;
var height = 800 - margin.top - margin.bottom;
	
var i = 0,
	duration = 750,
	root;

var tree = d3.layout.tree()
	.size([height, width]);

var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#tree-div").append("svg")
	.attr("width", width + margin.right + margin.left)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


root = treeData[0];
root.x0 = height / 2;
root.y0 = width;
  
update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
	  links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 115; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
	  .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
	  .attr("class", "node")
	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
	  .on("click", click);

  nodeEnter.append("circle")
	  .attr("r", 1e-6)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
    .style("stroke", function(d) { return d.color ? d.color : "steelblue" });

  nodeEnter.append("text")
	  .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
	  .attr("dy", "0em")
	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
	  .text(function(d) { var words = d.name.split(/\s+/); return words.length >= 1 ? words[0] : d.name; })
	  .style("fill-opacity", 1e-6);

  nodeEnter.append("text")
    .attr("dx",  function(d) { return d.children || d._children ? "-6em" : "1.1em"; })
    .attr("dy", "1.15em")
    .text(function(d) { var words = d.name.split(/\s+/); return words.length >= 1 ? words[1] : ""; })
    .style("fill-opacity", 1e-6);


  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
	  .attr("r", 10)
	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; })
    .style("stroke", function(d) { return d.color ? d.color : "steelblue" });

  nodeUpdate.selectAll("text")
	  .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
	  .duration(duration)
	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
	  .remove();

  nodeExit.select("circle")
	  .attr("r", 1e-6);

  nodeExit.select("text")
	  .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
	  .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
	  .attr("class", "link")
	  .attr("d", function(d) {
		var o = {x: source.x0, y: source.y0};
		return diagonal({source: o, target: o});
	  });

  // Transition links to their new position.
  link.transition()
	  .duration(duration)
	  .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
	  .duration(duration)
	  .attr("d", function(d) {
		var o = {x: source.x, y: source.y};
		return diagonal({source: o, target: o});
	  })
	  .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
	d.x0 = d.x;
	d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
	d._children = d.children;
	d.children = null;
  } else {
	d.children = d._children;
	d._children = null;
  }
  update(d);
}
