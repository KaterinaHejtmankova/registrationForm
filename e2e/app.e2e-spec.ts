import { CngroupPage } from './app.po';

describe('cngroup App', function() {
  let page: CngroupPage;

  beforeEach(() => {
    page = new CngroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
