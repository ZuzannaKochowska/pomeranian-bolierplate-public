import './styles.css';

export function StandardTags() {
  return (
    <div>
      <p> Styl Tagów Standardowych </p>
      <div className="original-tags">
        <h1>Title</h1>
        <small>05.2023</small>
        <h3>
          H<sub>2</sub>O is good for you
        </h3>
        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>
        <h3>
          25<sup>th</sup> birthday
        </h3>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of <i>happy birthday</i>{' '}
          <q>quotes</q> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of{' '}
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>{' '}
          can stop you!
        </p>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          {' '}
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>{' '}
          <ul>
            {' '}
            <li>Todo 1</li> <li>Todo 2</li> <li>Todo 3</li>{' '}
          </ul>
        </p>
      </div>
      <div className="faked-tags">
        <div className="faked-title">Title</div>
        <div className="data">05.2023</div>
        <div className="smaller-title">
          H<sub>2</sub>O is good for you
        </div>
        <div>
          Staying <span className="bold-text">hydrated</span> is one of the best
          things you can do for your overall health. Staying{' '}
          <span className="bold-text"> hydrated</span> can help support physical
          performance, prevent headaches and constipation, and more.
        </div>
        <div className="smaller-title">
          25<sup>th</sup> birthday
        </div>
        <div>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of{' '}
          <span className="italic">happy birthday</span> <q>quotes</q> to help
          put a smile on someone’s face. From inspirational to funny to cute
          sayings, browse our list of <q>quotes</q> to find one that resonates
          with you. <span className="expunction">Nothing</span> can stop you!
        </div>
        <div className="smaller-title-2">
          Why not to use <ins>lists</ins> ?
        </div>
        <p>
          {' '}
          <div className="subpoint">
            A lot of things to do <span className="italic">#todo</span>
          </div>{' '}
          <div className="list">
            {' '}
            <li>Todo 1</li> <li>Todo 2</li> <li>Todo 3</li>{' '}
          </div>
        </p>
      </div>
      ;
    </div>
  );
}
