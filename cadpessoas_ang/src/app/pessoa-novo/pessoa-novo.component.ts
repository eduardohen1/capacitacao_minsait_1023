import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-novo',
  templateUrl: './pessoa-novo.component.html',
  styleUrls: ['./pessoa-novo.component.css']
})
export class PessoaNovoComponent implements OnInit {

  ngOnInit(): void {

  }

  pessoa = {
    nome: '',
    endereco: '',
    email: '',
    contato: ''
  };

  apiURL = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    this.http.post(this.apiURL, this.pessoa).subscribe(
      response => {
        this.router.navigate(['/pessoa']);
      },
      error => console.log(error)
    );
  }

  voltar(): void {
    this.router.navigate(['/pessoa']);
  }
}
