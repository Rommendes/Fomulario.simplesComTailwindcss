import { useState } from "react";
import Botao from './Botao'


// eslint-disable-next-line react/prop-types
function Form({onSubmit}) {
  // Define os estados para os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({nome, email, idade, mensagem});
    };
    // Define os dados enviados no estado
    //setDadosEnviados(dados);
  

  return (
    <div className="">

      <form className="" onSubmit={handleSubmit}>
        <div className="form-form ">
          
          <div className="sm:col-span-4 ">
            <label >
              Nome:
              <div className=" text-sm  focus:bg-transparent" >
                <input
                className="for-input"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-4 ">
            <label>
              Email:
              <div className=" text-sm" >
                <input
                className="for-input user-select: none appearance-none "
                color="formulario-200"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-4 ">
            <label>
              Idade:
              <div className=" text-sm">
                <input
                className="for-input"
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="sm:col-span-4 ">
            <label className="">
              Mensagem:
              <div className=" text-sm">
                <textarea
                className="for-input"
                  type="label"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />
              </div>
            </label>
          </div>
           </div>
       <Botao/>
      </form>

      {/* {dadosEnviados && (
        <div className="for-dados">
          <h1>Dados Enviados:</h1>
          <p>Nome: {dadosEnviados.nome}</p>
          <p>Email: {dadosEnviados.email}</p>
          <p>Idade: {dadosEnviados.idade} anos  de idade.</p>
          <p>Mensagem: {dadosEnviados.mensagem}</p>
        </div>
      )} */}
    </div>
  );
}

export default Form;
