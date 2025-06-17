describe("Mercado Libre", () => {
  it("Filtra Nuevo + CDMX, ordena y muestra los 5 primeros", () => {
    cy.visit("/");
    cy.get("#MX", { timeout: 20000 }).should("be.visible").click();

    cy.origin("https://www.mercadolibre.com.mx", () => {
      cy.get('button:contains("Aceptar cookies")', { timeout: 5000 }).then(
        ($btn) => {
          if ($btn.length) {
            cy.wrap($btn).click({ force: true });
          }
        }
      );

      cy.get('button:contains("Más tarde")', { timeout: 5000 }).then(($btn) => {
        if ($btn.length) {
          cy.wrap($btn).click({ force: true });
        }
      });

      cy.wait(500);

      cy.get('input[name="as_word"]', { timeout: 15000 })
        .should("be.visible")
        .type("playstation 5{enter}");
    });

    cy.origin("https://listado.mercadolibre.com.mx", () => {
      cy.contains("Condición").scrollIntoView();
      cy.get('a[aria-label^="Nuevo"]', { timeout: 10000 })
        .first()
        .click({ force: true });

      cy.wait(5000);

      cy.contains(".andes-tag", "Nuevo", { timeout: 15000 }).should(
        "be.visible"
      );

      cy.contains("Ubicación").scrollIntoView();
      cy.get('a[aria-label^="Distrito Federal"]', { timeout: 10000 })
        .first()
        .click({ force: true });

      cy.wait(5000);

      cy.contains(".andes-tag", "Distrito Federal", { timeout: 15000 }).should(
        "be.visible"
      );

      cy.contains("button.andes-dropdown__trigger", "Más relevantes", {
        timeout: 10000,
      })
        .should("be.visible")
        .click();

      cy.contains("Mayor precio", { timeout: 5000 }).should("be.visible"); 

      cy.contains("Mayor precio", { timeout: 5000 })
        .should("be.visible") 
        .wait(500) 
        .click(); 

      cy.wait(5000);

      cy.url({ timeout: 15000 }).should("include", "order=price_desc");
      cy.get(".ui-search-result__wrapper", { timeout: 15000 })
        .should("exist")
        .and("be.visible");

      cy.get(".ui-search-result__wrapper", { timeout: 15000 }).should(
        "have.length.of.at.least",
        5
      );

      cy.get(".ui-search-result__wrapper")
        .take(5)
        .each(($el, index) => {
          cy.log(`Procesando producto ${index + 1}`);
          cy.wrap($el).find(".ui-search-item__title").should("be.visible");
          cy.wrap($el)
            .find(".andes-money-amount.ui-search-price__part")
            .should("be.visible");
        });
    });
  });
});
