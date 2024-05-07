import React, { useEffect, useState } from 'react';

const Slider: React.FC = () => {
  const apiUrlRepos = `https://api.github.com/users/Chat809/repos`;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(apiUrlRepos)
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status);
        }

        let data = await res.json();
        setRepos(data);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    const reposList = document.getElementById("repos-list");
    if (reposList) {
      reposList.innerHTML = repos
        .map(item => `<li class="li-repos poppins"><h3>${item.name.toUpperCase()}</h3><a href="${item.html_url}">URL: ${item.html_url}</a></li>`)
        .join("");
    }
  }, [repos]);

  const handleBeforeClick = () => {
    const reposList = document.getElementById("repos-list");
    if (reposList) {
      reposList.appendChild(reposList.firstElementChild);
    }
  };

  const handleNextClick = () => {
    const reposList = document.getElementById("repos-list");
    if (reposList) {
      reposList.insertBefore(reposList.lastElementChild, reposList.firstElementChild);
    }
  };

  return (
    <div className="repos-slider">
      <button className="poppins" id="before" onClick={handleBeforeClick}>Anterior</button>
      <div id="repos-list"></div>
      <button className="poppins" id="next" onClick={handleNextClick}>Próximo</button>
    </div>
  );
};

export default Slider;