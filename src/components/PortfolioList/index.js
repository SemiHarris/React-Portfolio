import React, { useState } from 'react';

function PortfolioList(props) {

    const [currentPortfolio] = useState([ 
    {
        name: 'Run Buddy',
        link: 'https://semiharris.github.io/run-buddy/',
        file: 'runbuddy'
    },
    {
      name: 'Robot Gladiater',
      link: 'https://semiharris.github.io/robot-gladiators/;',
      file: 'robotgladiater'
    },
    {
      name: 'Feedme',
      link: 'https://dashboard.heroku.com/apps/group2-feedme',
      file: 'feedme'
    },
    {
      name: 'News4U',
      link: 'https://rpkrupali1.github.io/News4U/',
      file: 'news4u'
    }
  ])

  return (
    <section>
      <div className='flex-row'>
        {currentPortfolio.map((image) => (
          <div className='flex-row mx-2'>
            <a href={image.link}>{image.file}</a>
          <img
          src={require(`../../assets/images/${image.file}.jpg`)}
          alt={image.name}
          key={image.name}
          />
          </div>
        ))}
      </div>
    </section>
  );
}
export default PortfolioList;