// css from https://css-tricks.com/five-methods-for-five-star-ratings/
export default function Rating({ rating }) {
  return e("div", { className , style: { "--rating": rating } }, rating);
}

const className = emotion.css`
  --star-size: 13px;
  --star-color: rgba(0,0,0,0.1);
  --star-background: #fcbe03;
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: system-ui; // make sure ★ appears correctly
  line-height: 1;
  color: #53535f;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
