package com.hiresphere.backend.exception;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Set;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationException(
            MethodArgumentNotValidException ex) {

        String message = ex.getBindingResult()
                .getFieldErrors()
                .get(0)
                .getDefaultMessage();

        return ResponseEntity
                .badRequest()
                .body("{\"message\":\"" + message + "\"}");
    }

    @ExceptionHandler(TransactionSystemException.class)
    public ResponseEntity<?> handleTransactionException(
            TransactionSystemException ex) {

        Throwable cause = ex.getCause();

        while (cause != null) {

            if (cause instanceof ConstraintViolationException validationException) {

                Set<ConstraintViolation<?>> violations = validationException.getConstraintViolations();

                String message = violations
                        .iterator()
                        .next()
                        .getMessage();

                return ResponseEntity
                        .badRequest()
                        .body("{\"message\":\"" + message + "\"}");
            }

            cause = cause.getCause();
        }

        return ResponseEntity
                .badRequest()
                .body("{\"message\":\"Validation failed\"}");
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> handleConstraintViolation(
            ConstraintViolationException ex) {

        String message = ex.getConstraintViolations()
                .iterator()
                .next()
                .getMessage();

        return ResponseEntity
                .badRequest()
                .body("{\"message\":\"" + message + "\"}");
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(
            RuntimeException ex) {

        return ResponseEntity
                .badRequest()
                .body("{\"message\":\"" + ex.getMessage() + "\"}");
    }
}