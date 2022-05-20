# Next trend.gollala.com

## Contributor

- Charlie
- DJ
- Mason

## Tech Requirement (Tech Stack)

- Create-next-app
- Next.js
- TypeScript
- ESLint
- Jest
- CodeceptJs
- Playwright

## Script

```
$ npm run dev
```

```
$ npm run build
$ npm run deploy
```

## 린트 실행하기

```bash
npm run lint
```

## 테스트 실행하기

### 전체 테스트 실행하기

```bash
npm test
```

### 유닛 테스트 실행하기

```bash
npm run test:unit

# 파일이 저장됐을 때 자동으로 테스트 실행하기
npm run test:unit -- --watch-all

# 커버리지 출력하기
npm run coverage
```

### e2e 테스트 실행하기

서버가 실행중인 상태에서 테스트를 실행해야 합니다.

```bash
npm run test:e2e
```
