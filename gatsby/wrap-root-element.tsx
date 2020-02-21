import React from 'react'

import Wrapper from '../src/components/wrapper'

const wrapRootElement = ({ element }: { element: React.ReactNode }): React.ReactNode => (
  <Wrapper>
    {element}
  </Wrapper>
)

export default wrapRootElement;
