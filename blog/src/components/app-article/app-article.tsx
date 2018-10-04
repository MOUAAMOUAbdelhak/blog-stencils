  import { Component, State, Prop } from '@stencil/core';


  @Component({
    tag: 'app-article',
    styleUrl: 'app-article.css',
    shadow: true
  })
  export class AppArticle {
    @State() value: string;
   @Prop() title: string;
    article: string;
    author: string;
   
    handleChangeTitle(event) {
      this.title = event.target.value;
    }
    handleChangeAuthor(event) {
      this.author = event.target.value;
  }
  handleChangeArticle(event) {
    this.article=event.target.value;
    console.log(event.target.value)
   }

    postArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.author;
      const payload = {
        title,
        article,
        autor
      };
      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
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
                    <h1 class="title">New Artical</h1>
                  </div>
                </div>

                <div class="subheader-content has-text-centered">
                  <div class="nav-center">
                    <a class="nav-item">
                      <span class="icon">
                        <i class="fa fa-facebook" />
                      </span>
                    </a>
                    <a class="nav-item">
                      <span class="icon">
                        <i class="fa fa-twitter" />
                      </span>
                    </a>
                    <a class="nav-item">
                      <span class="icon">
                        <i class="fa fa-instagram" />
                      </span>
                    </a>
                    <a class="nav-item">
                      <span class="icon">
                        <i class="fa fa-rss" />
                      </span>
                    </a>
                  </div>
                  <hr />
                </div>

                <div class="single-content">
                  <form>
                    <div class="field">
                      <label class="label">Title</label>
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Text input"
                           
                          onInput={(event) => this.handleChangeTitle(event)}
                          required
                        />
                      </p>
                    </div>

                    <div class="field">
                      <label class="label">Article</label>
                      <p class="control">
                        <textarea
                          class="textarea"
                          placeholder="Textarea"
                           
                          onInput={(event) => this.handleChangeArticle(event)}
                          required/>
                      </p>
                    </div>
                    <div class="field">
                      <label class="label">Autor</label>
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Email input" 
                          value=""
                          
                          onInput={(event) => this.handleChangeAuthor(event)}
                          required
                        />
                      </p>
                    </div>
                    <div class="field is-grouped">
                      <p class="alin">
                        <button
                          class="btn waves-effect waves-light" type="submit" name="action" id="marg"
                          onClick={this.postArticle.bind(this)}
                        >
                          Add
                          <i class="material-icons right"></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button class="btn waves-effect waves-light" type="submit" name="action">Cancel</button>
                      </p>
                    </div>
                  </form>
                </div>
                <div class="has-text-right">
                  <p>
                  <stencil-route-link url="/">Back to Home</stencil-route-link>
                
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    }

