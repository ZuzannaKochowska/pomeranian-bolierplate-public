import React from 'react';
import './styles.css';

// const Slider = () => {};

export const SelectorAndCascade = () => {
  return (
    <div className="blogposts">
      <span className="date">30-11-2022</span>
      <h1>Why are we so nostalgic for the 1990s?</h1>
      <div className="text">
        Pop culture used to define a generation, but it seems the cultural,
        music and fashion trends of the 1990s have been recycled, and what
        Generation X considered its rite of passage into adulthood, is being
        discovered and claimed by fledgling grown-ups as their own. <br />
        <br />
        There's been the resurgence of vinyl as the trend-setters' choice of
        music consumption rather than the ease of a digital download, and now
        the hipsters have discovered the nostalgic sound of a whirring cassette
        from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
        Rick Astley.
      </div>
      <span className="paragraph">
        <b>Radosława Majdan</b>
      </span>
      <br />
      <span className="paragraph">Senior Marketing Specialist</span>

      <h1>I make mistakes!</h1>
      <div className="text2">
        “I’m selfish, impatient and a little insecure. I make mistakes, I am out
        of control and at times hard to handle. But if you can’t handle me at my
        worst, then you sure as hell don’t deserve me at my best.”
        <br />{' '}
        <span
          style={{
            fontStyle: 'italic',
            alignItems: 'end',
            justifyContent: 'flex-end',
          }}
        >
          Marilyn Monroe
        </span>
      </div>
      <span className="paragraph">
        <b>Radosława Majdan</b>
      </span>
      <br />
      <span className="paragraph">Senior Marketing Specialist</span>

      <h1>18 Record-Breaking, Controversial, and Weird Facts </h1>
      <div className="text3">
        The death of Queen Elizabeth II on September 8 at the age of 96
        represents a monumental shift for the British monarchy and the people of
        England. Royals have died before, of course, but the Queen ruled for
        more than 70 years, and represented a certain stability and decorum that
        held the institution of the Royal Family together as it slowly grew more
        visibly anachronistic and battered by endless scandals.
      </div>
      <span className="paragraph">
        <b>Radosława Majdan</b>
      </span>
      <br />
      <span className="paragraph">Senior Marketing Specialist</span>
      <div className="container">
        <div dataPosition="2">
          <div>
            <a href="#">Następny artykuł</a>
          </div>
          <br />
          <div>
            <a href="https://lampy.pl">Lampy</a>
          </div>
        </div>

        <div dataPosition="3">
          <div className="hoverable">WIELKA PROMOCJA!</div>
          <br />
          <div>
            {' '}
            <a href="/about">Przejdź do sekcji O NAS</a>
          </div>
        </div>
        <div dataPosition="4">
          <div>
            <a href="https://google.com">Google.com</a>
          </div>
          <br />
          <div>
            <a href="https://aniagotuje.pl/przepis/zupa-minestrone">
              Przepis na zupę Minestrone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
