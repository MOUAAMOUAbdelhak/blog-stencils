import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() name: any;

  componentWillLoad() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost')
      .then(response => response.json())
      .then(data => {
        this.name = data;

      });

  }
 
  trim(namenul:string){
    if(namenul==null){
      return"chaine vide";
    }
  else{
    return namenul.substring(0,80);
  }
    
  }
  render() {

 
            return (
               <div class= "table-responsive">
         {this.name.map(
             (article) =>
            <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{article.title}</span>
                   
                      <p>{this.trim(article.article)}...</p>
                    </div>
                    <span class="white-text">&nbsp;&nbsp;&nbsp;&nbsp; Realized by : {article.autor} le, {article.creationDate}
                   </span>
                    <div class="card-action">
                    <stencil-route-link url={`/profile/${article._id}`} class="btn waves-effect waves-light">detaille</stencil-route-link>
                    &nbsp;&nbsp;
                    <stencil-route-link url={`/edit/${article._id}`} class="btn waves-effect waves-light">Modifier</stencil-route-link>
                

                    </div>
                  </div>
                </div>
              </div>
      )}
       </div>
            );
          
        /*  else{

            return (
              <div class= "table-responsive">
        {this.name.map(
            (article) =>
           <div class="row">
               <div class="col s12 m6">
                 <div class="card blue-grey darken-1">
                   <div class="card-content white-text">
                     <span class="card-title">{article.title}</span>
                     
                     <p>{article.article.substring(0, 50)}...</p>
                   </div>
                   <span class="white-text">&nbsp;&nbsp;&nbsp;&nbsp; Realized by : {article.autor} at {article.creationDate}
                  </span>
                   <div class="card-action">
                   <stencil-route-link url={`/profile/${article._id}`}>MORE</stencil-route-link>

                   </div>
                 </div>
               </div>
             </div>
     )}
      </div>
           );
          }
*/        
         






    }

  }

  /*@Prop() forgotPasswordUrl: string;
  @Event() loginShouldOccur: EventEmitter;
 // @Element() host: HTMLElement;
  login() {
    event.preventDefault();

    let inputs = this.host.querySelectorAll('input');
    this.loginShouldOccur.emit({ username: inputs[0].value, password: inputs[1].value });
}
  render() {
    return (
      <form class="login-form" onSubmit={() => this.login()}>
      <div class="login-container">
        <div class="field-wrap">
          <label class="login-username">article <span class="req">*</span>:</label>
          <input name="username" required />
        </div>
        <div class="field-wrap">
          <label class="login-password">date <span class="req">*</span>:</label>
          <input type="password" name="password" required />
        </div>
          {this.forgotPasswordUrl ?
              <p class="forgot">
                <stencil-route-link url={this.forgotPasswordUrl}>Forgot Password?</stencil-route-link>
              </p> : ''}
        <button type="submit">Login</button>
      </div>
    </form>
    );
  }*/
