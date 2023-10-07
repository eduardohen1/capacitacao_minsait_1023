import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent implements OnInit {
  pessoa = {
    id: 0,
    nome: '',
    endereco: '',
    email: '',
    contato: ''
  };
  apiUrl = 'http://localhost:8080/pessoas';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getPessoa();
  }

  getPessoa():void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`${this.apiUrl}/${id}`).subscribe(
      data => {
        this.pessoa = data as any;
      }, error => {
        console.log(error);
      }
    );
  }

  onSubmit(): void {
    this.http.put(`${this.apiUrl}`, this.pessoa).subscribe(
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
