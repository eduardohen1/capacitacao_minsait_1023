package br.com.capacitacao.resource;

import br.com.capacitacao.model.Pessoa;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;

@Path("/pessoas")
@Consumes("application/json")
@Produces("application/json")
public class PessoaResource {

    @POST
    @Transactional
    public Response addPessoa(Pessoa pessoa){
        Pessoa newPessoa = new Pessoa();
        newPessoa.setNome(pessoa.getNome());
        newPessoa.setEndereco(pessoa.getEndereco());
        newPessoa.setEmail(pessoa.getEmail());
        newPessoa.setContato(pessoa.getContato());
        newPessoa.persist();
        return Response.ok(newPessoa).build();
    }

    @GET
    @Path("/{id}")
    @Transactional
    public Response getPessoa(@PathParam("id") Long id){
        Pessoa pessoa = Pessoa.findById(id);
        if(pessoa == null)
            return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(pessoa).build();
    }

    @PUT
    @Transactional
    public Response updatePessoa(@NotNull Pessoa pessoa){
        Pessoa upPessoa = Pessoa.findById(pessoa.getId());
        if(upPessoa == null)
            return Response.status(Response.Status.NOT_FOUND).build();
        upPessoa.setNome(pessoa.getNome());
        upPessoa.setEndereco(pessoa.getEndereco());
        upPessoa.setEmail(pessoa.getEmail());
        upPessoa.setContato(pessoa.getContato());
        upPessoa.persist();
        return Response.ok(upPessoa).build();
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deletePessoa(@PathParam("id") Long id){
        Pessoa pessoa = Pessoa.findById(id);
        if(pessoa == null)
            return Response.status(Response.Status.NOT_FOUND).build();
        pessoa.delete();
        return Response.ok().build();
    }

    @GET
    @Transactional
    public Response listAllPessoas(){
        return Response.ok(Pessoa.listAll()).build();
    }

}
