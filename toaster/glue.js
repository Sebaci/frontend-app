(function() {
  var Glue;

  Glue = (function() {

    function Glue(useCase, gui, serverSide) {
      var _this = this;
      this.useCase = useCase;
      this.gui = gui;
      this.serverSide = serverSide;
      After(this.useCase, "start", function() {
        return _this.serverSide.loadNews();
      });
      After(this.serverSide, "newsLoaded", function(news) {
        return _this.useCase.setNews(news);
      });
      After(this.useCase, "setNews", function(news) {
        return _this.gui.showNews(news);
      });
    }

    return Glue;

  })();

}).call(this);
