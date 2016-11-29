import { ServiceSessionPage } from './app.po';

describe('service-session App', function() {
  let page: ServiceSessionPage;

  beforeEach(() => {
    page = new ServiceSessionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
