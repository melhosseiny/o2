import Offset from "/components/offset.js";
import Rating from "/components/rating.js";

const pr = new Intl.PluralRules('en-US');

const country = (n) => {
  const suffixes = new Map([
    ['one',   'country'],
    ['other', 'countries'],
  ]);
  return `${suffixes.get(pr.select(n))}`;
};

const day = (n) => {
  const suffixes = new Map([
    ['one',   'day'],
    ['other', 'days'],
  ]);
  return `${suffixes.get(pr.select(n))}`;
};

export default function Trip({ title, image, countries, days, offset, rating }) {
  return e("article", { className },
    e("header", null,
      e("h1", null, title),
      e("h2", null, `${countries} ${country(countries)}, ${days} ${day(days)}`),
      e("h3", null,
        e(Offset, { offset }),
        e("span", null, "emissions offset")
      ),
    ),
    e("picture", null,
      e("source", { srcSet: image }),
      e("img", { src: image, loading: "lazy", alt: `picture of ${title}` })
    ),
    e("footer", null,
      e(Rating, { rating })
    )
  );
}

const className = emotion.css`
  overflow: hidden;
  position: relative;
  transition: transform 0.05s ease, box-shadow 0.05s ease;
  background-color: #fff;

  &:hover {
	  transform: translate3d(3px, -3px, 0px);
  	box-shadow: var(--box-shadow-article);
  }

  header, footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    max-width: 90%;
  }

  header {
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;

    h1, h2, h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h2, h3 {
      font-size: 14px;
      font-weight: normal;
    }

    h2 {
      margin-top: 4px;
      color: rgba(255, 255, 255, 0.9);
    }

    h3 {
      display: inline-flex;
      gap: 4px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 2px;
      margin-top: 12px;
      padding: 4px;
      text-transform: none;
      font-variant-caps: unset;

      span + span {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
  }

  footer {
    display: flex;
    bottom: 0;
    padding: 4px;
    border-radius: 2px 2px 0 0;
    background-color: white;
  }
`
