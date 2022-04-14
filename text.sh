#!/bin/zsh

yellow="\e[1;33m"
red="\e[41m"
green="\e[42m"
end="\e[0m"

showMessage() {
  echo "$yellow############################## ->$end"
  echo -e "$1$2$end"
  echo "$yellow############################## -<$end"
}

showMessage $red "WRONG!!!"

showMessage $green "GOOOD!!"