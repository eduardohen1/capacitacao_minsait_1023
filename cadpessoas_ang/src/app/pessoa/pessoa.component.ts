import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: any[]=[];

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.http.get('http://localhost:8080/pessoas').subscribe(
      data => {
        this.pessoas = data as any[];
      }
    );
  }

  editarPessoa(id: number): void {
    //navegar para a página de edição de pessoa:
    this.router.navigate([`/pessoa/editar/${id}`]);
  }

  excluirPessoa(id: number): void {
    if(!confirm('Deseja realmente excluir esta pessoa?'))
      return;
    this.http.delete(`http://localhost:8080/pessoas/${id}`).subscribe(() => {
      this.pessoas = this.pessoas.filter(pessoa => pessoa.id !== id);
    });
  }

  novaPessoa(): void {
    this.router.navigate([`/pessoa/novo`]);
  }

}
