import { YoVotoPage } from './app.po';

describe('yo-voto App', function() {
  let page: YoVotoPage;

  beforeEach(() => {
    page = new YoVotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
