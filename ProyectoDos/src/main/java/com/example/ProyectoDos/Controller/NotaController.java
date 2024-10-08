package com.example.ProyectoDos.Controller;

import com.example.ProyectoDos.Model.Nota;
import com.example.ProyectoDos.Service.NotaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/notas")
public class NotaController {

    private final NotaService notaService;
    
    public NotaController(NotaService notaService){
        this.notaService = notaService;    
    }

    @GetMapping
    public List<Nota> obtenerNota(){
        return notaService.getAllNotes();

    }

    @PostMapping
    public Nota crearNota(@RequestBody Nota nota){
        return notaService.guardarNota(nota);

    }

    @GetMapping("/{id}")
    public Nota actualizarNota(@PathVariable Long id, @RequestBody Nota nota){
        Nota notaExistente = notaService.obtenerNotaPorId(id);

        if(notaExistente !=null){
            notaExistente.setActivities(nota.getActivities());
            notaExistente.setParcialOne(nota.getParcialOne());
            notaExistente.setParcialTwo(nota.getParcialTwo());
            notaExistente.setFinalExam(nota.getFinalExam());

            return notaService.guardarNota(notaExistente);

        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void eliminarNota(@PathVariable Long id){
        notaService.eliminarNota(id);
    }
}
