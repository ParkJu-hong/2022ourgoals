// import { dotenv } from 'dotenv';
let chaerin_secret = document.querySelector('.chaerin_secret');

let chaerin_password = '/숫자로 여기에 기입해주세요'
let user_password = ''
let temp = 0;

function isItOkayTo2021(){
  if(forInputPassword()){
    chaerin_secret.setAttribute('href', './2021 회고 : 2022 목표 .html')
  }else{
    console.log('fasle')
  }
}
// href="./2021 회고 : 2022 목표 .html"

function forInputPassword(){
  user_password = document.querySelector('.chaerinPasswordForInput').value;
  if(chaerin_password === user_password){
    console.log('패스워드가 맞습니다.');
    chaerin_secret.setAttribute('href', './2021 회고 : 2022 목표 .html')
    temp = 1;
    return true;
  }
  return false;
}

function whenPasswordOkay(){
  if(temp){
    return;
  }else{
    forPassword()
  }
}

function forPassword(){
  let _forPassword = document.querySelector('.forPassword');
  _forPassword.textContent = '비밀번호를 입력하시오';
  let input = document.createElement('input');
  input.classList.add('chaerinPasswordForInput')
  input.setAttribute('type', 'password');

  let button = document.createElement('button');
  button.textContent = '제출';
  button.setAttribute('onclick', `forInputPassword()`)

  _forPassword.append(input);
  _forPassword.append(button);
}

chaerin_secret.setAttribute('onclick', `whenPasswordOkay()`)
