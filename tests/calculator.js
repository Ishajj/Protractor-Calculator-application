describe('demo calculator tests', function(){
    it('addition test', function() {
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        element(by.model('first')).sendKeys('123');
        element(by.model('second')).sendKeys('200');
        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(2000);
    });
     it('subtraction test', function(){
         browser.refresh();
         browser.sleep(2000);
         element(by.model('first')).sendKeys('400');
         element(by.model('second')).sendKeys('200');
         element(by.cssContainingText('option', '-')).click();
         element(by.css('[ng-click="doAddition()"]')).click();
         browser.sleep(2000);

     });
     
     
     
   
   

});