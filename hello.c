#include <stdio.h>

void main(){
    char a[20];
    printf("What's your name? ");
    scanf("%20s", a);
    printf("hello, %s\n", a);
}