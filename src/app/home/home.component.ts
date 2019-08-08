import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
		gutter: 20,
		resize: true,
		initLayout: true,
		fitWidth: true
  };

  masonryImages;
	limit = 6;
  dummyPictures = [
    {
        blogId: 1,
        date: "2017-03-18T11:43:56+00:00",
        title: "The Art Of Ice",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
        picture: "http://c1.staticflickr.com/9/8497/8379887392_65bdf6b754_b.jpg"
    },
    {
        blogId: 2,
        date: "2017-01-18T11:43:56+00:00",
        title: "My Happy Moments",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
        picture: "http://c1.staticflickr.com/5/4003/4580054400_5f9f59ab3f_z.jpg"
    },
    {
        blogId: 3,
        date: "2017-01-14T11:43:56+00:00",
        title: "Retro Carnival",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
        picture: "http://c1.staticflickr.com/8/7678/17356599305_3019275863_h.jpg"
    },
    {
        blogId: 4,
        date: "2017-03-18T11:56:56+00:00",
        title: "Boy And The Bubble",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
        picture: "http://c1.staticflickr.com/2/1540/24915161765_521581a8f1_h.jpg"
    },
    {
        blogId: 5,
        date: "2017-01-18T11:56:56+00:00",
        title: "The Colorful Balls",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
        picture: "http://c1.staticflickr.com/4/3721/8775090230_50dffdfbeb_h.jpg"
    },
    {
        blogId: 6,
        date: "2017-08-18T11:56:56+00:00",
        title: "Awesome Fireworks",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
        picture: "http://c1.staticflickr.com/6/5293/5447540038_fa5267c9f2_b.jpg"
    }
]

    ngOnInit() {
      this.masonryImages = this.dummyPictures.slice(0, this.limit);
    }

}
