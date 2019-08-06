import { LitElement, html,property,customElement,css } from 'lit-element';

class SimpleGreeting extends LitElement {

  static get properties() {
    return { name: { type: String } };
  }

  constructor() {
    super();
    this.name = 'Mundo';
  }
  

  render() {
    return html`<p>Hola, ${this.name}!</p>`;
  }
}
@customElement('my-element')
export class MyElement extends LitElement {
  
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'Propiedad ¡¡Hola mundo!!';

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html` <style>
        
        :host { display: block;
          border: 5px solid red;
        }
      </style><p>${this.foo}</p>`;
  }
}


customElements.define('simple-greeting', SimpleGreeting);

