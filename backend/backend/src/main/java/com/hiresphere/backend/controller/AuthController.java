package com.hiresphere.backend.controller;

import com.hiresphere.backend.dto.LoginRequestDTO;
import com.hiresphere.backend.dto.LoginResponseDTO;
import com.hiresphere.backend.entity.User;
import com.hiresphere.backend.service.AuthService;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(
            @Valid @RequestBody LoginRequestDTO request) {

        User user = authService.login(
                request.getEmail(),
                request.getPassword());

        LoginResponseDTO response = new LoginResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                "Login successful");

        return ResponseEntity.ok(response);
    }
}