import React, { Fragment } from 'react';
import './Recipe.css';

const Recipe = ({ recipeDetails }) => {
  //console.log(recipeDetails);

  //const url = recipeDetails.f2f_url.replace('http', 'https');
  const imgUrl = recipeDetails.image_url.replace('http', 'https');

  const limitTitle = (title, limit = 17) => {
    const newTitle = [];
    const wordArray = title.split(' ');

    newTitle.push(wordArray[0]);
    let wordCount = wordArray[0].length;
    for (let i = 1; i < wordArray.length; i++) {
      if (wordCount <= limit) {
        newTitle.push(wordArray[i]);
        wordCount += wordArray[i].length;
      } else {
        newTitle.push('...');
        break;
      }
    }
    return newTitle.join(' ');
  };

  //console.log('img', imgUrl);
  return (
    <Fragment>
      <div className="img-wrapper w-100 flex justify-center">
        <img src={imgUrl} alt="recipe" className="picture h-100" />
      </div>
      <p className="recipe-title mb0 b tc ">{limitTitle(recipeDetails.title)}</p>
      <p className="mt0 f7 tc">{recipeDetails.publisher}</p>
    </Fragment>
  );
};

export default Recipe;
