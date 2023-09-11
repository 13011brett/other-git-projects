#include <iostream>
#include <random>
#include "randomWords.h"


int main() {

    std::string input;
    std::cout << "Put in your input to randomize." << std::endl;
    std::getline(std::cin, input);
    sayAndRandom(input);
    return 0;
}
