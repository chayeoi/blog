/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core'
import { useCallback, useEffect } from 'react'

import { kakaoIcon } from '../assets/images'
import { Theme } from '../models/Theme'
import a11y from '../styles/a11y'

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

const KakaoShareLink: React.FC<Props> = ({ url, ...otherProps }) => {
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
    <button css={s.root} type="button" onClick={handleClick} {...otherProps}>
      <span css={a11y}>카카오톡으로 공유하기</span>
    </button>
  )
}

const s = {
  root: (theme: Theme): SerializedStyles => css`
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: url(${kakaoIcon}) center / cover no-repeat;
    cursor: pointer;
    outline: none;
    transition: opacity 0.2s, box-shadow 0.2s, transform 0.2s;
    :hover, :focus {
      opacity: 0.85;
      box-shadow: 0 4px 8px 0 ${theme.palette.hexToRgb(theme.palette.primary.dark, 0.1)};
      transform: translateY(-4px);
    }
    ${theme.breakpoints.media.sm} {
      width: 40px;
      height: 40px;
    }
  `,
}

export default KakaoShareLink
