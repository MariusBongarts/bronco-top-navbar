import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * Modern Top circular navbar built with Lit-Element
 * @event selected - Dispatches a CustomEvent when nav item is selected. Selected item is stored in detail of Custom event
 * @cssprop --bg-color - Background color of item, when not hovered or selected
 * @cssprop --color - text color
 * @cssprop --color-hover - text color of item when hovered
 * @cssprop --height - Navbar height
 * @cssprop --position - Positioning of navBar. Default: fixed
 * @cssprop --primary-color - Change primary color easily
 * @cssprop --width - Navbar width. Default: 100vw
 * @cssprop --z-index - Default: 2
 */
@customElement('bronco-top-navbar')
export class BroncoTopNavbar extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  /**
   * Makes the navbar disappear on mobile devices
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  hideOnMobile = false;

  /**
   * Makes the navbar disappear, when user is scrolling
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  hideOnScrolling = true;

  /**
   * Makes the navbar disappear, when window is not scrolled to the top
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  hideOnNotTop = false;

  @property()
  isScrolling!: boolean;

  /**
   * If true, either navbar is completely hidden, when hideOnMobile = true or only leftHeader and rightHeader are shown
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  mobile = false;

  /**
   * Takes an array to set (minimum: 3, maximum 5) nav items, of this component
   * @type {string[]}
   * @memberof AppRoot
   */
  @property()
  navItems = ['Home', 'Components', 'Documentation', 'Get started'];

  /**
   * Attribute, which is set to true when navbar is open
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  open = false;

  /**
   * True, when window is scrolled to top
   * @type {boolean}
   * @memberof BroncoTopNavbar
   */
  @property()
  scrolledTop: boolean = true;

  /**
   * Sets selected item. Default is first item
   * @type {string}
   * @memberof BroncoTopNavbar
   */
  @property()
  selectedItem = 'Components';

  /**
   * Change the title of the navbar in the top left corner
   * @type {string}
   * @memberof BroncoTopNavbar
   */
  @property()
  title = 'Bronconents';

  firstUpdated() {
    if (window.innerWidth < 928) this.mobile = true;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 928) this.mobile = true;
      if (window.innerWidth >= 928) this.mobile = false;
    });

    document.addEventListener('scroll', () => {
      this.isScrolling = true;
      this.open = false;
      document.documentElement.scrollTop === 0 ? this.scrolledTop = true : this.scrolledTop = false;
      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    });

    // Closes Top navbar when clicking outside of navbar
    document.addEventListener('click', (e: Event) => {
      const clickoutside = !e.composedPath().includes(this);
      clickoutside ? this.open = false : '';
    });
  }

  emit(selectedItem: string) {
    this.selectedItem = selectedItem;
    this.dispatchEvent(
      new CustomEvent('selected', {
        detail: selectedItem,
        bubbles: true
      })
    );
  }

  render() {
    return html`
    ${!this.mobile || !this.hideOnMobile ? html`
    <div id="topBar" class="${(this.scrolledTop || !this.hideOnScrolling) || !this.hideOnNotTop ? 'show' : 'hide hideBar'}">
      <ul class="navbar">
        <li id="leftHeader">
          <slot name="leftHeader"></slot>
        </li>
        ${!this.mobile ? html` ${this.navItems.map(item => html`
        <li @click=${()=> this.emit(item)}
          class=${this.selectedItem === item ? 'active' : ''}>${item}</li>`)}` : ''}
        <li id="rightHeader">
          <slot name="rightHeader"></slot>
        </li>
      </ul>
    </div>
    ` : ''}
`;
  }

}
