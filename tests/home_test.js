Feature('Yelp Application');

Scenario('test filters default', (I) => {
    I.amOnPage('http://localhost:8100');
    I.see('SHOW FILTERS');
    I.seeElementInDOM({xpath: "//input[@placeholder='Search term']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='locationOrLatitude']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='locationOrLatitude'][@ng-reflect-model='false']"});
    I.see('Location');
    I.dontSee({xpath: "//input[@placeholder='Latitude']"});
    I.dontSee({xpath: "//input[@placeholder='Longitude']"});
    I.seeElementInDOM({xpath: "//input[@placeholder='Radius']"});
    I.see('Categories');
    I.see('Language');
    I.seeElementInDOM({xpath: "//input[@placeholder='Limit']"});
    I.seeElementInDOM({xpath: "//input[@placeholder='Offset']"});
    I.see('Sort by');
    I.seeElementInDOM({xpath: "//ion-select[@placeholder='Prices']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='openNowOrOpenAt']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='openNowOrOpenAt'][@ng-reflect-model='false']"});
    I.see('Open now');
    I.dontSee({xpath: "//ion-datetime[@placeholder='Open at']"});
    I.see('Attributes');
});

Scenario('test filters default', (I) => {
    I.amOnPage('http://localhost:8100');
    I.click({xpath: "//ion-toggle[@id='locationOrLatitude']"});
    I.click({xpath: "//ion-toggle[@id='openNowOrOpenAt']"});
    I.see('SHOW FILTERS');
    I.seeElementInDOM({xpath: "//input[@placeholder='Search term']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='locationOrLatitude']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='locationOrLatitude'][@ng-reflect-model='true']"});
    I.dontSee({xpath: "//input[@placeholder='Location']"});
    I.see('Latitude');
    I.see('Longitude');
    I.seeElementInDOM({xpath: "//input[@placeholder='Radius']"});
    I.see('Categories');
    I.see('Language');
    I.seeElementInDOM({xpath: "//input[@placeholder='Limit']"});
    I.seeElementInDOM({xpath: "//input[@placeholder='Offset']"});
    I.see('Sort by');
    I.seeElementInDOM({xpath: "//ion-select[@placeholder='Prices']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='openNowOrOpenAt']"});
    I.seeElementInDOM({xpath: "//ion-toggle[@id='openNowOrOpenAt'][@ng-reflect-model='true']"});
    I.dontSee({xpath: "//ion-toggle[@id='openNow']"});
    I.see('Open at');
    I.see('Attributes');
});