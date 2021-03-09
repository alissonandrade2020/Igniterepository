import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositores.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
   const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/alissonandrade2020/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
   
    return (
        <section className="repository-list">
             <div className="profileContainer">
                 <img src="https://media-exp1.licdn.com/dms/image/C5603AQF5AHeDK53RIw/profile-displayphoto-shrink_100_100/0/1567017195629?e=1619654400&v=beta&t=CyJ89sI1eVcRsGN-VvJYz8n9rVvu0C7DAAkGAVazaps" alt="Alisson de Andrade Araújo"/>
                 <strong>Alisson de Andrade Araújo</strong>
            </div>
            <br/>
            <h3>Ignite: Turma 01</h3>
            <a href="https://app.rocketseat.com.br/me/alissondeandradearaujo">   
            <strong>Perfil Rocketseat</strong>  
            </a> 
            <br/>
            <br/>
            <a href="https://github.com/alissonandrade2020">   
            <strong> Perfil do Github </strong>
            </a>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/">   
            <strong> Perfil do Linkedin </strong>
            </a> 
            <br/>
            <br/>
            <h1>Repositorios</h1>
         
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}                          
            </ul>
        </section>
    );
}