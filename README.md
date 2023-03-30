# Typescript

Typescript learning content

-> npm init -y
: package.json 파일 만들어서 프로젝트 시작

-> npm i -D parcel typescript
: devDependencies

아래와 같이 package.json 파일 수정
{
"name": "typescript",
"version": "1.0.0",
"description": "Typescript learning content",
"scripts": {
"dev": "parcel ./index.html",
"build": "parcel build ./index.html"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"parcel": "^2.8.3",
"typescript": "^5.0.2"
}
}

-> npm sun dev
: parcel로 개발서버를 오픈한다.
: Server running at http://localhost:1234
: dist라는 폴더가 생긴다. javascript로 변환된 것을 볼 수 있다.
