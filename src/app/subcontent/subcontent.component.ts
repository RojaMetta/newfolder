import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {
  newList : Array<any>;
  topheadlinesUs : Array<any>;
  headlinesUs : Array<any>;
  businessNews : Array<any>;
  businessList : Array<any>;
  mostrecentNews: Array<any>;
  mostrecentList: Array<any>;
  mostpopularNews: Array<any>;
  popularList: Array<any>;
  
  constructor(private newsService : NewsService) { 
  }

  ngOnInit(): void {
    {
      this.newsService.readNews().subscribe(response=>{
        if(response)
        {
          this.newList=response['articles'];
          //this.imageList = this.newList['urlToImage'].slice(0,3);
          console.log(response);
          console.log(this.newList);
        }
      },error=>{})

     
     this.newsService.topheadlinesUs().subscribe(response=>{
       if(response){
         this.topheadlinesUs = response['articles'];
         this.headlinesUs = this.topheadlinesUs.slice(0,10);
       }
     })
     this.newsService.mostrecent().subscribe(response=>{
       if(response){
         this.mostrecentNews = response['articles'];
         this.mostrecentList = this.mostrecentNews.slice(0,10);
       }
     })
     this.newsService.mostpopular().subscribe(response=>{
       if(response){
         this.mostpopularNews = response['articles'];
         this.popularList = this.mostpopularNews.slice(0,10);
       }
     })
 
     this.newsService.businessNews().subscribe(response=>{
       if(response){
         this.businessNews = response['articles'];
         this.businessList = this.businessNews.slice(0,2);
       }
     })
}

  }
}



