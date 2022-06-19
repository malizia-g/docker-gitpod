
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalsService } from './animals.service';
import { Animal, VettAnimal } from './animals.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = new Array<Animal>();
  constructor(private animalService: AnimalsService) {
    this.animalService.getAnimals().subscribe(
      (data: VettAnimal) => { this.data = data['animals'] }
    )
  }

  //Per la reactive form creo due proprietà che conterranno i valori delle caselle di testo
  form = new FormGroup({
    "name": new FormControl(),
    "type": new FormControl(),
  });

  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['type'].value);
    let a : Animal = {
      "id": '0',
      "name":this.form.controls['name'].value,
      "type": this.form.controls['type'].value
    };

    //Quando ricevo una risposta dal server aggiorno l'id dell'animale e lo invio al vettore data
    this.animalService.sendNewAnimal(a).subscribe(
      (data)=>{
        console.log(data);
        a.id = data['id'];
        this.data.push(a);
      }
    )
  }
}
