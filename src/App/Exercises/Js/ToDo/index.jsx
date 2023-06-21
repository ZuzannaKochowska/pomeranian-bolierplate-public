import './styles.css';
import { useEffect, useState } from 'react';
// import trashcan from '../../../Images/kosz.svg';
// import tickmark from '../../../Images/ptaszek.svg';

export function SingleTask(props) {
  const { name, author, note, title, deleteToDo, id, isError } = props;

  return (
    <div className="task-index-page">
      <div className="task-list">
        <div className="task-single">
          <div className="task-row-title">
            <h3>{title}</h3>
          </div>
          <p>{author}</p>
          <p>{name}</p>
          <p>{note}</p>
          {isError && <p>Nie da się usunąć elementu</p>}
          <button
            onClick={() => {
              deleteToDo(id);
            }}
            className="button-delete"
          >
            USUŃ
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ----------Zrobione z Szymonem ------------*/
}
{
  /* {data.map((task) => {
          return <p>{task.note}</p>;
        })} */
}
{
  /* ---------------------------- */
}

{
  /* <div className="task-images">
              <img className="task-bin" src={trashcan} alt="trashcan" />
              <img className="task-tick" src={tickmark} alt="tickmark" />
            </div> */
}
