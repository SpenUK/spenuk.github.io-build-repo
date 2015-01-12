;require(['handlebars'], function(Handlebars) { 
this["JST"] = this["JST"] || {};

this["JST"]["layout/header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"header\"></div>";
  },"useData":true});



this["JST"]["layout/homepage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"grid-container\">\n	<div class=\"grid-row\">\n	  <div class=\"small-12 medium-6 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-6 medium-3 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-6 medium-3 columns\"><div class=\"transition\"></div></div>\n	</div>\n\n	<div class=\"grid-row\">\n	  <div class=\"small-4 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-4 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-4 columns\"><div class=\"transition\"></div></div>\n	</div>\n\n	<div class=\"grid-row\">\n	  <div class=\"small-3 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-3 columns\"><div class=\"transition\"></div></div>\n	  <div class=\"small-6 columns\"><div class=\"transition\"></div></div>\n	</div>\n	\n</div>\n\n<style type=\"text/css\">\n	.transition {\n		min-height: 100px;\n		border: 1px solid rgba(0,0,0,0.3);\n		background-color: rgba(0,0,0,0.5);\n		margin-bottom: 10px;\n	}\n</style>";
},"useData":true});



this["JST"]["layout/testpage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"grid-container\">\n	<div class=\"grid-row\">\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-1\"></div>\n		</div>\n	</div>\n	<div class=\"grid-row\">\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-2\"></div>\n		</div>\n	</div>\n	<div class=\"grid-row\">\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n		<div class=\"small-6 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n		<div class=\"small-12 medium-4 large-2\">\n			<div class=\"test-3\"></div>\n		</div>\n	</div>\n</div>\n\n";
},"useData":true});});