package com.CuidadorApp.backend.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double monto;
    private LocalDate fechaPago;
    private String metodo;

    // Campos para la gestión de la pasarela
    private String estado;
    private String externalReference;

    // ESTA ES LA VARIABLE QUE TE FALTABA
    private boolean confirmado;

    @ManyToOne
    private Cuidador cuidador;

    @ManyToOne
    private Paciente paciente;


    public void setConfirmado(boolean confirmado) {
        this.confirmado = confirmado;
    }


    public boolean isConfirmado() {
        return confirmado;
    }
}
