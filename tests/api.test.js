const { handler } = require("../src/Controller/getSwapiPlanets");

	
beforeEach(() => {
    jest.resetAllMocks()
})

test("test for getting planets from swapi and transforming properties to spanish", async () => {

    const response = await handler()
    console.log(response)
    expect(response.status).toEqual(200)
})