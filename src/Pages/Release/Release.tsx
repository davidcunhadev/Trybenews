import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import Card from '../../Components/Card/Card';
import styles from './Release.module.css';
import NewsContext from '../../Context/NewsContext';

function Release() {
  const location = useLocation();
  const { releaseResults, handleFavoriteNews } = useContext(NewsContext);
  const [newsLength, setNewsLength] = useState(15);

  const newsPerPage = () => {
    const fixedIncrement = 15;
    setNewsLength(newsLength + fixedIncrement);
  };

  return (
    location.pathname === '/release' && (
      <section>
        <div className={ styles.cardsGrid }>
          {releaseResults.slice(0, newsLength).map((item) => (
            <Card
              handleFavoriteNews={ handleFavoriteNews }
              key={ item.id }
              news={ item }
            />
          ))}
        </div>
        <button onClick={ newsPerPage } className={ styles.button }>MAIS NOTÍCIAS</button>
      </section>
    )
  );
}

export default Release;
