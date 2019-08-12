import { Component } from "@angular/core";

@Component({
  selector: "app-comments",
  template: `
    <input placeholder='Add comment'
      #newComment
      (keyup.enter)="addComment(newComment.value)"
      (blur)="addComment(newComment.value); newComment.value = ''"
    />

    <button (click)="addComment(newComment.value)">Add</button>

    <ul [ngStyle]="{'padding-left': '0px'}">
      <li
        [ngStyle]="{
          'font-size': '20px',
          'list-style': 'none',
          'padding': '30px 0 30px 0'
        }"
        *ngFor="let comment of comments"
      >
        {{ comment }}
      </li>
    </ul>
  `
})
export class CommentsComponent {
  comments = [
    "Write Now was able to give my company the content it needed to drive sales!",
    "5-star rating!!!",
    "Couldn't have asked for a better experience."
  ];
  addComment(newComment: string) {
    if (newComment) {
      this.comments.push(newComment);
    }
  }
}
