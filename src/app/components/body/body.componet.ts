import { Component } from "@angular/core";

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class bodyComponent{
    frase: any = {
        mensaje:'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    }
    mostrar: boolean = true;
    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}
