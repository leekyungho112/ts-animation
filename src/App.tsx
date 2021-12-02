import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 200vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {};

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [360, -360]);
  const background = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgba(0, 238, 178, 0.929), rgb(67, 125, 231))',
      'linear-gradient(135deg, rgba(190, 0, 238, 0.929), rgb(221, 0, 238))',
      'linear-gradient(135deg, rgba(190, 133, 28, 0.929), rgb(236, 99, 19))',
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 3, 1]);

  return (
    <Wrapper style={{ background }}>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
