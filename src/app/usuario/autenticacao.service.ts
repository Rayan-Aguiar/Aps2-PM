import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  loginNoFirebase(email:string, senha:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email, senha);
  }
  insereNoFirebase(email:string, senha:string){
    return this.ngFireAuth.createUserWithEmailAndPassword(email, senha);
  }

  sair () {
    return this.ngFireAuth.signOut()
    .then( () => {

    }).catch (() => {
      console.log("erro");
    });
  }

  constructor(public ngFireAuth:AngularFireAuth) { }
}
