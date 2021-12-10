# Typescrpit Framer Motion

### framer motion 사용시 문제점

- CRA v4로 생성된 템플릿에서는 framer motion 라이브러리와 모듈호환 되지 않는다.
- 해결 방법 : craco를 통해 CRA설정을 override하여 해결하였다.

- 애니메이트를 사용할 경우 아래와 같이 html태그에 motion을 붙여준다.

```html
<motion.div></motion.div>
```

---

## Framer motion을 활용한 넷플릭스 clone

- 넷플릭스 클론을 애니메이션 라이브러리 사용하지 않고 구현한적이 있었다. 슬라이드와 호버시 매끄럽지 않은 애니메이션 효과를 framer motion을 사용하여 매끄럽게 보완하였다.
- home, movie, tv ,search 라우터와 Detail , 비슷한 콘텐츠를 보여주는 similar 컴포넌트를 사용하였다.

### Code Challenges

- [x] Home
- [x] Movie Detail Similar Contents
- [x] Tv Detail Similar Contents
- [x] Search Detail Similar Contents

### Preview

---

[2022 Komflix](https://leekyungho112.github.io/ts-animation)
