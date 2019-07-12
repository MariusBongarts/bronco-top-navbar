
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#live-demo)

## ➤ Live demo

<p class="codepen" data-height="311" data-theme-id="0" data-default-tab="html,result" data-user="marius2502" data-slug-hash="MMzboL" style="height: 311px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="bronco-button">
  <span>See the Pen <a target="_blank" href="https://codepen.io/marius2502/pen/gNyWWV">
  bronco-corner-navbar</a> by marius2502 (<a target="_blank" href="https://codepen.io/marius2502">@marius2502</a>)
  on CodePen.</span>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#bronco-top-navbar)

## ➤ bronco-top-navbar

Modern Top circular navbar built with Lit-Element

### Properties

| Property          | Type          | Default       | Description                                      |
|-------------------|---------------|---------------|--------------------------------------------------|
| `clickoutside`    | `false \| ""` |               |                                                  |
| `hideOnMobile`    | `boolean`     | false         | Makes the navbar disappear on mobile devices     |
| `hideOnNotTop`    | `boolean`     | false         | Makes the navbar disappear, when window is not scrolled to the top |
| `hideOnScrolling` | `boolean`     | true          | Makes the navbar disappear, when user is scrolling |
| `isScrolling`     | `boolean`     | **required**  |                                                  |
| `mobile`          | `boolean`     | false         | If true, either navbar is completely hidden, when hideOnMobile = true or only leftHeader and rightHeader are shown |
| `navItems`        | `string[]`    |               | Takes an array to set (minimum: 3, maximum 5) nav items, of this component |
| `open`            | `boolean`     | false         | Attribute, which is set to true when navbar is open |
| `scrolledTop`     | `boolean`     | true          | True, when window is scrolled to top             |
| `selectedItem`    | `string`      | "Components"  | Sets selected item. Default is first item        |
| `title`           | `string`      | "Bronconents" | Change the title of the navbar in the top left corner |

### Events

| Event      | Description                                      |
|------------|--------------------------------------------------|
| `selected` | Dispatches a CustomEvent when nav item is selected. Selected item is stored in detail of Custom event |

### CSS Custom Properties

| Property          | Description                                      |
|-------------------|--------------------------------------------------|
| `--bg-colorv`     | Background color of item, when not hovered or selected |
| `--color`         | text color                                       |
| `--height`        | Navbar height                                    |
| `--position`      | Positioning of navBar. Default: fixed            |
| `--primary-color` | Change primary color easily                      |
| `--width`         | Navbar width. Default: 100vw                     |
| `--z-index`       | Default: 2                                       |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Marius Bongarts" src="https://avatars2.githubusercontent.com/u/38838885?s=460&v=4" width="100">](https://bongarts.net/) | [<img alt="You?" src="https://joeschmoe.io/api/v1/random" width="100">](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| [Marius Bongarts](https://bongarts.net/)         | [You?](https://github.com/andreasbm/readme/blob/master/CONTRIBUTING.md) |
| [marius@bongarts.net](mailto:marius@bongarts.net) |                                                  |
| 🔥                                               |                                                  |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).