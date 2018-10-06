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
      <div id="styling">
        <header>
        <nav>
    <div class="nav-wrapper">
      <a class="brand-logo"> <stencil-route-link url="/">BLOG MOUAAMOU DOSI 2018/2019</stencil-route-link></a>
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
              <stencil-route url='/edit/:iden' component='edit-article' />

            </stencil-route-switch>
          </stencil-router>
        </main>
        

           <footer class="page-footer">
         
          <div class="footer-copyright">
            <div class="container">
            © 2018 DOSI-Abdelhak MOUAAMOU "style materializecss"
            <a class="grey-text text-lighten-4 right" href="https://github.com/MOUAAMOUAbdelhak">My GITHUB</a>
            </div>
          </div>
        </footer>
        
      </div>
    );
  }
}
