# nextjs14-starter-fsdAA

### fsd 아키텍처 구조로 만들 예정

#### 기술스택 

- **nextJs** 14.2.0
- react
- typeScript
- tailwind css
- eslint
- prettier
- huscky
- lint-staged

```shell
npm create next-app@14.2.0 nextjs14-starter
```

---

#### Husky + lint-staged 설정 (커밋 전에 자동 검사 및 포맷)

```shell
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

---

####  eslint-plugin-import + simple-import-sort로 import 정렬

``shell
npm install --save-dev eslint-plugin-import eslint-plugin-simple-import-sort
```