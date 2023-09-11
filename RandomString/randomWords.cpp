#include <iostream>
#include <vector>
#include <bits/stdc++.h>
#include <random>
#include "randomWords.h"

//
// Created by Brett on 9/11/2023.
//
int genRandom(int maxNum){
    int randomNum = rand();
    if(!maxNum){
        std::cout << "Input the max random number you would like.";
        std::cin >> maxNum;
    }
    return (randomNum % maxNum);
}

void sayAndRandom(std::string &input){

    std::vector<int> inputLength;
    for(int i=0; i <= (input.length() - 1); i++  ){
        inputLength.push_back(i);
    }
    while(!inputLength.empty()){
        int randNum = genRandom((int)input.length());
        bool t = std::find(inputLength.begin(), inputLength.end(), randNum) != inputLength.end();
        if(t) {
            std::cout << input[randNum];
            inputLength.erase(std::remove(inputLength.begin(), inputLength.end(), randNum), inputLength.end());
        }
    }
}
#include "randomWords.h"
