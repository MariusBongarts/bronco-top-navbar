import { LitElement } from 'lit-element';
import { BroncoTopNavbar } from './app.component';
import './app.component';

describe('bronco-Top-navbar', () => {
  let element: BroncoTopNavbar;


  beforeEach(async () => {
    localStorage.preferredLanguage = 'german';
    element = document.createElement('bronco-Top-navbar') as BroncoTopNavbar;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render bronco-Top-navbar', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    expect(element.textContent).toBe('');
  });



});
