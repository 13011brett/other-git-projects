cmake_minimum_required(VERSION 3.26)
project(RandomString)

set(CMAKE_CXX_STANDARD 17)

add_executable(RandomString main.cpp
        randomWords.cpp
        randomWords.h
)
