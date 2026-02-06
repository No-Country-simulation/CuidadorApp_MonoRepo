package com.CuidadorApp.backend.service;

import com.CuidadorApp.backend.Model.Pago;
import com.CuidadorApp.backend.Repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PagoService {

    @Autowired
    private PagoRepository pagoRepository;

    // --- NUEVO MÉTODO PARA EL CONTROLLER ---
    public List<Pago> obtenerTodosLosPagos() {
        return pagoRepository.findAll();
    }

    // 1. Método para registrar el intento de pago en tu DB
    public Pago crearIntentoDePago(Pago pago) {
        pago.setFechaPago(LocalDate.now());
        pago.setConfirmado(false); // Empieza como falso hasta que la pasarela confirme
        return pagoRepository.save(pago);
    }

    // 2. Aquí iría la lógica de Mercado Pago o Stripe
    public String procesarConPasarela(Pago pago) {
        // Aquí llamarías al SDK de la pasarela que elijas
        return "https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=123";
    }

    // 3. Método para actualizar cuando el pago sea exitoso
    public void confirmarPago(Long id, String externalId) {
        pagoRepository.findById(id).ifPresent(pago -> {
            pago.setConfirmado(true);
            // Si agregaste el campo externalReference en el Modelo, descomenta la línea de abajo:
            // pago.setExternalReference(externalId);
            pagoRepository.save(pago);
        });
    }
}