import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book_Vacations';

  navbg:any
  navclr:any

  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#');
    

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0  )
    {
      this.navbg = {
        // 'background-color': '#000000'
        'background-image': 'url(../assets/images/nav-bg.png)'
      }

      this.navclr = {
          'color': '#FFFFFF'
        }
        
    }else
    {
      this.navbg = {}
      this.navclr = {
        'color': '#FFFFFF'
      }
    }

   
    
  }

}

