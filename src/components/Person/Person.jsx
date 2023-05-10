import React from 'react';

export const Person = ({ person }) => {
  let partner;

  if (person.sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>

      {person.age && (
        <p className="Person__age">
          I am
          {' '}
          {person.age}
        </p>
      )}

      { person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName}
          {' '}
          is my
          {partner}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      ) }
    </section>
  );
};
