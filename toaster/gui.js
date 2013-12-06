(function() {
  var Gui,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Gui = (function() {

    function Gui() {
      this.addNews = __bind(this.addNews, this);

      this.showNews = __bind(this.showNews, this);

      this.createElementFor = __bind(this.createElementFor, this);

    }

    Gui.prototype.createElementFor = function(templateId, data) {
      var element, html, source, template;
      source = $(templateId).html();
      template = Handlebars.compile(source);
      html = template(data);
      element = $(html);
      return element;
    };

    Gui.prototype.showNews = function(newsList) {
      var news, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = newsList.length; _i < _len; _i++) {
        news = newsList[_i];
        _results.push(this.addNews(news));
      }
      return _results;
    };

    Gui.prototype.addNews = function(news) {
      var newsElement;
      newsElement = this.createElementFor("#news");
      return $("myNews").append(newsElement);
    };

    return Gui;

  })();

}).call(this);
