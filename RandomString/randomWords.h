//
// Created by Brett on 9/11/2023.
//

#ifndef UNTITLED_RANDOMWORDS_H
#define UNTITLED_RANDOMWORDS_H



class RandomStrings{
private:
    std::string aInput;
    static int genRandom(int);
public:
    explicit RandomStrings(std::string input);

    void setInput(std::string input);

    void sayAndRandom();
};




#endif //UNTITLED_RANDOMWORDS_H
