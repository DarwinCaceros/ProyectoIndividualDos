package com.example.ProyectoDos.Service;

import com.example.ProyectoDos.Model.Nota;
import com.example.ProyectoDos.Repository.NotaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaService {
    private final NotaRepository notaRepository;

    public NotaService(NotaRepository notaRepository){
        this.notaRepository = notaRepository;
    }
    
    public List<Nota> getAllNotes(){
        return notaRepository.findAll();
    }

    public Nota guardarNota(Nota nota){
            return notaRepository.save(nota);
    }

    public Nota obtenerNotaPorId(Long id){
        return notaRepository.findById(id).orElse(null);
    }

    public void eliminarNota(Long id){
        notaRepository.deleteById(id);
    }
}
