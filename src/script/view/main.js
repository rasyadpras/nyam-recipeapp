import '../component/search-bar';
import '../component/food-list';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('food-list');

  const renderResult = (results) => {
    foodListElement.foods = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  const onButtonSearchClicked = () => {
    DataSource.searchFood(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
