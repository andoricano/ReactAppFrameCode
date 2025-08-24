## ReactNative를 위한 코드 모음

Navigation같은 것들은 처음에 높은 확률로 구성됩니다.
이러한 코드들을 종합하여 모아둔다면 다른 프로젝트를 시작할 때 편해집니다.

>CMD
### NPM
* APP 및 Project 이름 바꾸기
npx react-native-rename "NewAppName"
 -> 바꾼 후에 package.json, Android의 경우 Manifest, MainActivity(package, componentName) 꼭 맞춰주기


### Android 
* Android local.properties 생성 및 초기화
echo "sdk.dir=/Users/cektjtro/Library/Android/sdk" > android/local.properties

