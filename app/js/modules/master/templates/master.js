module.exports = (function(Handlebars) {

var templates = {};

templates["js/master/master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-wrap "
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"landing\">\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\"></div>\n\n  	<div class=\"content\"></div>\n  </div>\n</div>";
},"useData":true});

return templates;

})(window.Handlebars)["js/master/master"]