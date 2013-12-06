(function() {
  var UseCase,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  UseCase = (function() {

    function UseCase() {
      this.setNews = __bind(this.setNews, this);

      this.start = __bind(this.start, this);
      this.news = [];
    }

    UseCase.prototype.start = function() {
      return console.log("use case started");
    };

    UseCase.prototype.setNews = function(news) {
      this.news = news;
    };

    return UseCase;

  })();

}).call(this);
