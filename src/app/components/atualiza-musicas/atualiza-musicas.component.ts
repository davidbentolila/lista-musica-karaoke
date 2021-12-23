import { Component, OnInit } from '@angular/core';
import { MusicasService } from 'src/app/services/musicas.service';

@Component({
  selector: 'app-atualiza-musicas',
  templateUrl: './atualiza-musicas.component.html',
  styleUrls: ['./atualiza-musicas.component.css']
})
export class AtualizaMusicasComponent implements OnInit {
  
  fileName = '';
  file : File;

  constructor(private _musicasService : MusicasService) {
   }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

    this.file = event.target.files[0];

    if (this.file) {

        this.fileName = this.file.name;
        console.log(this.fileName)
        const formData = new FormData();

        formData.append("thumbnail", this.file);

//        const upload$ = this.http.post("/api/thumbnail-upload", formData);

//        upload$.subscribe();
    }
  }

  uploadFile() {
    if (this.file == undefined){
      return;
    }
    
    //this.limparMusica();

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      //console.log(fileReader.result)
      let rows = (fileReader.result as string).replace('\r','').split('\n');

      let musica: any = {
        id : 0,
        nome : '',
        artista : '',
        inicio : ''
      };

      rows.forEach(row => {
        //console.log(row)
        if (row.startsWith('arquivo')) {
          if (musica.id > 0){
            this.salvarMusica(musica)
            musica.id = 0;
          }
          
          musica.id = Number(row.replace('arquivo=','').replace('.mp4',''));
          //console.log('id encontrado ' + id)
        }
        else if (row.startsWith('artista')) {
          musica.artista = row.replace('artista=','');
        }
        else if (row.startsWith('musica')) {
          musica.nome = row.replace('musica=','');
        }
        else if (row.startsWith('inicio')) {
          musica.inicio = row.replace('inicio=','');
        }
      });
    }
    fileReader.readAsText(this.file, 'utf-8');
  }

  salvarMusica(musica: any){
    this._musicasService.incluirMusica(musica).then(() =>{
      //console.log('Música salva com sucesso: ' + musica)
    }).catch(error => {
      console.log(error)
    });
  }

  limparMusica(){
    this._musicasService.limparMusicas();
  }
}
