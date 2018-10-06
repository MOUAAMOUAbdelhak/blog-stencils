import { Component, Prop,State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() history:RouterHistory;
  @Prop() match: MatchResults;
  @Prop() iden: String;
@State() nom: any;
@State() nom2: any;


redirect(){
  this.history.goBack();
}

deletefnct(){

  
  let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'+this.match.params.name;
 // let id = this.match.params.id;
  return fetch((url),{
  method:'DELETE',headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }}).then(() => {alert("succed");
    this.redirect();}
      ).catch((error) => {
      alert(' Error ');
      console.error(error);
    });
}
componentWillLoad() {
  return fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`)
    .then(response => response.json())
    .then(data => {
      this.nom = data;
    //console.log(data);

  });

}
trim(namenul:string){
  if(namenul==null){
    return"chaine vide";
  }
else{
  return namenul;
}
  
}
  

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    //console.log(this.match.params.name);
    const data2=this.match.params.name;
   this.nom2 =this.nom.filter(v => v._id === `${data2}`);
   

      return (
        <div class="app-profile">
          <p>

            <div class= "table-responsive">
         {this.nom2.map(
             (article) =>
            <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content  white-text">
                      <span class="card-title">{article.title}</span>
                      <p>{this.trim(article.article)}</p>
                    </div>
                    <span class="white-text">&nbsp;&nbsp;&nbsp;&nbsp; Realized by : {article.autor} at {article.creationDate}
                   </span>
                    <div class="card-action">
                    <stencil-route-link url="/">Retour</stencil-route-link>
                
                    <button
                          class="btn waves-effect waves-light" type="submit" name="action" id="marg"
                          onClick={(e)=>this.deletefnct()}
                        >
                          Supprimer
                          <i class="material-icons right"></i>
                        </button>
                  
                    </div>
                  </div>
                </div>
              </div>
      )}
       </div>
          </p>
        </div>
      );

  }
}
