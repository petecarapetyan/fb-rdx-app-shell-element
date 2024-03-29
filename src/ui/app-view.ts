import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { Connected, State, RouteSelectors } from './connected'
import { sharedStyles } from './shared-styles'

import './view-account'
import './view-home'
import './view-signin'

declare global {
  interface HTMLElementTagNameMap {
    'app-view': AppViewElement
  }
}

@customElement('app-view')
export class AppViewElement extends Connected {
  @property({ type: String })
  view: string

  mapState(state: State) {
    return {
      view: RouteSelectors.view(state),
    }
  }

  render() {
    switch (this.view) {
      case 'home':
        return html `<view-home></view-home>`
      case 'account':
        return html `<view-account></view-account>`
      case 'signin':
        return html `<view-signin></view-signin>`
      default:
        return html `<view-404></view-404>`
      }
  }

  static get styles() {
    return [
      sharedStyles,
    ]
  }
}

