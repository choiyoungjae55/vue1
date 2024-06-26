package com.example.demo.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;



@RequestMapping("/api")
@RestController
public class CpdmController {
    @GetMapping("/cpdm")
   public ResponseEntity<String> cpdm(){
    return ResponseEntity.ok("CPDM DEPLOY TEST");
   }
    
}
