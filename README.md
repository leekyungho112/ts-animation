# Typescrpit Framer Motion

### framer motion 사용시 문제점

- CRA v4로 생성된 템플릿에서는 framer motion 라이브러리와 모듈호환 되지 않는다.
- 해결 방법 : craco를 통해 CRA설정을 override하여 해결하였다.

- 애니메이트를 사용할 경우 아래와 같이 html태그에 motion을 붙여준다.

```html
<motion.div></motion.div>
```
