(function() {
  var App;

  App = (function() {

    function App(appServerSide) {
      var glue, gui, serverSide, useCase;
      console.log("app started");
      useCase = new UseCase();
      gui = new Gui();
      serverSide = appServerSide;
      glue = new Glue(useCase, gui, serverSide);
      useCase.start();
    }

    return App;

  })();

  new App(new FakeServerSide());

}).call(this);
