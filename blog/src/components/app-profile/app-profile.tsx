import { Component, Prop,State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;
  @Prop() iden: String;
@State() nom: any;
@State() nom2: any;



componentWillLoad() {
  return fetch(`https://polymer-101-workshop.cleverapps.io/api/blogpost/`)
    .then(response => response.json())
    .then(data => {
      this.nom = data;
    //console.log(data);

  });

}

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    const data2=this.match.params.name;
   this.nom2 =this.nom.filter(v => v._id === `${data2}`);
    console.log(this.nom2);

      return (
        <div class="app-profile">
          <p>

            <div class= "table-responsive">
         {this.nom2.map(
             (article) =>
            <div class="row">
                <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{article.title}</span>
                      <p>{article.article}</p>
                    </div>
                    <span class="white-text">&nbsp;&nbsp;&nbsp;&nbsp; Realized by : {article.autor} at {article.creationDate}
                   </span>
                    <div class="card-action">
                    <stencil-route-link url="/">BACK</stencil-route-link>

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
