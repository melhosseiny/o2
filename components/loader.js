// code from https://css-tricks.com/single-element-loaders-going-3d/
export default function Loader() {
  return e("div", { className });
}

const className = emotion.css`
  --s: 150px; /* adjust this to control the size */
  --_d: calc(0.353*var(--s));/* 0.353 = sin(45deg)/2 */
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: flex;
  margin: calc(var(--s)/3) 0;
  align-self: center;

  &:before, &:after {
    content: "";
    flex: 1;
    clip-path: polygon(var(--_d) 0,100% 0,100% calc(100% - var(--_d)),calc(100% - var(--_d)) 100%,0 100%,0 var(--_d));
    background:
      conic-gradient(from -90deg at calc(100% - var(--_d)) var(--_d),
       #fff 135deg,#666 0 270deg,#aaa 0);
    animation: load 1.5s infinite cubic-bezier(0,.5,.5,1.8) alternate;
  }
  &:before {
    margin-right: calc(var(--_d)/-2 - 1px);
  }
  &:after {
    margin-left: calc(var(--_d)/-2 - 1px);
    animation-delay: -.75s
  }

  @keyframes load{
    0%,40%   {transform:translateY(calc(var(--s)/-4))}
    60%,100% {transform:translateY(calc(var(--s)/4))}
  }
`
