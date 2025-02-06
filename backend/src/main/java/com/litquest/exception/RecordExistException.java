package com.litquest.exception;

public class RecordExistException extends RuntimeException{
    public RecordExistException(String message) {
        super(message);
    }
}
