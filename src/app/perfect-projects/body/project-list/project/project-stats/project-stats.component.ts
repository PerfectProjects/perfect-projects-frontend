import {Component, Input, OnInit} from '@angular/core';
import {ScoresApiCallerService} from "../../../../../api-caller/scores-api-caller.service";
import {AuthService} from "../../../../../services/auth.service";
import {ToastService} from "../../../../../services/toast.service";
import {ToastState} from "../../../../../enums/toast-state";

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.css']
})
export class ProjectStatsComponent implements OnInit {

  @Input() projectId: string = "";

  score?: number;
  scored?: boolean;

  constructor(private scoresApiCaller: ScoresApiCallerService,
              private auth: AuthService,
              private toast: ToastService) {
  }

  ngOnInit(): void {
      this.scoresApiCaller.getScoresCount(this.projectId).subscribe((response) => {
        this.score = response.scores;
      });
      const username = this.auth.getUsername();
      if (username !== "") {
        this.scoresApiCaller.getScoredStatus(this.projectId).subscribe((response) => {
          this.scored = response.scored;
        });
      } else { // Assuming user is no signed in
        this.scored = false;
      }
  }

  public addScore(): void {
      const username = this.auth.getUsername();
      if (username !== "") {
        this.scoresApiCaller.addScore(this.projectId).subscribe((response) => {
          console.log(response);
          if (response.success) {
            if (this.score !== undefined) {
              console.log("increasing");
              this.score++;
              this.scored = true;
            }
          }
        });
      } else {
        this.toast.showMessage("Sign in to score a project!", ToastState.INFO);
      }
  }

  public deleteScore(): void {
    this.scoresApiCaller.deleteScore(this.projectId).subscribe((response) => {
      console.log(response);
      if (response.success) {
        if (this.score !== undefined) {
          console.log("decreasing");
          this.score--;
          this.scored = false;
        }
      }
    });
  }
}
