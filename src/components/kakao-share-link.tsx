/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useCallback, useEffect } from 'react'

import { kakaoIcon } from '../assets/images'
import a11y from '../styles/a11y'
import ShareLink from './share-link'

// TODO: Window 타입 선언부를 개별 파일로 분리
declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  url: string;
}

const KAKAO_SCRIPT_ID = 'kakaoSDK'

const KakaoShareLink = ({ url, ...otherProps }: Props) => {
  const handleClick = useCallback((): void => {
    window.Kakao.Link.sendScrap({ requestUrl: url })
  }, [url])

  useEffect(() => {
    if (document.getElementById(KAKAO_SCRIPT_ID)) {
      return
    }

    const script = document.createElement('script')

    script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
    script.id = KAKAO_SCRIPT_ID
    script.async = true
    script.onload = (): void => {
      window.Kakao.init(process.env.GATSBY_KAKAO_APP_KEY)
    }

    document.body.append(script)
  }, [])

  return (
    <ShareLink css={s.root} as="button" type="button" onClick={handleClick} {...otherProps}>
      <span css={a11y}>카카오톡으로 공유하기</span>
    </ShareLink>
  )
}

const s = {
  root: css`
    background-image: url(${kakaoIcon});
  `,
}

export default KakaoShareLink
