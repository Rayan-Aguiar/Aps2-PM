import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from '../usuario/autenticacao.service';
import { ToastController } from '@ionic/angular';
import { MazeService } from '../service/maze.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  lista_shows = new Array<any>();
  
  public mensagem: string = "";
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  
  constructor(
    public auth:AutenticacaoService,
    public toastController:ToastController,
    public router:Router,
    private mazeService: MazeService,
    private loadinCtrl: LoadingController
    ) {}

    async efeitoLoading(){
      const loading = await this.loadinCtrl.create({
        message: 'Carregando ...', 
        duration: 1000,
        spinner:'lines-sharp'
      });
  
      loading.present();
    }

    carregarShows() {
      this.mazeService.getShows().subscribe(
        (response: any) => {
          this.lista_shows = response;
          console.log(this.lista_shows);
        },
        (error: any) => {
          console.log('Erro ao obter shows:', error);
        }
      );
    }
    


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.carregarShows();
  }

  ionViewDidEnter(){
    this.carregarShows();
    this.efeitoLoading();
  }

  efeitoRefresh(event:any){
    setTimeout(() => {
      this.carregarShows();
      event.target.complete();
    }, 1000);
  }

  efeitoScrollInfinito(ev:any){
    setTimeout(() => {

    (ev as InfiniteScrollCustomEvent).target.complete();
    this.carregarShows();

    }, 2500);

  }

  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }
}
