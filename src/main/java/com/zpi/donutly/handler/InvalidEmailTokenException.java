package com.zpi.donutly.handler;

public class InvalidEmailTokenException extends Exception{
    public InvalidEmailTokenException() {
        super("Provided e-mail token is invalid.");
    }
}
