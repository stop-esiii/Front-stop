import React from "react";
import './Login.css'

function Login(){
    return(
        <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <button className="google-login">Fazer Login com Google</button>
        <div className="divider">
          <hr /> <span>OU</span> <hr />
        </div>
        <form>
          <label>LOGIN:</label>
          <input type="text" placeholder="Insira seu e-mail ou nome aqui." />
          <label>SENHA:</label>
          <input type="password" placeholder="Insira sua senha aqui." />
          <button className="login-button">ENTRAR</button>
        </form>
        <div className="login-footer">
          <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
          <p>Não possui login? <a href="#">Cadastre-se</a></p>
        </div>
      </div>
    </div>
    )
}
export default Login;