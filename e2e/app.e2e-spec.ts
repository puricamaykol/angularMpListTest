import { AngularMpListTestPage } from './app.po';

describe('angular-mp-list-test App', () => {
  let page: AngularMpListTestPage;

  beforeEach(() => {
    page = new AngularMpListTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
