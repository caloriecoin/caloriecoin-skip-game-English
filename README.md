# Caloriecoin

IOT Jump Rope P2E BlockChain Game

## Display

- Game (MinningMode and BattleMode)
- Record
- Quest
- My info

## Initialize

```sh
$ npm install
```

### iOS 주의 사항

iOS 실행을 위해서는 `caloriecoin-skip-game-English\ios\icomon\ICDeviceManager.framework` 경로에 있는 `ICDeviceManager.zip` 파일을 압축 해제 한 후 `$ npm install` 명령어를 입력하세요.

## How to Run

### Android test build

```sh
$ react-native run-android
```

### Android release build

```sh
$ npx react-native run-android --variant=release
```

### APK

```sh
$ yarn generate-apk  // window에서는 open이 없으니 실행 안됨을 주의 !
```

### iOS test build

```sh
$ react-native run-ios
```

### iOS release build

iOS 릴리즈 빌드를 위해서는 맥 어플리케이션인 `Xcode`를 실행해서 릴리즈 해야합니다.

## Sound files

path: android/app/src/main/res/raw
extension: mp3
