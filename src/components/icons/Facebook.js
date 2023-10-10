import * as React from 'react'

function SvgFacebook(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        d="M2.637 18h5.87v-6.398H6.399v-2.11h2.11V6.855a2.64 2.64 0 012.637-2.636h2.636v2.11h-2.11c-.581 0-1.054.472-1.054 1.054v2.11h3.07l-.351 2.109h-2.719V18h4.746A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582h-3.691v-4.289h2.555l.703-4.219h-3.258V7.383h3.164V3.164h-3.691a3.696 3.696 0 00-3.692 3.691v1.582h-2.11v4.22h2.11v4.288H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgFacebook