#include <iostream>
#include <utility>
#include <vector>
#include <bits/stdc++.h>
#include <random>
#include "randomWords.h"

//
// Created by Brett on 9/11/2023.
//

RandomStrings::RandomStrings(std::string input) {

    setInput(std::move(input));
}

void RandomStrings::setInput(std::string input) {

    aInput = std::move(input);
}

int RandomStrings::genRandom(int maxNum){
    int randomNum = rand();
    if(!maxNum){
        std::cout << "Input the max random number you would like.";
        std::cin >> maxNum;
    }
    return (randomNum % maxNum);
}


void RandomStrings::sayAndRandom(){
    // Build a list of numbers based on the input length.
    std::vector<int> inputLength;
    for(int i=0; i <= (aInput.length() - 1); i++  ){
        inputLength.push_back(i);
    }
    // Utilize all "numbers" within the vector (all locations of the char* [])
    // Could always just map input to a dummy variable and grab random char...
    // ...locations within that string
    while(!inputLength.empty()){
        int randNum = RandomStrings::genRandom((int)aInput.length());
        bool t = std::find(inputLength.begin(), inputLength.end(), randNum) != inputLength.end();
        if(t) {
            std::cout << aInput[randNum];
            inputLength.erase(std::remove(inputLength.begin(), inputLength.end(), randNum), inputLength.end());
        }
    }
}






#include "randomWords.h"
