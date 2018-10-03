import { Component } from '@stencil/core';


@Component({
  tag: 'app-article',
  styleUrl: 'app-article.css',
  shadow: true
})
export class AppArticle {
 

  

  render() {
   
      return (
        <div class="app-article">
          <p>
            Hello! My name is My name was passed in
            through a route param!
          </p>
        </div>
      );
    }
  }

