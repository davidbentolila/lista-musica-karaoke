import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  
  constructor(private _firestorer: AngularFirestore) { }

  incluirMusica(musica : any) : Promise<any>{
    return this._firestorer.collection('musicas').add(musica);
  }

  async limparMusicas() {
    let qry = await this._firestorer.collection('musicas').ref.get()

    qry.forEach(doc => {
      doc.ref.delete();
    });
  }

  getMusicas(): Observable<any> {
    return this._firestorer.collection('musicas', ref => ref.orderBy('id', 'asc')).snapshotChanges();
  }
}
