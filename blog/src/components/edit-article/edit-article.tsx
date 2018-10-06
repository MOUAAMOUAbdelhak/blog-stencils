import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'edit-article',
    styleUrl: 'edit-article.css',
    shadow: true
  })
  export class EditArticle {
    @Prop() match : MatchResults;
    @State() artic : any;
     title: string;
     article: string;
     autor: string;
     _id : any;
     handleChangeTitle(event) {
      this.title = event.target.value;
    }
    handleChangeAuthor(event) {
      this.autor = event.target.value;
  }
  handleChangeArticle(event) {
    this.article=event.target.value;
    console.log(event.target.value)
   }
     componentWillLoad() {
        
        const data2=this.match.params.iden;
        console.log(data2);
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+data2)
      .then(response =>response.json()).
        then(data=>{
          this.artic=data;
          console.log(this.artic)
          this.title = this.artic.title;
          this.article = this.artic.article;
          this.autor = this.artic.autor;
          this._id = this.artic._id;
        })
        }

    editArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.autor;
      const _id = this._id;
      const postedited = {
        _id,  
        title,
        article,
        autor
      };
      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postedited)
      })
        .then(function(res) {
          return res.json();
        })
        .then(function(data) {
          console.log(JSON.stringify(data));
        });
    }

  
    render() {
     
      return (
        <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-mobile is-centered">
            <div class="column is-8 is-centered">
              <div class="header-content">
                <div class="has-text-centered">
                  <h1 class="title">Modifier Article</h1>
                </div>
              </div>

             

              <div class="single-content">
                <form>
                  <div>
                    <label>Titre</label>
                    <p>
                      <input
                       class="input"
                       type="text"
                       placeholder="Text input"
                        
                       onInput={(event) => this.handleChangeTitle(event)}
                       
                        value={this.title}
                        
                      />
                    </p>
                  </div>

                  <div>
                    <label>Article</label>
                    <p>
                      <textarea
                       class="textarea"
                       placeholder="Textarea"
                        
                       onInput={(event) => this.handleChangeArticle(event)}
                        value={this.article}
                      
                      />
                    </p>
                  </div>
                  <div>
                    <label>Auteur</label>
                    <p >
                      <input
                        class="input"
                        type="text"
                        placeholder="Email input" 
                      
                        
                        onInput={(event) => this.handleChangeAuthor(event)}
                        value={this.autor}                        
                     
                      />
                    </p>
                  </div>
                  <div>
                    <p >
                    <stencil-route-link url="/">
                      <button class="btn waves-effect waves-teal" type="submit" name="action"
                        onClick={this.editArticle.bind(this)}
                      >
                        Modifier
                      </button>
                      </stencil-route-link>
                      &nbsp;&nbsp;
                      <stencil-route-link url="/"  >
                  <button
                          class="btn waves-effect waves-light" 
                        >   Retour
                        </button>

               </stencil-route-link>
                    </p>
                  </div>
                </form>
              </div>
              <div>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }