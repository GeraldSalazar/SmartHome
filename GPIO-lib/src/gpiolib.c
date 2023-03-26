// program named gpiolib.c
#include <stdio.h>  // IO handling
#include <errno.h>  // Error code handling
#include <stdlib.h> // for strtoi
#include <pigpio.h> // Includes the library file

// Entry to main program wrapper
int main(int argc, char *argv[])
{
    int err = 0;
    switch (argc)
    {
    case 3:
    {
        unsigned pin = (unsigned)atoi(argv[2]);
        if (!strcmp(argv[1],"-r"))
        {
            printf("%d\n", gpioRead(pin));
        }
        else
        {
            err = EPERM;
            fprintf(stderr, "Error reading arguments: %s\n", strerror(err));
        }
        break;
    }
    case 4:
    {
        unsigned pin = (unsigned)atoi(argv[2]);
        unsigned level = (unsigned)atoi(argv[3]);
        if (!strcmp(argv[1],"-w"))
        {
            printf("%d\n", gpioWrite(pin, level));
        }
        else
        {
            err = EPERM;
            fprintf(stderr, "Error reading arguments: %s\n", strerror(err));
        }
        break;
    }
    default:
    {
        err = E2BIG;
        fprintf(stderr, "Error reading arguments: %s\n", strerror(err));
        break;
    }
    }
    return err;
}