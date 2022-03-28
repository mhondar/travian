import { Selector} from "testcafe";

fixture("Travian")
    .page("https://ts20.x2.europe.travian.com/login.php")

    test("Vacas", async t => {
       
        const nameInput = Selector("input").withAttribute("name","name")
        const passInput = Selector("input").withAttribute("name","password")
        const vacasBtn = Selector("span").withText("Vacas")
        const villageWrapper = Selector(".villageWrapper")
        await t
            .maximizeWindow()
            .expect(nameInput.visible).ok("No se muestra el Login de Travian")
            .typeText(nameInput,"Demolisher")
            .typeText(passInput,"Masterkiller")
            .click(Selector('#s1'))
            .expect(vacasBtn.visible).ok("No Se muestra boton Vacas")
            .click(vacasBtn)
            .expect(villageWrapper.visible).ok("No se muestra la pagina")
        for(let i=1; i<=3; i++) {
            let startBtn= Selector("div").withAttribute("data-sortindex",i.toString()).find("button")
            await t.click(startBtn)
        }
    });

