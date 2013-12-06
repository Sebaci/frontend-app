(function() {
  var FakeServerSide,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  FakeServerSide = (function() {

    function FakeServerSide() {
      this.newsLoaded = __bind(this.newsLoaded, this);

      this.loadNews = __bind(this.loadNews, this);

      this.fake_news = __bind(this.fake_news, this);

      var i, _i;
      console.log("fake server side constructor");
      this.news = [];
      for (i = _i = 1; _i <= 5; i = ++_i) {
        this.news.append(this.fake_news(i));
      }
      this.counter = 5;
    }

    FakeServerSide.prototype.fake_news = function(n) {
      var news;
      news = {
        id: n,
        author: "Sebaci" + n,
        title: "Title" + n,
        content: "Content" + n
      };
      return news;
    };

    FakeServerSide.prototype.loadNews = function() {
      return this.newsLoaded(this.news);
    };

    FakeServerSide.prototype.newsLoaded = function(news) {};

    return FakeServerSide;

  })();

}).call(this);
