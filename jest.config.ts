export default {
  // preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // 컴파일 옵션
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      // vite이기에 app.json을 사용 @ 같은 별칭을 사용중이라면 추가하자.
      {
        tsconfig: './tsconfig.app.json',
      },
    ],
  },

  moduleNameMapper: {
    // 별칭에 대한 매핑이다.
    '^@/(.*)$': '<rootDir>/src/$1',

    // css 모듈을 mock으로 대체한다.
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',

    // 이미지파일을 대체한다.
    // '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
  },
};
