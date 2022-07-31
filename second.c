#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void){
    string s = get_string("Enter text: ");
    printf("You have entered: \"%s\"\n", s);
    printf("The string length is %li\n", strlen(s));
}