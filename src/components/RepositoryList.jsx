import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositores.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React', 
    link: "https://github.com/unform/unform",
}

export function RepositoryList() {
   const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/alissonandrade2020/repos')
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);
   
    return (
        <section className="repository-list">
            <h2>Desenvolvido por: Alisson de Andrade Araújo</h2>

            <h3>Ignite: Turma 01</h3>
            <a href="https://app.rocketseat.com.br/me/alissondeandradearaujo">   
            Perfil Rocketseat 
            </a> 
            <br/>
            <br/>
            <a href="https://github.com/alissonandrade2020">   
            Perfil do Github  
            </a>
            <br/>
            <br/>
            <a href="https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/">   
            Perfil do Linkedin 
            </a> 
            <br/>
            <br/>
            <h1>Lista de Repositorios</h1>
         
            <ul>
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
               <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}