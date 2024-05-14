import general from "../fixtures/general.json";

describe("General spec", () => {
  beforeEach(() => {
    cy.visit("https://jamnishop.web.app/");
  });
  it("Visit the page", () => {
    cy.title().should("eq", general.shopTitle);
    cy.url().should("eq", Cypress.config().baseUrl);
    cy.percySnapshot("Shop page snapshot");
  });

  it("Check the routes", () => {
    cy.url().should("eq", Cypress.config().baseUrl);
    cy.get(".cartLink").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl + "cart");
    cy.get(".logoLink").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl);
  });

  it("Check the navbar content", () => {
    cy.get(".navbar").should("exist");
    cy.get(".logoLink").should("exist");
    cy.get(".logoTitle").should("have.text", general.shopTitle);
    cy.get(".cartLink").should("exist");
    cy.get(".cartButton").should("be.enabled");
    cy.get(".MuiBadge-badge").should("not.be.visible");
  });

  it("Check the shop cards content", () => {
    cy.get(".shopHeader").should("exist").and("have.text", general.shopHeader);

    cy.get(".kinderDeliceCard").should("exist").and("be.visible");
    cy.get(".kinderDeliceCard")
      .find(".cardTitle")
      .should("have.text", general.shopCards.kinderDelice.title);
    cy.get(".kinderDeliceCard")
      .find(".cardDescription")
      .should("have.text", general.shopCards.kinderDelice.description);
    cy.get(".kinderDeliceCard")
      .find(".cardPrice")
      .should("have.text", general.shopCards.kinderDelice.price);
    cy.get(".kinderDeliceCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderDeliceCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderDeliceCard")
      .find(".cardIncrementButton")
      .should("be.enabled");
    cy.get(".kinderDeliceCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);

    cy.get(".kinderMaxiKingCard").should("exist").and("be.visible");
    cy.get(".kinderMaxiKingCard")
      .find(".cardTitle")
      .should("have.text", general.shopCards.kinderMaxiKing.title);
    cy.get(".kinderMaxiKingCard")
      .find(".cardDescription")
      .should("have.text", general.shopCards.kinderMaxiKing.description);
    cy.get(".kinderMaxiKingCard")
      .find(".cardPrice")
      .should("have.text", general.shopCards.kinderMaxiKing.price);
    cy.get(".kinderMaxiKingCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderMaxiKingCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderMaxiKingCard")
      .find(".cardIncrementButton")
      .should("be.enabled");
    cy.get(".kinderMaxiKingCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);

    cy.get(".kinderSurpriseCard").should("exist").and("be.visible");
    cy.get(".kinderSurpriseCard")
      .find(".cardTitle")
      .should("have.text", general.shopCards.kinderSurprise.title);
    cy.get(".kinderSurpriseCard")
      .find(".cardDescription")
      .should("have.text", general.shopCards.kinderSurprise.description);
    cy.get(".kinderSurpriseCard")
      .find(".cardPrice")
      .should("have.text", general.shopCards.kinderSurprise.price);
    cy.get(".kinderSurpriseCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderSurpriseCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderSurpriseCard")
      .find(".cardIncrementButton")
      .should("be.enabled");
    cy.get(".kinderSurpriseCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);
  });

  it("Check 'Add to cart' card's and cart's badge functionality", () => {
    cy.get(".MuiBadge-badge").should("not.be.visible");
    cy.get(".kinderDeliceCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);
    cy.get(".kinderDeliceCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderDeliceCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderDeliceCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click();
    cy.get(".kinderDeliceCard").find(".cardQuantity").should("have.text", "3");
    cy.get(".kinderDeliceCard")
      .find(".cardDecrementButton")
      .should("be.enabled")
      .click();
    cy.get(".kinderDeliceCard").find(".cardQuantity").should("have.text", "2");
    cy.get(".kinderDeliceCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();
    cy.get(".infoSnackbar")
      .should("exist")
      .find(".MuiSnackbarContent-message")
      .should("have.text", general.shopCards.kinderDelice.snackbarMessage);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "2");

    cy.get(".kinderDeliceCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderDeliceCard").find(".cardAddButton").should("be.disabled");
    cy.get(".kinderDeliceCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);

    cy.get(".kinderMaxiKingCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);
    cy.get(".kinderMaxiKingCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderMaxiKingCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderMaxiKingCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click()
      .click();
    cy.get(".kinderMaxiKingCard")
      .find(".cardQuantity")
      .should("have.text", "4");
    cy.get(".kinderMaxiKingCard")
      .find(".cardDecrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click();
    cy.get(".kinderMaxiKingCard")
      .find(".cardQuantity")
      .should("have.text", "1");
    cy.get(".kinderMaxiKingCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();
    cy.get(".infoSnackbar")
      .should("exist")
      .find(".MuiSnackbarContent-message")
      .should("have.text", general.shopCards.kinderMaxiKing.snackbarMessage);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "3");

    cy.get(".kinderMaxiKingCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderMaxiKingCard").find(".cardAddButton").should("be.disabled");
    cy.get(".kinderMaxiKingCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);

    cy.get(".kinderSurpriseCard")
      .find(".cardAddButton")
      .should("be.disabled")
      .and("have.text", general.shopCards.addToCartButtonText);
    cy.get(".kinderSurpriseCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderSurpriseCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
    cy.get(".kinderSurpriseCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click()
      .click();
    cy.get(".kinderSurpriseCard")
      .find(".cardQuantity")
      .should("have.text", "4");
    cy.get(".kinderSurpriseCard")
      .find(".cardDecrementButton")
      .should("be.enabled")
      .click();
    cy.get(".kinderSurpriseCard")
      .find(".cardQuantity")
      .should("have.text", "3");
    cy.get(".kinderSurpriseCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();
    cy.get(".infoSnackbar")
      .should("exist")
      .find(".MuiSnackbarContent-message")
      .should("have.text", general.shopCards.kinderSurprise.snackbarMessage);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "6");

    cy.get(".kinderSurpriseCard")
      .find(".cardDecrementButton")
      .should("be.disabled");
    cy.get(".kinderSurpriseCard").find(".cardAddButton").should("be.disabled");
    cy.get(".kinderSurpriseCard")
      .find(".cardQuantity")
      .should("have.text", general.shopCards.defaultCardQuantity);
  });

  it("Check the cart functionality", () => {
    cy.get(".kinderDeliceCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click();
    cy.get(".kinderDeliceCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();
    cy.get(".kinderMaxiKingCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click()
      .click();
    cy.get(".kinderMaxiKingCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();
    cy.get(".kinderSurpriseCard")
      .find(".cardIncrementButton")
      .should("be.enabled")
      .click()
      .click()
      .click()
      .click();
    cy.get(".kinderSurpriseCard")
      .find(".cardAddButton")
      .should("be.enabled")
      .click();

    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "11");
    cy.get(".cartLink").should("exist").click();
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "11");
    cy.get(".cartHeader").should("exist").and("have.text", general.cartHeader);
    cy.percySnapshot("Cart page snapshot");

    cy.get(".cartItem-1")
      .should("exist")
      .find(".itemInfoContainer > span")
      .should("have.text", general.cartList.kinderDelice.title);
    cy.get(".cartItem-1")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderDelice.defaultQuantity);
    cy.get(".cartItem-1")
      .should("exist")
      .find(".itemIncrementButton")
      .should("have.text", general.cartList.itemButtons.incrementSymbol)
      .and("be.enabled")
      .click()
      .click();
    cy.get(".cartItem-1")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderDelice.modifiedQuantity);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "13");

    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemInfoContainer > span")
      .should("have.text", general.cartList.kinderMaxiKing.title);
    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderMaxiKing.defaultQuantity);
    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemDecrementButton")
      .should("have.text", general.cartList.itemButtons.decrementSymbol)
      .and("be.enabled")
      .click()
      .click()
      .click()
      .click();
    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemDecrementButton")
      .should("have.text", general.cartList.itemButtons.decrementSymbol)
      .and("be.disabled");
    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderMaxiKing.modifiedQuantity);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "9");

    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemInfoContainer > span")
      .should("have.text", general.cartList.kinderSurprise.title);
    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderSurprise.defaultQuantity);
    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemDecrementButton")
      .should("have.text", general.cartList.itemButtons.decrementSymbol)
      .and("be.enabled")
      .click()
      .click();
    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemDecrementButton")
      .should("have.text", general.cartList.itemButtons.decrementSymbol)
      .and("be.enabled");
    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemInfoContainer > p")
      .should("have.text", general.cartList.kinderSurprise.modifiedQuantity);
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "7");

    cy.get(".cartItem-3")
      .should("exist")
      .find(".itemDeleteButton")
      .should("have.text", general.cartList.itemButtons.removeText)
      .and("be.enabled")
      .click();
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "5");

    cy.get(".cartItem-2")
      .should("exist")
      .find(".itemDeleteButton")
      .should("have.text", general.cartList.itemButtons.removeText)
      .and("be.enabled")
      .click();
    cy.get(".MuiBadge-badge").should("be.visible").and("have.text", "5");

    cy.get(".cartItem-1")
      .should("exist")
      .find(".itemDeleteButton")
      .should("have.text", general.cartList.itemButtons.removeText)
      .and("be.enabled")
      .click();
    cy.get(".MuiBadge-badge").should("not.be.visible");

    cy.get(".emptyListAlert")
      .should("be.visible")
      .and("have.text", general.cartList.emptyListAlertText);

    cy.percySnapshot("Empty cart page snapshot");
  });
});
