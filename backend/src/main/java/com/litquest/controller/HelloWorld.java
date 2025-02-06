package com.litquest.controller;

import com.litquest.livro.Livro;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping
    public ResponseEntity hello(){
        return ResponseEntity.ok("Funcionou");
    }

}
