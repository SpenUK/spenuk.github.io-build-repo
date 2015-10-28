module.exports = (function(Handlebars) {

var templates = {};

templates["js/intro/intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"social-watermarks\"></ul>\n\n<div class=\"cell\">\n	<div class=\"landing-content\" id=\"landing\">\n		<div class=\"hero-svg\"></div>\n\n		<div style=\"width: 90%; max-width: 600px; margin: 0 auto;\">\n			<p>Hi, I'm <a href=\"#/about\">Spen</a>, a London-based web developer. Please check out <a href=\"#/projects\">my work</a> and <a href=\"#/blog\">my blog</a> (coming soon!), and if there's anything else, feel free to <a href=\"#/contact\" >get in touch</a>.</p>\n		</div>\n	</div>\n</div>";
  },"useData":true});

return templates;

})(window.Handlebars)["js/intro/intro"]