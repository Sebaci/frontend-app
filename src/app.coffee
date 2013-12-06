#<< utils
#<< server_side
#<< use_case
#<< gui
#<< glue


class App
  constructor: (appServerSide)->
    console.log("app started")

    useCase = new UseCase()
    gui = new Gui()
    serverSide = appServerSide

    glue = new Glue(useCase, gui, serverSide)

    useCase.start()


$(document).ready ->
  new App(new FakeServerSide())
