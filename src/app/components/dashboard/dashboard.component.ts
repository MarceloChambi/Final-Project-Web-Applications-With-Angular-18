import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChuckNorrisService } from '../../services/chuck-norris.service';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { IChuckJoke } from '../../models/chuck-joke.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [CardModule, ButtonModule, ToastModule, ProgressSpinnerModule, CommonModule],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  public isLoading: boolean = false;
  public jokeFound: boolean = false;
  public joke: IChuckJoke | null = null;

  constructor(
    private chuckNorrisService : ChuckNorrisService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getJoke();
  }
  public getJoke(): void {
    this.isLoading = true;

    this.chuckNorrisService.getJoke().subscribe({
      next: (res) => {
        this.joke = res;
        this.jokeFound = true;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Found joke!! 😃' });
      },
      error: (err) => {
        this.jokeFound = false;
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch joke 😞' });
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
