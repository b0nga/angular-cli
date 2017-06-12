import { MyProject1Page } from './app.po';

describe('my-project1 App', () => {
  let page: MyProject1Page;

  beforeEach(() => {
    page = new MyProject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
