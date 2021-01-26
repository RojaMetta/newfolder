import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-subcontent',
  templateUrl: './subcontent.component.html',
  styleUrls: ['./subcontent.component.css']
})
export class SubcontentComponent implements OnInit {
  slider : Array<any>
  sliderurl : any
  slidertitle : any
  newList : Array<any>;
  imageList : Array<any>;
  bbcNews : Array<any>;
  bbcList : Array<any>;
  topheadlinesUs : Array<any>;
  headlinesUs : Array<any>;
  
  entertainmentNews : Array<any>;
  entertainmentList : Array<any>;
  healthNews : Array<any>;
  healthList : Array<any>;
  
  mostrecentNews: Array<any>;
  mostrecentList: Array<any>;
  mostpopularNews: Array<any>;
  popularList: Array<any>;
  constructor(private newsService : NewsService)
  { 
    this.newsService.readNews().subscribe(response=>{
      this.slider= response['articles'];
      this.sliderurl= this.slider[0]['urlToImage'];
      this.slidertitle = this.slider[0]['title'];
    })

  }
  ngOnInit()
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

     this.newsService.bbcNews().subscribe(response=>{
       if(response){
         this.bbcNews=response['articles'];
          this.bbcList = this.bbcNews.slice(0,4);
       }
     })
    
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

    
    this.newsService.entertainmentNews().subscribe(response=>{
      if(response){
        this.entertainmentNews = response['articles'];
        this.entertainmentList = this.entertainmentNews;
      }
    })
    this.newsService.healthNews().subscribe(response=>{
      if(response){
        this.healthNews = response['articles'];
        this.healthList = this.healthNews;
      }
    })
    

  }
}



