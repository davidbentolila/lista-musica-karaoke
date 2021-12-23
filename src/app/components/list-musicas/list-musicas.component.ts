import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MusicasService } from 'src/app/services/musicas.service';

@Component({
  selector: 'app-list-musicas',
  templateUrl: './list-musicas.component.html',
  styleUrls: ['./list-musicas.component.css']
})
export class ListMusicasComponent implements OnInit {
  musicas : any = []
  constructor(private _musicaService: MusicasService, private _firebase : AngularFirestore) { 
  }

  ngOnInit(): void {
    this.getMusicas();
  }

  getMusicas(){
    this._musicaService.getMusicas().subscribe(data =>{
      this.musicas = []
      data.forEach((element:any) => {
        this.musicas.push({
          id : element.payload.doc.data().id,
          nome : element.payload.doc.data().nome,
          artista : element.payload.doc.data().artista,
          inicio : element.payload.doc.data().inicio
        })
        console.log(element.payload.doc.data())  
      });
      
    })
  }
}
