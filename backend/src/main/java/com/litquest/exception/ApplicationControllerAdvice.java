package com.litquest.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(RecordExistException.class)
    public ResponseEntity handleExistException(RecordExistException ex){
        ErrorResponse er = new ErrorResponse(ex.getMessage(), HttpStatus.CONFLICT.value());
        return new ResponseEntity<>(er, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(IllegalRecordException.class)
    public ResponseEntity handleIllegalException(IllegalRecordException ex){
        ErrorResponse er = new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(er, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RecordNotFoundException.class)
    private ResponseEntity handleException(RecordNotFoundException ex){
        ErrorResponse er = new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(er, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(RecordNotUpdateException.class)
    public ResponseEntity<ErrorResponse> handleRecordNotUpdatedException(RecordNotUpdateException ex) {
        ErrorResponse er = new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value());
        return new ResponseEntity<>(er, HttpStatus.BAD_REQUEST);
    }
}
