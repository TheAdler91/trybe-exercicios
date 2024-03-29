import React from 'react'

      // Content.jsx

      const conteudos = [
        {
          conteudo: 'High Order Functions',
          bloco: 8,
          status: 'Aprendido'
        },
        {
          conteudo: 'Composição de Componentes',
          bloco: 11,
          status: 'Aprendendo',
        },
        {
          conteudo: 'Composição de Estados',
          bloco: 12,
          status: 'Aprenderei'
        },
        {
          conteudo: 'Redux',
          bloco: 16,
          status: 'Aprenderei'
        },
      ]

      class Content extends React.Component {
        render() {
          return(
            <div className="content">
              {conteudos.map((elem) => (
                <div key={elem.conteudo} className="card">
                  <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
                  <p>{`status: ${elem.status}`}</p>
                  <p>{`bloco: ${elem.bloco}`}</p>
                </div>
              ))}
            </div>
          );
        }
      }

      export default Content;