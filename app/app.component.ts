import { Component } from 'angular2/core';
import { NewsComponent} from './news.component';
@Component({
	selector: 'news-app',
	template: `<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Today's Headlines</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Politics</a></li>
      <li><a href="#">Sports</a></li>
      <li><a href="#">International</a></li>
    </ul>
  </div>
</nav>
			   <news class="row"></news>
		<div class="jumbotron">
    
    <script>
    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
    </script>
  <p class="footer">&copy; Mohit 2017.</p>
</div>
			   `,
	directives:[NewsComponent],
	styleUrls: ['css/app.css']
 })
export class AppComponent {

 }
