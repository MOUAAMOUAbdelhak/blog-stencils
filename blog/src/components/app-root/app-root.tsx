import { Component, Prop,Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Prop() first: string;
  @Prop() last: string;
  @Event() backgroundToggle: EventEmitter;

  menuToggle(e) {
    console.log('Background toggled menu', e);
    this.backgroundToggle.emit(e);
  }
  render() {
    return (
      <div>
        <header>
        <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">BLOG</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><stencil-route-link url="/">Home</stencil-route-link></li>
        <li><stencil-route-link url="/article/">New ariticle</stencil-route-link></li>

      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><stencil-route-link url="/">Home</stencil-route-link></li>
        <li><stencil-route-link url="/article/">New ariticle</stencil-route-link></li>

  </ul>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/article/' component='app-article' />

            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
