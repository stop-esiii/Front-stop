import React, { useState } from 'react';
import './stylesComponents/SingUpModal.css';

const SignupModal = ({ closeSignup }) => {
        // const id_type_role = 
        const [name, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState({});
    
        const handleSubmit = (e) => {
            e.preventDefault();
           const validationsErros = {};
           if (!name) validationsErros.name = "O nome é obrigatorio.";
           if(!email) validationsErros.email = "O email é obrigatório";
           if(!password) validationsErros.password = "A senha é obrigatória";
           if(!confirmPassword) validationsErros.confirmPassword = "A confirmação de senha é obrigatória";

           if(Object.keys(validationsErros).length > 0 ){
            setError(validationsErros);
           }else{
            console.log("Dados para cadastro:", {name,email,password});
           }
           if(password == confirmPassword){
            setSubmitting(true);
            try{
                const RequestData = {
                    name,
                    email,
                    password,
                }
                const response = await fetch('https://stop-backend.up.railway.app/api/users'),{
                   
            }
           }
           
        };
    return (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeSignup()}>
            <div className="modal-content">
                <button className="close-button" onClick={closeSignup}>X</button>
                <h2>CADASTRO</h2>
                <button className="google-login-button">
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
                    CONTINUAR COM GOOGLE
                </button>
                <div className="separator">OU</div>
                <form>
                    <label>
                        NOME:
                        <input type="text" placeholder="Insira seu nome aqui." 
                        value={name} 
                        onChange={(e) => setNome(e.target.value)}/>
                        {error.name && <span className="error-message">{error.name}</span>}
                    </label>
                    <label>
                        E-MAIL:
                        <input type="email" 
                        placeholder="Insira seu e-mail aqui." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && <span className="error-message">{error.email}</span>}
                    </label>
                    <label>
                        SENHA:
                        <input type="password" 
                        placeholder="Insira sua senha aqui." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password && <span className="error-message">{error.password}</span>}
                    </label>
                    <label>
                        CONFIRMAR SENHA:
                        <input type="password" 
                        placeholder="Insira sua senha novamente aqui." 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error.confirmPassword && <span className="error-message">{error.confirmPassword}</span>}
                    </label>
                    <button className="signup-button"
                    
                    >CADASTRAR</button>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
