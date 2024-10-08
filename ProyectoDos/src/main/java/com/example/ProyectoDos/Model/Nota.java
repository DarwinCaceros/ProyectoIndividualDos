package com.example.ProyectoDos.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Entity
public class Nota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreEstudiante;

    @Max(35)
    @Min(0)
    private int activities;

    @Max(15)
    @Min(0)
    private int parcialOne;

    @Max(15)
    @Min(0)
    private int parcialTwo;

    @Max(15)
    @Min(0)
    private int finalExam;

    public int getTotal(){
        return activities + parcialOne + parcialTwo + finalExam;

    }


    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNombreEstudiante(){
        return nombreEstudiante;
    }

    public void setNombreEstudiante(String nombreEstudiante){
        this.nombreEstudiante = nombreEstudiante;
    }

    public int getActivities(){
        return activities;
    }

    public void setActivities(int activities){
        this.activities = activities;
    }

    public int getParcialOne(){
        return parcialOne;
    }

    public void setParcialOne(int parcialOne){
        this.parcialOne = parcialOne;
    }

    public int getParcialTwo(){
        return parcialTwo;
    }

    public void setParcialTwo(int parcialTwo){
        this.parcialTwo = parcialTwo;
    }

    public int getFinalExam(){
        return finalExam;
    }

    public void setFinalExam(int finalExam){
        this.finalExam = finalExam;
    }


}
