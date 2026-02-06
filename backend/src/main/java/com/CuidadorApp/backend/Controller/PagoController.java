package com.CuidadorApp.backend.Controller;

import com.CuidadorApp.backend.Model.Pago;
import com.CuidadorApp.backend.service.PagoService; // Importamos el servicio
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pagos")
public class PagoController {

    // Usaremos el Service en lugar del Repository directamente
    private final PagoService pagoService;

    public PagoController(PagoService pagoService) {
        this.pagoService = pagoService;
    }

    @GetMapping
    public List<Pago> getAll() {
        // Aquí podrías agregar un método en el service para obtener todos
        // o dejarlo así si solo es para consulta rápida
        return pagoService.obtenerTodosLosPagos();
    }

    @PostMapping
    public Pago create(@RequestBody Pago pago) {
        // ¡Aquí está la clave! Usamos el método que creamos en el Service
        return pagoService.crearIntentoDePago(pago);
    }
}
