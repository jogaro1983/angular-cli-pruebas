import { AngularCliPruebasPage } from './app.po';

describe('angular-cli-pruebas App', function() {
  let page: AngularCliPruebasPage;

  beforeEach(() => {
    page = new AngularCliPruebasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
